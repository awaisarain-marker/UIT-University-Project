import { createServerSupabaseClient } from '@/lib/supabase-server'

export default async function DebugFacultyPage() {
  const supabase = await createServerSupabaseClient()
  const { data: faculty } = await supabase
    .from('instructors')
    .select('id, full_name, image_url')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Faculty Image URLs Debug</h1>
      
      <div className="space-y-4">
        {faculty?.map((member) => (
          <div key={member.id} className="border p-4 rounded-lg">
            <h2 className="font-bold mb-2">{member.full_name}</h2>
            <div className="space-y-2">
              <div>
                <strong>Image URL:</strong>
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">
                  {member.image_url || '(empty)'}
                </code>
              </div>
              
              {member.image_url && (
                <div className="mt-4">
                  <strong>Preview:</strong>
                  <div className="mt-2 border-2 p-4 bg-gray-50 rounded">
                    <img 
                      src={member.image_url} 
                      alt={member.full_name}
                      className="max-w-xs max-h-48 object-contain"
                      onLoad={() => console.log('✓ Loaded:', member.image_url)}
                      onError={() => console.error('✗ Failed:', member.image_url)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
