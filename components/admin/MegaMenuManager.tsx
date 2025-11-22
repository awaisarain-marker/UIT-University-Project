'use client'

import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, GripVertical } from 'lucide-react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

// Debounce helper
function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

interface MegaMenuLink {
  id: string
  section_id: string
  title: string
  url: string
  target: string
  display_order: number
  is_active: boolean
}

interface MegaMenuSection {
  id: string
  menu_item_id: string
  title: string
  display_order: number
  is_active: boolean
  links?: MegaMenuLink[]
}

interface MegaMenuManagerProps {
  menuId: string
  menuItemId: string
  initialSections: MegaMenuSection[]
  initialLinks: MegaMenuLink[]
}

function MegaMenuManager({
  menuId,
  menuItemId,
  initialSections,
  initialLinks,
}: MegaMenuManagerProps) {
  const [sections, setSections] = useState<MegaMenuSection[]>(
    initialSections.map(section => ({
      ...section,
      links: initialLinks.filter(link => link.section_id === section.id)
    }))
  )
  const [draggedSection, setDraggedSection] = useState<string | null>(null)
  const [draggedLink, setDraggedLink] = useState<{ sectionId: string; linkId: string } | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const addSection = async () => {
    const newSection = {
      menu_item_id: menuItemId,
      title: 'New Section',
      display_order: sections.length,
      is_active: true,
    }

    const { data, error } = await supabase
      .from('mega_menu_sections')
      .insert(newSection)
      .select()
      .single()

    if (data && !error) {
      setSections([...sections, { ...data, links: [] }])
    }
  }

  // Debounced database update
  const debouncedUpdateSection = useCallback(
    debounce(async (sectionId: string, title: string) => {
      await supabase
        .from('mega_menu_sections')
        .update({ title })
        .eq('id', sectionId)
    }, 500),
    []
  )

  const updateSection = (sectionId: string, title: string) => {
    // Update UI immediately
    setSections(sections.map(s => s.id === sectionId ? { ...s, title } : s))
    // Update database with debounce
    debouncedUpdateSection(sectionId, title)
  }

  const deleteSection = async (sectionId: string) => {
    await supabase
      .from('mega_menu_sections')
      .delete()
      .eq('id', sectionId)

    setSections(sections.filter(s => s.id !== sectionId))
  }

  const addLink = async (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    const newLink = {
      section_id: sectionId,
      title: 'New Link',
      url: '/',
      target: '_self',
      display_order: section?.links?.length || 0,
      is_active: true,
    }

    const { data, error } = await supabase
      .from('mega_menu_links')
      .insert(newLink)
      .select()
      .single()

    if (data && !error) {
      setSections(sections.map(s => 
        s.id === sectionId 
          ? { ...s, links: [...(s.links || []), data] }
          : s
      ))
    }
  }

  // Debounced link update
  const debouncedUpdateLink = useCallback(
    debounce(async (linkId: string, field: string, value: string) => {
      await supabase
        .from('mega_menu_links')
        .update({ [field]: value })
        .eq('id', linkId)
    }, 500),
    []
  )

  const updateLink = (sectionId: string, linkId: string, field: string, value: string) => {
    // Update UI immediately
    setSections(sections.map(s => 
      s.id === sectionId 
        ? {
            ...s,
            links: s.links?.map(l => 
              l.id === linkId ? { ...l, [field]: value } : l
            )
          }
        : s
    ))
    // Update database with debounce
    debouncedUpdateLink(linkId, field, value)
  }

  const deleteLink = async (sectionId: string, linkId: string) => {
    await supabase
      .from('mega_menu_links')
      .delete()
      .eq('id', linkId)

    setSections(sections.map(s => 
      s.id === sectionId 
        ? { ...s, links: s.links?.filter(l => l.id !== linkId) }
        : s
    ))
  }

  // Section drag and drop
  const handleSectionDragStart = (e: React.DragEvent, sectionId: string) => {
    setDraggedSection(sectionId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleSectionDrop = async (e: React.DragEvent, targetSectionId: string) => {
    e.preventDefault()
    
    if (!draggedSection || draggedSection === targetSectionId) {
      setDraggedSection(null)
      return
    }

    const draggedIndex = sections.findIndex(s => s.id === draggedSection)
    const targetIndex = sections.findIndex(s => s.id === targetSectionId)

    const newSections = [...sections]
    const [removed] = newSections.splice(draggedIndex, 1)
    newSections.splice(targetIndex, 0, removed)

    // Update display_order
    for (let i = 0; i < newSections.length; i++) {
      await supabase
        .from('mega_menu_sections')
        .update({ display_order: i })
        .eq('id', newSections[i].id)
    }

    setSections(newSections)
    setDraggedSection(null)
  }

  // Link drag and drop
  const handleLinkDragStart = (e: React.DragEvent, sectionId: string, linkId: string) => {
    setDraggedLink({ sectionId, linkId })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleLinkDrop = async (e: React.DragEvent, targetSectionId: string, targetLinkId: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!draggedLink || (draggedLink.sectionId === targetSectionId && draggedLink.linkId === targetLinkId)) {
      setDraggedLink(null)
      return
    }

    const section = sections.find(s => s.id === targetSectionId)
    if (!section?.links) return

    const draggedIndex = section.links.findIndex(l => l.id === draggedLink.linkId)
    const targetIndex = section.links.findIndex(l => l.id === targetLinkId)

    const newLinks = [...section.links]
    const [removed] = newLinks.splice(draggedIndex, 1)
    newLinks.splice(targetIndex, 0, removed)

    // Update display_order
    for (let i = 0; i < newLinks.length; i++) {
      await supabase
        .from('mega_menu_links')
        .update({ display_order: i })
        .eq('id', newLinks[i].id)
    }

    setSections(sections.map(s => 
      s.id === targetSectionId ? { ...s, links: newLinks } : s
    ))
    setDraggedLink(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Mega Menu Sections</h2>
        <Button onClick={addSection} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Section
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`bg-white border rounded-lg p-4 ${
              draggedSection === section.id ? 'opacity-50' : ''
            }`}
            draggable
            onDragStart={(e) => handleSectionDragStart(e, section.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleSectionDrop(e, section.id)}
          >
            <div className="flex items-start gap-2 mb-4">
              <GripVertical className="w-5 h-5 text-gray-400 cursor-grab active:cursor-grabbing mt-2" />
              <div className="flex-1">
                <Input
                  value={section.title}
                  onChange={(e) => updateSection(section.id, e.target.value)}
                  className="font-semibold text-lg mb-2"
                  placeholder="Section Title"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteSection(section.id)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2 mb-3">
              {section.links?.map((link) => (
                <div
                  key={link.id}
                  className={`border rounded p-2 bg-gray-50 ${
                    draggedLink?.linkId === link.id ? 'opacity-50' : ''
                  }`}
                  draggable
                  onDragStart={(e) => handleLinkDragStart(e, section.id, link.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleLinkDrop(e, section.id, link.id)}
                >
                  <div className="flex items-start gap-2">
                    <GripVertical className="w-4 h-4 text-gray-400 cursor-grab active:cursor-grabbing mt-1" />
                    <div className="flex-1 space-y-2">
                      <Input
                        value={link.title}
                        onChange={(e) => updateLink(section.id, link.id, 'title', e.target.value)}
                        placeholder="Link Title"
                        className="text-sm"
                      />
                      <Input
                        value={link.url}
                        onChange={(e) => updateLink(section.id, link.id, 'url', e.target.value)}
                        placeholder="URL"
                        className="text-sm"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteLink(section.id, link.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => addLink(section.id)}
              className="w-full gap-2"
            >
              <Plus className="w-3 h-3" />
              Add Link
            </Button>
          </div>
        ))}
      </div>

      {sections.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No sections yet. Click "Add Section" to create your first mega menu section.
        </div>
      )}
    </div>
  )
}


export default MegaMenuManager
