'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2 } from 'lucide-react'
import ImageUpload from '@/components/admin/ImageUpload'

interface PEOItem {
  id: string
  text: string
}

interface PLOItem {
  id: string
  text: string
}

interface PEOsPLOsData {
  peo_heading: string
  peo_description: string
  peos: PEOItem[]
  plo_heading: string
  plo_description: string
  plos: PLOItem[]
  mapping_image_url: string
}

interface PEOsPLOsManagerProps {
  data: PEOsPLOsData
  onChange: (data: PEOsPLOsData) => void
}

export default function PEOsPLOsManager({ data, onChange }: PEOsPLOsManagerProps) {
  const addPEO = () => {
    const newPEO: PEOItem = {
      id: `peo-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      peos: [...data.peos, newPEO]
    })
  }

  const removePEO = (index: number) => {
    onChange({
      ...data,
      peos: data.peos.filter((_, i) => i !== index)
    })
  }

  const updatePEO = (index: number, text: string) => {
    const updated = [...data.peos]
    updated[index].text = text
    onChange({
      ...data,
      peos: updated
    })
  }

  const addPLO = () => {
    const newPLO: PLOItem = {
      id: `plo-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      plos: [...data.plos, newPLO]
    })
  }

  const removePLO = (index: number) => {
    onChange({
      ...data,
      plos: data.plos.filter((_, i) => i !== index)
    })
  }

  const updatePLO = (index: number, text: string) => {
    const updated = [...data.plos]
    updated[index].text = text
    onChange({
      ...data,
      plos: updated
    })
  }

  return (
    <div className="space-y-8">
      {/* PEOs Section */}
      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Program Educational Objectives (PEO&apos;s)</h3>
          <Button type="button" onClick={addPEO} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add PEO
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="peo_heading">Heading</Label>
          <Input
            id="peo_heading"
            placeholder="e.g., Program Educational Objectives (PEO's)"
            value={data.peo_heading}
            onChange={(e) => onChange({ ...data, peo_heading: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="peo_description">Description</Label>
          <textarea
            id="peo_description"
            className="w-full min-h-[80px] px-3 py-2 border rounded-md"
            placeholder="e.g., The graduates of the BS Computer Science program will have the knowledge, understanding and skills to:"
            value={data.peo_description}
            onChange={(e) => onChange({ ...data, peo_description: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <Label>PEO Items</Label>
          {data.peos.length === 0 ? (
            <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
              No PEOs added. Click &quot;Add PEO&quot; to add items.
            </div>
          ) : (
            data.peos.map((peo, index) => (
              <div key={peo.id} className="flex gap-2 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                  {index + 1}
                </div>
                <textarea
                  className="flex-1 min-h-[80px] px-3 py-2 border rounded-md"
                  placeholder={`Enter PEO ${index + 1}...`}
                  value={peo.text}
                  onChange={(e) => updatePEO(index, e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => removePEO(index)}
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

      {/* PLOs Section */}
      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Program Learning Outcomes (PLO&apos;s)</h3>
          <Button type="button" onClick={addPLO} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add PLO
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="plo_heading">Heading</Label>
          <Input
            id="plo_heading"
            placeholder="e.g., Student Outcomes (PLO's)"
            value={data.plo_heading}
            onChange={(e) => onChange({ ...data, plo_heading: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="plo_description">Description</Label>
          <textarea
            id="plo_description"
            className="w-full min-h-[80px] px-3 py-2 border rounded-md"
            placeholder="e.g., The students of BS Computer Science program are expected to attain the following outcomes by the time of graduation:"
            value={data.plo_description}
            onChange={(e) => onChange({ ...data, plo_description: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <Label>PLO Items</Label>
          {data.plos.length === 0 ? (
            <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
              No PLOs added. Click &quot;Add PLO&quot; to add items.
            </div>
          ) : (
            data.plos.map((plo, index) => (
              <div key={plo.id} className="flex gap-2 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded flex items-center justify-center font-semibold text-sm mt-1">
                  {index + 1}
                </div>
                <textarea
                  className="flex-1 min-h-[80px] px-3 py-2 border rounded-md"
                  placeholder={`Enter PLO ${index + 1}...`}
                  value={plo.text}
                  onChange={(e) => updatePLO(index, e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => removePLO(index)}
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

      {/* Mapping Image */}
      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900">Mapping SOs with PEOs Image</h3>
        <ImageUpload
          label="Upload Mapping Diagram"
          value={data.mapping_image_url}
          onChange={(url) => onChange({ ...data, mapping_image_url: url })}
          folder="courses/peo-plo-mappings"
        />
        {data.mapping_image_url && (
          <div className="mt-4">
            <img 
              src={data.mapping_image_url} 
              alt="PEO-PLO Mapping" 
              className="max-w-full h-auto border rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}
