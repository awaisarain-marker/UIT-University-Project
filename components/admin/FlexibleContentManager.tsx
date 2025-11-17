'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, GripVertical, Image as ImageIcon } from 'lucide-react'
import ImageUpload from '@/components/admin/ImageUpload'
import RichTextEditor from '@/components/admin/RichTextEditor'
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

// Content block can be: point, heading, description, image, or table
type ContentBlockType = 'point' | 'heading' | 'description' | 'image' | 'table'

interface TableRow {
  id: string
  col1: string
  col2: string
}

interface ContentBlock {
  id: string
  type: ContentBlockType
  text: string
  order: number
  imageUrl?: string // For image blocks
  tableData?: {
    col1Header: string
    col2Header: string
    rows: TableRow[]
  } // For table blocks
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
  onUpdate: (id: string, text: string, imageUrl?: string, tableData?: any) => void
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
            <Label className="text-xs text-gray-500 mb-1">Description (Rich Text)</Label>
            <RichTextEditor
              value={block.text}
              onChange={(html) => onUpdate(block.id, html)}
              placeholder="Enter description with formatting..."
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

        {block.type === 'table' && (
          <div>
            <Label className="text-xs text-gray-500 mb-1">2-Column Table</Label>
            
            {/* Table Headers */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input
                placeholder="Column 1 Heading (e.g., Course Code)"
                value={block.tableData?.col1Header || ''}
                onChange={(e) => {
                  const newTableData = {
                    ...block.tableData,
                    col1Header: e.target.value,
                    col2Header: block.tableData?.col2Header || '',
                    rows: block.tableData?.rows || []
                  }
                  onUpdate(block.id, block.text, undefined, newTableData)
                }}
              />
              <Input
                placeholder="Column 2 Heading (e.g., Course Title)"
                value={block.tableData?.col2Header || ''}
                onChange={(e) => {
                  const newTableData = {
                    ...block.tableData,
                    col1Header: block.tableData?.col1Header || '',
                    col2Header: e.target.value,
                    rows: block.tableData?.rows || []
                  }
                  onUpdate(block.id, block.text, undefined, newTableData)
                }}
              />
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {(block.tableData?.rows || []).map((row, rowIndex) => (
                <div key={row.id} className="grid grid-cols-2 gap-2 items-center">
                  <Input
                    placeholder={`Row ${rowIndex + 1}, Col 1`}
                    value={row.col1}
                    onChange={(e) => {
                      const newRows = [...(block.tableData?.rows || [])]
                      newRows[rowIndex] = { ...row, col1: e.target.value }
                      const newTableData = {
                        ...block.tableData,
                        col1Header: block.tableData?.col1Header || '',
                        col2Header: block.tableData?.col2Header || '',
                        rows: newRows
                      }
                      onUpdate(block.id, block.text, undefined, newTableData)
                    }}
                  />
                  <div className="flex gap-2">
                    <Input
                      placeholder={`Row ${rowIndex + 1}, Col 2`}
                      value={row.col2}
                      onChange={(e) => {
                        const newRows = [...(block.tableData?.rows || [])]
                        newRows[rowIndex] = { ...row, col2: e.target.value }
                        const newTableData = {
                          ...block.tableData,
                          col1Header: block.tableData?.col1Header || '',
                          col2Header: block.tableData?.col2Header || '',
                          rows: newRows
                        }
                        onUpdate(block.id, block.text, undefined, newTableData)
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const newRows = (block.tableData?.rows || []).filter((_, i) => i !== rowIndex)
                        const newTableData = {
                          ...block.tableData,
                          col1Header: block.tableData?.col1Header || '',
                          col2Header: block.tableData?.col2Header || '',
                          rows: newRows
                        }
                        onUpdate(block.id, block.text, undefined, newTableData)
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Row Button */}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 w-full"
              onClick={() => {
                const newRow: TableRow = {
                  id: `row-${Date.now()}`,
                  col1: '',
                  col2: ''
                }
                const newTableData = {
                  ...block.tableData,
                  col1Header: block.tableData?.col1Header || '',
                  col2Header: block.tableData?.col2Header || '',
                  rows: [...(block.tableData?.rows || []), newRow]
                }
                onUpdate(block.id, block.text, undefined, newTableData)
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Row
            </Button>
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
          imageUrl: item.imageUrl,
          tableData: item.tableData
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
      imageUrl: b.imageUrl,
      tableData: b.tableData
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

  const addTable = () => {
    const newBlock: ContentBlock = {
      id: `table-${Date.now()}`,
      type: 'table',
      text: '',
      order: blocks.length,
      tableData: {
        col1Header: '',
        col2Header: '',
        rows: [
          { id: `row-${Date.now()}-1`, col1: '', col2: '' },
          { id: `row-${Date.now()}-2`, col1: '', col2: '' }
        ]
      }
    }
    updateFromBlocks([...blocks, newBlock])
  }

  const removeBlock = (id: string) => {
    const updatedBlocks = blocks
      .filter(b => b.id !== id)
      .map((b, index) => ({ ...b, order: index }))
    updateFromBlocks(updatedBlocks)
  }

  const updateBlock = (id: string, text: string, imageUrl?: string, tableData?: any) => {
    const updatedBlocks = blocks.map(b => 
      b.id === id ? { 
        ...b, 
        text, 
        imageUrl: imageUrl !== undefined ? imageUrl : b.imageUrl,
        tableData: tableData !== undefined ? tableData : b.tableData
      } : b
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
        <div className="flex gap-2 flex-wrap">
          <Button 
            type="button" 
            onClick={addTable} 
            variant="outline"
            size="sm" 
            className="gap-2 bg-red-600 text-white hover:bg-red-700 hover:text-white"
          >
            Add Table
          </Button>
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
