'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, GripVertical } from 'lucide-react'

interface Course {
  id: string
  course_code: string
  course_title: string
  credit_hours_theory: number
  credit_hours_lab: number
  credit_hours_total: number
}

interface Semester {
  semester_number: number
  courses: Course[]
}

interface SemesterCoursesManagerProps {
  semesters: Semester[]
  onChange: (semesters: Semester[]) => void
}

export default function SemesterCoursesManager({ semesters, onChange }: SemesterCoursesManagerProps) {
  const addSemester = () => {
    const newSemester: Semester = {
      semester_number: semesters.length + 1,
      courses: []
    }
    onChange([...semesters, newSemester])
  }

  const removeSemester = (semesterIndex: number) => {
    const updated = semesters.filter((_, index) => index !== semesterIndex)
    // Renumber semesters
    const renumbered = updated.map((sem, index) => ({
      ...sem,
      semester_number: index + 1
    }))
    onChange(renumbered)
  }

  const addCourse = (semesterIndex: number) => {
    const newCourse: Course = {
      id: `temp-${Date.now()}`,
      course_code: '',
      course_title: '',
      credit_hours_theory: 0,
      credit_hours_lab: 0,
      credit_hours_total: 0
    }
    
    const updated = [...semesters]
    updated[semesterIndex].courses.push(newCourse)
    onChange(updated)
  }

  const removeCourse = (semesterIndex: number, courseIndex: number) => {
    const updated = [...semesters]
    updated[semesterIndex].courses = updated[semesterIndex].courses.filter((_, index) => index !== courseIndex)
    onChange(updated)
  }

  const updateCourse = (semesterIndex: number, courseIndex: number, field: keyof Course, value: string | number) => {
    const updated = [...semesters]
    const course = updated[semesterIndex].courses[courseIndex]
    
    if (field === 'course_code' || field === 'course_title' || field === 'id') {
      (course[field] as string) = value as string
    } else {
      const numValue = typeof value === 'string' ? parseInt(value) || 0 : value;
      (course[field] as number) = numValue
      
      // Auto-calculate total
      if (field === 'credit_hours_theory' || field === 'credit_hours_lab') {
        course.credit_hours_total = course.credit_hours_theory + course.credit_hours_lab
      }
    }
    
    onChange(updated)
  }

  const calculateSemesterTotal = (courses: Course[]) => {
    return courses.reduce((sum, course) => sum + course.credit_hours_total, 0)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Semester Courses</h3>
        <Button type="button" onClick={addSemester} variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Semester
        </Button>
      </div>

      {semesters.length === 0 && (
        <div className="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
          No semesters added yet. Click &quot;Add Semester&quot; to get started.
        </div>
      )}

      {semesters.map((semester, semesterIndex) => (
        <div key={semesterIndex} className="border rounded-lg p-4 space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <h4 className="text-md font-semibold text-gray-900">Semester {semester.semester_number}</h4>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={() => addCourse(semesterIndex)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Course
              </Button>
              <Button
                type="button"
                onClick={() => removeSemester(semesterIndex)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {semester.courses.length === 0 ? (
            <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
              No courses added. Click &quot;Add Course&quot; to add courses to this semester.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Course Code</th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Course Title</th>
                    <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">Credit Hours (Th)</th>
                    <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">Lab</th>
                    <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">Total</th>
                    <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, courseIndex) => (
                    <tr key={course.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <Input
                          type="text"
                          placeholder="CSC101"
                          value={course.course_code}
                          onChange={(e) => updateCourse(semesterIndex, courseIndex, 'course_code', e.target.value)}
                          className="h-8 text-sm"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <Input
                          type="text"
                          placeholder="Course Title"
                          value={course.course_title}
                          onChange={(e) => updateCourse(semesterIndex, courseIndex, 'course_title', e.target.value)}
                          className="h-8 text-sm"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <Input
                          type="number"
                          min="0"
                          value={course.credit_hours_theory}
                          onChange={(e) => updateCourse(semesterIndex, courseIndex, 'credit_hours_theory', e.target.value)}
                          className="h-8 text-sm text-center"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <Input
                          type="number"
                          min="0"
                          value={course.credit_hours_lab}
                          onChange={(e) => updateCourse(semesterIndex, courseIndex, 'credit_hours_lab', e.target.value)}
                          className="h-8 text-sm text-center"
                        />
                      </td>
                      <td className="px-3 py-2 text-center font-medium">
                        {course.credit_hours_total}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <Button
                          type="button"
                          onClick={() => removeCourse(semesterIndex, courseIndex)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td colSpan={4} className="px-3 py-2 text-right">Total</td>
                    <td className="px-3 py-2 text-center">{calculateSemesterTotal(semester.courses)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
