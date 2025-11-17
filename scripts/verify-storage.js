#!/usr/bin/env node

/**
 * Verify Supabase Storage Configuration
 * Run this to check if your storage bucket is set up correctly
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

console.log('🔍 Verifying Supabase Storage Configuration...\n')

// Check environment variables
if (!supabaseUrl) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL is not set in .env.local')
  process.exit(1)
}

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY is not set in .env.local')
  console.log('\n📝 Get your service role key from:')
  console.log('   Supabase Dashboard → Settings → API → service_role key\n')
  process.exit(1)
}

console.log('✓ Environment variables found')
console.log(`  URL: ${supabaseUrl}`)
console.log(`  Service Key: ${supabaseServiceKey.substring(0, 20)}...\n`)

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function verifyStorage() {
  try {
    // List buckets
    console.log('📦 Checking storage buckets...')
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets()
    
    if (bucketsError) {
      console.error('❌ Error listing buckets:', bucketsError.message)
      return false
    }

    console.log(`✓ Found ${buckets.length} bucket(s)`)
    
    // Check for 'uploads' bucket
    const uploadsBucket = buckets.find(b => b.name === 'uploads')
    
    if (!uploadsBucket) {
      console.error('\n❌ "uploads" bucket not found!')
      console.log('\n📝 Create the bucket:')
      console.log('   1. Go to Supabase Dashboard → Storage')
      console.log('   2. Click "New Bucket"')
      console.log('   3. Name: uploads')
      console.log('   4. Make it Public')
      console.log('   5. Click "Create Bucket"\n')
      return false
    }

    console.log('✓ "uploads" bucket exists')
    console.log(`  Public: ${uploadsBucket.public}`)
    console.log(`  Created: ${new Date(uploadsBucket.created_at).toLocaleDateString()}\n`)

    if (!uploadsBucket.public) {
      console.warn('⚠️  Warning: "uploads" bucket is not public')
      console.log('   Images may not be accessible via public URLs\n')
    }

    // Test upload
    console.log('🧪 Testing file upload...')
    const testFile = Buffer.from('test')
    const testPath = `test/${Date.now()}.txt`
    
    const { error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(testPath, testFile, {
        contentType: 'text/plain',
        upsert: false
      })

    if (uploadError) {
      console.error('❌ Upload test failed:', uploadError.message)
      return false
    }

    console.log('✓ Upload test successful')

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(testPath)

    console.log(`✓ Public URL generated: ${publicUrl}\n`)

    // Clean up test file
    await supabase.storage.from('uploads').remove([testPath])
    console.log('✓ Test file cleaned up\n')

    console.log('✅ All checks passed! Your storage is ready to use.\n')
    console.log('🚀 Next steps:')
    console.log('   1. Visit http://localhost:3000/test-upload')
    console.log('   2. Try uploading an image')
    console.log('   3. Use ImageUploadField in your forms\n')
    
    return true

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
    return false
  }
}

verifyStorage().then(success => {
  process.exit(success ? 0 : 1)
})
