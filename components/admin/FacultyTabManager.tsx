'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, GripVertical } from 'lucide-react'

interface TabItem {
  id: string
  text: string
}

interface TabData {
  heading: string
  description: string
  items: TabItem[]
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
  
  const addItem = () => {
    const newItem: TabItem = {
      id: `item-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      items: [...data.items, newItem]
    })
  }

  const removeItem = (index: number) => {
    onChange({
      ...data,
      items: data.items.filter((_, i) => i !== index)
    })
  }

  const updateItem = (index: number, text: string) => {
    const updated = [...data.items]
    updated[index].text = text
    onChange({
      ...data,
      items: updated
    })
  }

  const badgeColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600'
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Button type="button" onClick={addItem} variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add {itemLabel}
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${title}-heading`}>Heading</Label>
        <Input
          id={`${title}-heading`}
          placeholder={`e.g., ${title}`}
          value={data.heading}
          onChange={(e) => onChange({ ...data, heading: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${title}-description`}>Description</Label>
        <textarea
          id={`${title}-description`}
          className="w-full min-h-[100px] px-3 py-2 border rounded-md"
          placeholder={placeholder}
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
        />
      </div>

      <div className="space-y-3">
        <Label>{itemLabel}s</Label>
        {data.items.length === 0 ? (
          <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
            No {itemLabel.toLowerCase()}s added. Click &quot;Add {itemLabel}&quot; to add items.
          </div>
        ) : (
          data.items.map((item, index) => (
            <div key={item.id} className="flex gap-2 items-start">
              <div className={`flex-shrink-0 w-8 h-8 ${badgeColors[badgeColor]} text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1`}>
                {index + 1}
              </div>
              <textarea
                className="flex-1 min-h-[80px] px-3 py-2 border rounded-md"
                placeholder={`Enter ${itemLabel.toLowerCase()} ${index + 1}...`}
                value={item.text}
                onChange={(e) => updateItem(index, e.target.value)}
              />
              <Button
                type="button"
                onClick={() => removeItem(index)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 mt-1"
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
