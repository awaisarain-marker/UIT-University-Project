'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, GripVertical, Image as ImageIcon } from 'lucide-react'
import ImageUpload from '@/components/admin/ImageUpload'
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

// Content block can be: point, heading, description, or image
type ContentBlockType = 'point' | 'heading' | 'description' | 'image'

interface ContentBlock {
  id: string
  type: ContentBlockType
  text: string
  order: number
  imageUrl?: string // For image blocks
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

// Sortable Item Component
function SortableBlock({
  block,
  index,
  badgeColor,
  itemLabel,
  onUpdate,
  onRemove,
  getPointNumber,
}: {
  block: ContentBlock
  index: number
  badgeColor: string
  itemLabel: string
  onUpdate: (id: string, text: string, imageUrl?: string) => void
  onRemove: (id: string) => void
  getPointNumber: (index: number) => number
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex gap-2 items-start bg-white p-3 rounded-lg border hover:border-gray-400 transition-colors"
    >
      {/* Drag Handle */}
      <button
        type="button"
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 mt-1"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="w-5 h-5" />
      </button>

      {/* Content based on type */}
      <div className="flex-1">
        {block.type === 'point' && (
          <div className="flex gap-2 items-start">
            <div className={`flex-shrink-0 w-8 h-8 ${badgeColor} text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1`}>
              {getPointNumber(index)}
            </div>
            <div className="flex-1">
              <Label className="text-xs text-gray-500 mb-1">Point</Label>
              <textarea
                className="w-full min-h-[80px] px-3 py-2 border rounded-md"
                placeholder={`Enter ${itemLabel.toLowerCase()} ${getPointNumber(index)}...`}
                value={block.text}
                onChange={(e) => onUpdate(block.id, e.target.value)}
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
              onChange={(e) => onUpdate(block.id, e.target.value)}
            />
          </div>
        )}

        {block.type === 'description' && (
          <div>
            <Label className="text-xs text-gray-500 mb-1">Description</Label>
            <textarea
              className="w-full min-h-[100px] px-3 py-2 border rounded-md"
              placeholder="Enter description..."
              value={block.text}
              onChange={(e) => onUpdate(block.id, e.target.value)}
            />
          </div>
        )}

        {block.type === 'image' && (
          <div>
            <Label className="text-xs text-gray-500 mb-1">Image</Label>
            <ImageUpload
              label=""
              value={block.imageUrl || ''}
              onChange={(url) => onUpdate(block.id, block.text, url)}
              folder="faculty/content"
            />
            {block.imageUrl && (
              <div className="mt-2">
                <img 
                  src={block.imageUrl} 
                  alt="Content" 
                  className="max-w-full h-auto rounded border"
                />
              </div>
            )}
            <Input
              placeholder="Optional caption..."
              value={block.text}
              onChange={(e) => onUpdate(block.id, e.target.value, block.imageUrl)}
              className="mt-2"
            />
          </div>
        )}
      </div>

      {/* Delete button */}
      <Button
        type="button"
        onClick={() => onRemove(block.id)}
        variant="ghost"
        size="sm"
        className="text-red-600 hover:text-red-700"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
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

    // Check if items array has the new format (with type field)
    if (data.items && data.items.length > 0) {
      const firstItem = data.items[0] as any
      
      if (firstItem.type) {
        // New format: items array contains all blocks with types
        return data.items.map((item: any, index) => ({
          id: item.id,
          type: item.type || 'point',
          text: item.text,
          order: item.order !== undefined ? item.order : index,
          imageUrl: item.imageUrl
        })).sort((a, b) => a.order - b.order)
      } else {
        // Old format: items are just points
        let order = 0
        
        // Add points first
        data.items.forEach((item) => {
          blocks.push({
            id: item.id,
            type: 'point',
            text: item.text,
            order: order++
          })
        })

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
      }
    } else {
      // No items, check for old format heading/description
      let order = 0
      
      if (data.heading) {
        blocks.push({
          id: 'heading-main',
          type: 'heading',
          text: data.heading,
          order: order++
        })
      }

      if (data.description) {
        blocks.push({
          id: 'description-main',
          type: 'description',
          text: data.description,
          order: order++
        })
      }
    }

    return blocks.sort((a, b) => a.order - b.order)
  }

  // Convert blocks back to old data structure
  const updateFromBlocks = (blocks: ContentBlock[]) => {
    const items = blocks.map(b => ({
      id: b.id,
      text: b.text,
      type: b.type,
      order: b.order,
      imageUrl: b.imageUrl
    }))

    onChange({
      heading: '',
      description: '',
      items: items as any
    })
  }

  const blocks = getBlocks()

  const addPoint = () => {
    const newBlock: ContentBlock = {
      id: `point-${Date.now()}`,
      type: 'point',
      text: '',
      order: 0
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

  const addImage = () => {
    const newBlock: ContentBlock = {
      id: `image-${Date.now()}`,
      type: 'image',
      text: '',
      order: blocks.length,
      imageUrl: ''
    }
    updateFromBlocks([...blocks, newBlock])
  }

  const removeBlock = (id: string) => {
    const updatedBlocks = blocks
      .filter(b => b.id !== id)
      .map((b, index) => ({ ...b, order: index }))
    updateFromBlocks(updatedBlocks)
  }

  const updateBlock = (id: string, text: string, imageUrl?: string) => {
    const updatedBlocks = blocks.map(b => 
      b.id === id ? { ...b, text, imageUrl: imageUrl !== undefined ? imageUrl : b.imageUrl } : b
    )
    updateFromBlocks(updatedBlocks)
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
      const oldIndex = blocks.findIndex(b => b.id === active.id)
      const newIndex = blocks.findIndex(b => b.id === over.id)

      const reorderedBlocks = arrayMove(blocks, oldIndex, newIndex).map((b, index) => ({
        ...b,
        order: index
      }))

      updateFromBlocks(reorderedBlocks)
    }
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <Button 
            type="button" 
            onClick={addImage} 
            variant="outline"
            size="sm" 
            className="gap-2"
          >
            <ImageIcon className="w-4 h-4" />
            Add Image
          </Button>
          <Button 
            type="button" 
            onClick={addDescription} 
            variant="outline"
            size="sm" 
            className="gap-2"
          >
            Add Description
          </Button>
          <Button 
            type="button" 
            onClick={addHeading} 
            variant="outline"
            size="sm" 
            className="gap-2"
          >
            Add Heading
          </Button>
          <Button 
            type="button" 
            onClick={addPoint} 
            variant="outline" 
            size="sm" 
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Add {itemLabel}
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {blocks.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm border border-dashed rounded">
            No content added yet. Click the buttons above to add {itemLabel.toLowerCase()}s, headings, descriptions, or images.
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={blocks.map(b => b.id)}
              strategy={verticalListSortingStrategy}
            >
              {blocks.map((block, index) => (
                <SortableBlock
                  key={block.id}
                  block={block}
                  index={index}
                  badgeColor={badgeColors[badgeColor]}
                  itemLabel={itemLabel}
                  onUpdate={updateBlock}
                  onRemove={removeBlock}
                  getPointNumber={getPointNumber}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  )
}
