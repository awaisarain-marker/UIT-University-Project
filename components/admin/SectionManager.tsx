'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from 'lucide-react'
import FlexibleContentManager from './FlexibleContentManager'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Section {
  id: string
  title: string
  order: number
  isExpanded: boolean
  content: {
    heading: string
    description: string
    items: any[]
  }
}

interface SectionManagerProps {
  sections: Section[]
  onChange: (sections: Section[]) => void
}

// Sortable Section Component
function SortableSection({
  section,
  onUpdate,
  onRemove,
  onToggle,
}: {
  section: Section
  onUpdate: (id: string, updates: Partial<Section>) => void
  onRemove: (id: string) => void
  onToggle: (id: string) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border rounded-lg shadow-sm mb-4"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 border-b">
        {/* Drag Handle */}
        <button
          type="button"
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="w-5 h-5" />
        </button>

        {/* Section Title */}
        <div className="flex-1">
          <Input
            value={section.title}
            onChange={(e) => onUpdate(section.id, { title: e.target.value })}
            placeholder="Section Title (e.g., Program Overview)"
            className="font-semibold"
          />
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onToggle(section.id)}
          >
            {section.isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onRemove(section.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Section Content (Collapsible) */}
      {section.isExpanded && (
        <div className="p-4">
          <FlexibleContentManager
            title=""
            data={section.content}
            onChange={(newContent) => onUpdate(section.id, { content: newContent })}
            itemLabel="Point"
            badgeColor="blue"
            placeholder="Enter content..."
          />
        </div>
      )}
    </div>
  )
}

export default function SectionManager({ sections, onChange }: SectionManagerProps) {
  const addSection = () => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      title: 'New Section',
      order: sections.length,
      isExpanded: true,
      content: {
        heading: '',
        description: '',
        items: []
      }
    }
    onChange([...sections, newSection])
  }

  const updateSection = (id: string, updates: Partial<Section>) => {
    onChange(
      sections.map(s => s.id === id ? { ...s, ...updates } : s)
    )
  }

  const removeSection = (id: string) => {
    if (!confirm('Are you sure you want to delete this section?')) return
    onChange(
      sections
        .filter(s => s.id !== id)
        .map((s, index) => ({ ...s, order: index }))
    )
  }

  const toggleSection = (id: string) => {
    onChange(
      sections.map(s => s.id === id ? { ...s, isExpanded: !s.isExpanded } : s)
    )
  }

  // Drag & Drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id)
      const newIndex = sections.findIndex(s => s.id === over.id)

      const reorderedSections = arrayMove(sections, oldIndex, newIndex).map((s, index) => ({
        ...s,
        order: index
      }))

      onChange(reorderedSections)
    }
  }

  return (
    <div className="space-y-4">
      {/* Add Section Button */}
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={addSection}
          variant="default"
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Section
        </Button>
      </div>

      {/* Sections List */}
      {sections.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed rounded-lg">
          <p className="text-gray-500 mb-4">No sections yet. Click "Add Section" to create your first section.</p>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map(s => s.id)}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((section) => (
              <SortableSection
                key={section.id}
                section={section}
                onUpdate={updateSection}
                onRemove={removeSection}
                onToggle={toggleSection}
              />
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  )
}
