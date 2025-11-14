'use client'

export default function TestImagePage() {
  const images = [
    '/uploads/faculty/1763126601280-utyq6r.jpeg',
    '/uploads/faculty/1763127048806-nja6si.jpeg',
    '/uploads/faculty/1763127212909-hdlksm.jpeg',
    '/uploads/faculty/1763127283803-h8uhrg.webp'
  ]
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-8">
        {images.map((imageUrl) => (
          <div key={imageUrl} className="border-2 border-gray-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Testing: {imageUrl.split('/').pop()}</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Regular img tag:</h3>
                <div className="border-2 border-gray-300 p-4 rounded bg-gray-50">
                  <img 
                    src={imageUrl} 
                    alt="Test" 
                    className="max-w-full max-h-48 object-contain"
                    onLoad={() => console.log('✓ Loaded:', imageUrl)}
                    onError={() => console.error('✗ Failed:', imageUrl)}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Info:</h3>
                <div className="text-xs space-y-1">
                  <div><strong>URL:</strong> <code className="bg-gray-100 px-1">{imageUrl}</code></div>
                  <div><strong>Type:</strong> {imageUrl.split('.').pop()?.toUpperCase()}</div>
                  <div>
                    <a 
                      href={imageUrl} 
                      target="_blank" 
                      className="text-blue-600 underline"
                    >
                      Open in new tab
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
