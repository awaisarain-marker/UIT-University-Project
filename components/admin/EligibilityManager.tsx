'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2 } from 'lucide-react'

interface TestCriteriaItem {
  id: string
  text: string
}

interface AcademicRequirement {
  id: string
  text: string
}

interface EligibilityData {
  test_criteria_heading: string
  test_criteria_description: string
  test_criteria_items: TestCriteriaItem[]
  academic_requirements_heading: string
  academic_requirements: AcademicRequirement[]
}

interface EligibilityManagerProps {
  data: EligibilityData
  onChange: (data: EligibilityData) => void
}

export default function EligibilityManager({ data, onChange }: EligibilityManagerProps) {
  const addTestCriteria = () => {
    const newItem: TestCriteriaItem = {
      id: `test-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      test_criteria_items: [...data.test_criteria_items, newItem]
    })
  }

  const removeTestCriteria = (index: number) => {
    onChange({
      ...data,
      test_criteria_items: data.test_criteria_items.filter((_, i) => i !== index)
    })
  }

  const updateTestCriteria = (index: number, text: string) => {
    const updated = [...data.test_criteria_items]
    updated[index].text = text
    onChange({
      ...data,
      test_criteria_items: updated
    })
  }

  const addAcademicRequirement = () => {
    const newItem: AcademicRequirement = {
      id: `academic-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      academic_requirements: [...data.academic_requirements, newItem]
    })
  }

  const removeAcademicRequirement = (index: number) => {
    onChange({
      ...data,
      academic_requirements: data.academic_requirements.filter((_, i) => i !== index)
    })
  }

  const updateAcademicRequirement = (index: number, text: string) => {
    const updated = [...data.academic_requirements]
    updated[index].text = text
    onChange({
      ...data,
      academic_requirements: updated
    })
  }

  return (
    <div className="space-y-8">
      {/* Academic Requirements Section */}
      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Academic Requirements</h3>
          <Button type="button" onClick={addAcademicRequirement} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Paragraph
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="academic_requirements_heading">Heading</Label>
          <Input
            id="academic_requirements_heading"
            placeholder="e.g., Academic Requirements"
            value={data.academic_requirements_heading}
            onChange={(e) => onChange({ ...data, academic_requirements_heading: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <Label>Requirement Paragraphs</Label>
          {data.academic_requirements.length === 0 ? (
            <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
              No academic requirements added. Click &quot;Add Paragraph&quot; to add paragraphs.
            </div>
          ) : (
            data.academic_requirements.map((item, index) => (
              <div key={item.id} className="flex gap-2 items-start">
                <div className="flex-shrink-0 text-gray-500 font-medium text-sm mt-2">
                  P{index + 1}
                </div>
                <textarea
                  className="flex-1 min-h-[80px] px-3 py-2 border rounded-md"
                  placeholder={`Enter academic requirement paragraph ${index + 1}...`}
                  value={item.text}
                  onChange={(e) => updateAcademicRequirement(index, e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => removeAcademicRequirement(index)}
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

      {/* Pre Entry Admission Test Eligibility Criteria Section */}
      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Pre Entry Admission Test Eligibility Criteria</h3>
          <Button type="button" onClick={addTestCriteria} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Criteria
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="test_criteria_heading">Heading</Label>
          <Input
            id="test_criteria_heading"
            placeholder="e.g., Pre Entry Admission Test Eligibility Criteria"
            value={data.test_criteria_heading}
            onChange={(e) => onChange({ ...data, test_criteria_heading: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="test_criteria_description">Description</Label>
          <textarea
            id="test_criteria_description"
            className="w-full min-h-[60px] px-3 py-2 border rounded-md"
            placeholder="e.g., Candidates are required to:"
            value={data.test_criteria_description}
            onChange={(e) => onChange({ ...data, test_criteria_description: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <Label>Test Criteria Items</Label>
          {data.test_criteria_items.length === 0 ? (
            <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
              No test criteria added. Click &quot;Add Criteria&quot; to add items.
            </div>
          ) : (
            data.test_criteria_items.map((item, index) => (
              <div key={item.id} className="flex gap-2 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                  {index + 1}
                </div>
                <textarea
                  className="flex-1 min-h-[60px] px-3 py-2 border rounded-md"
                  placeholder={`Enter test criteria ${index + 1}...`}
                  value={item.text}
                  onChange={(e) => updateTestCriteria(index, e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => removeTestCriteria(index)}
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
    </div>
  )
}
