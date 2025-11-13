import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const folder = formData.get('folder') as string || 'uploads'

    if (!file) {
      return NextResponse.json(
        { message: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { message: 'Only image files are allowed' },
        { status: 400 }
      )
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { message: 'File size must be less than 5MB' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const fileExt = file.name.split('.').pop()
    const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    
    // Define upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder)
    
    // Create directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Define file path
    const filePath = path.join(uploadDir, uniqueName)
    
    // Write file to disk
    await writeFile(filePath, buffer)

    // Return public URL
    const publicUrl = `/uploads/${folder}/${uniqueName}`

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueName
    })

  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { message: error.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
