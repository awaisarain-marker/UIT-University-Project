'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, MoveUp, MoveDown } from 'lucide-react'

// Content block can be: point, heading, or description
type ContentBlockType = 'point' | 'heading' | 'description'

interface ContentBlock {
  id: string
  type: ContentBlockType
  text: string
  order: number
}

interface TabData {
  heading: string
  description: string
  items: Array<{ id: string; text: string }>
}

interface FacultyTabManagerProps {
  title: string
  data: TabData
  onChange: (data: TabData) => void
  itemLabel?: string
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'red'
  placeholder?: string
}

export default function FacultyTabManager({
  title,
  data,
  onChange,
  itemLabel = 'Item',
  badgeColor = 'blue',
  placeholder = 'Enter description...'
}: FacultyTabManagerProps) {
  
  // Convert old data structure to new blocks structure
  const getBlocks = (): ContentBlock[] => {
    const blocks: ContentBlock[] = []
    let order = 0

    // Add points first (as requested)
    if (data.items && data.items.length > 0) {
      data.items.forEach((item) => {
        blocks.push({
          id: item.id,
          type: 'point',
          text: item.text,
          order: order++
        })
      })
    }

    // Then add heading if exists
    if (data.heading) {
      blocks.push({
        id: 'heading-main',
        type: 'heading',
        text: data.heading,
        order: order++
      })
    }

    // Then add description if exists
    if (data.description) {
      blocks.push({
        id: 'description-main',
        type: 'description',
        text: data.description,
        order: order++
      })
    }

    return blocks.sort((a, b) => a.order - b.order)
  }

  // Convert blocks back to old data structure
  const updateFromBlocks = (blocks: ContentBlock[]) => {
    const items = blocks
      .filter(b => b.type === 'point')
      .map(b => ({ id: b.id, text: b.text }))
    
    const headingBlock = blocks.find(b => b.type === 'heading')
    const descriptionBlock = blocks.find(b => b.type === 'description')

    onChange({
      heading: headingBlock?.text || '',
      description: descriptionBlock?.text || '',
      items: items
    })
  }

  const blocks = getBlocks()

  const addPoint = () => {
    const newBlock: ContentBlock = {
      id: `point-${Date.now()}`,
      type: 'point',
      text: '',
      order: 0 // Points go first
    }
    const updatedBlocks = [newBlock, ...blocks.map(b => ({ ...b, order: b.order + 1 }))]
    updateFromBlocks(updatedBlocks)
  }

  const addHeading = () => {
    const newBlock: ContentBlock = {
      id: `heading-${Date.now()}`,
      type: 'heading',
      text: '',
      order: blocks.length
    }
    updateFromBlocks([...blocks, newBlock])
  }

  const addDescription = () => {
    const newBlock: ContentBlock = {
      id: `description-${Date.now()}`,
      type: 'description',
      text: '',
      order: blocks.length
    }
    updateFromBlocks([...blocks, newBlock])
  }

  const removeBlock = (id: string) => {
    const updatedBlocks = blocks
      .filter(b => b.id !== id)
      .map((b, index) => ({ ...b, order: index }))
    updateFromBlocks(updatedBlocks)
  }

  const updateBlock = (id: string, text: string) => {
    const updatedBlocks = blocks.map(b => 
      b.id === id ? { ...b, text } : b
    )
    updateFromBlocks(updatedBlocks)
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === blocks.length - 1)
    ) {
      return
    }

    const newBlocks = [...blocks]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    
    // Swap
    ;[newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]]
    
    // Update order
    const reorderedBlocks = newBlocks.map((b, i) => ({ ...b, order: i }))
    updateFromBlocks(reorderedBlocks)
  }

  const badgeColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600'
  }

  const getPointNumber = (blockIndex: number): number => {
    return blocks.slice(0, blockIndex + 1).filter(b => b.type === 'point').length
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <Button 
            type="button" 
            onClick={addDescription} 
            size="sm" 
            className="gap-2 bg-red-600 hover:bg-red-700"
          >
            Add Description
          </Button>
          <Button 
            type="button" 
            onClick={addHeading} 
            size="sm" 
            className="gap-2 bg-red-600 hover:bg-red-700"
          >
            Add Heading
          </Button>
          <Button type="button" onClick={addPoint} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add {itemLabel}
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {blocks.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm border border-dashed rounded">
            No content added yet. Click the buttons above to add {itemLabel.toLowerCase()}s, headings, or descriptions.
          </div>
        ) : (
          blocks.map((block, index) => (
            <div key={block.id} className="flex gap-2 items-start bg-white p-3 rounded-lg border">
              {/* Move buttons */}
              <div className="flex flex-col gap-1">
                <Button
                  type="button"
                  onClick={() => moveBlock(index, 'up')}
                  disabled={index === 0}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  <MoveUp className="w-3 h-3" />
                </Button>
                <Button
                  type="button"
                  onClick={() => moveBlock(index, 'down')}
                  disabled={index === blocks.length - 1}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  <MoveDown className="w-3 h-3" />
                </Button>
              </div>

              {/* Content based on type */}
              <div className="flex-1">
                {block.type === 'point' && (
                  <div className="flex gap-2 items-start">
                    <div className={`flex-shrink-0 w-8 h-8 ${badgeColors[badgeColor]} text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1`}>
                      {getPointNumber(index)}
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-gray-500 mb-1">Point</Label>
                      <textarea
                        className="w-full min-h-[80px] px-3 py-2 border rounded-md"
                        placeholder={`Enter ${itemLabel.toLowerCase()} ${getPointNumber(index)}...`}
                        value={block.text}
                        onChange={(e) => updateBlock(block.id, e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {block.type === 'heading' && (
                  <div>
                    <Label className="text-xs text-gray-500 mb-1">Heading</Label>
                    <Input
                      placeholder="Enter heading..."
                      value={block.text}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                    />
                  </div>
                )}

                {block.type === 'description' && (
                  <div>
                    <Label className="text-xs text-gray-500 mb-1">Description</Label>
                    <textarea
                      className="w-full min-h-[100px] px-3 py-2 border rounded-md"
                      placeholder={placeholder}
                      value={block.text}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                    />
                  </div>
                )}
              </div>

              {/* Delete button */}
              <Button
                type="button"
                onClick={() => removeBlock(block.id)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
