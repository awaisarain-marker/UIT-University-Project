'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

export default function NewMenuItemPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [menuId, setMenuId] = useState<string>('');
  const [menuName, setMenuName] = useState<string>('');
  const [parentItems, setParentItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    parent_id: '',
    target: '_self',
    display_order: 0,
    is_active: true
  });

  useEffect(() => {
    params.then(p => {
      setMenuId(p.id);
      fetchMenuData(p.id);
      fetchParentItems(p.id);
    });
  }, []);

  const fetchMenuData = async (id: string) => {
    const { data } = await supabase
      .from('menus')
      .select('name')
      .eq('id', id)
      .single();
    
    if (data) setMenuName(data.name);
  };

  const fetchParentItems = async (id: string) => {
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .eq('menu_id', id)
      .order('display_order', { ascending: true });
    
    if (data) {
      // Build hierarchical structure for display
      const hierarchical = buildHierarchicalList(data);
      setParentItems(hierarchical);
      
      // Set next display order automatically
      const maxOrder = data.length > 0 ? Math.max(...data.map(item => item.display_order || 0)) : -1;
      setFormData(prev => ({ ...prev, display_order: maxOrder + 1 }));
    }
  };

  const buildHierarchicalList = (items: any[]) => {
    const itemMap = new Map();
    const result: any[] = [];

    // Create map of all items
    items.forEach(item => {
      itemMap.set(item.id, { ...item, children: [] });
    });

    // Build tree structure
    items.forEach(item => {
      if (item.parent_id) {
        const parent = itemMap.get(item.parent_id);
        if (parent) {
          parent.children.push(itemMap.get(item.id));
        }
      } else {
        result.push(itemMap.get(item.id));
      }
    });

    // Flatten with indentation
    const flattened: any[] = [];
    const flatten = (items: any[], level = 0) => {
      items.forEach(item => {
        flattened.push({ ...item, level });
        if (item.children && item.children.length > 0) {
          flatten(item.children, level + 1);
        }
      });
    };
    flatten(result);

    return flattened;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!menuId) return;
    
    setLoading(true);

    try {
      const { error } = await supabase
        .from('menu_items')
        .insert({
          menu_id: menuId,
          title: formData.title,
          url: formData.url,
          parent_id: formData.parent_id || null,
          target: formData.target,
          display_order: formData.display_order,
          is_active: formData.is_active
        });

      if (error) throw error;

      router.push(`/admin/menus/${menuId}/items`);
      router.refresh();
    } catch (error) {
      console.error('Error creating menu item:', error);
      alert('Failed to create menu item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <Link href={`/admin/menus/${menuId}/items`}>
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Menu Items
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add Menu Item</h1>
        <p className="text-gray-500">Add a new item to {menuName}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border p-6 space-y-6">
          <div>
            <Label htmlFor="title">Item Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., About Us"
              required
            />
          </div>

          <div>
            <Label htmlFor="url">URL *</Label>
            <Input
              id="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="e.g., /about or https://example.com"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Use relative URLs (/about) or absolute URLs (https://example.com)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parent_id">Parent Item (Optional)</Label>
              <select
                id="parent_id"
                value={formData.parent_id}
                onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">None (Top-level item)</option>
                {parentItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {'  '.repeat(item.level)}
                    {item.level > 0 ? '└─ ' : ''}
                    {item.title}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Select a parent to create a dropdown item
              </p>
            </div>

            <div>
              <Label htmlFor="target">Link Target</Label>
              <select
                id="target"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="_self">Same Tab</option>
                <option value="_blank">New Tab</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="display_order">Display Order</Label>
            <Input
              id="display_order"
              type="number"
              value={formData.display_order}
              onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
              placeholder="0"
            />
            <p className="text-xs text-gray-500 mt-1">
              Lower numbers appear first
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_active"
              checked={formData.is_active}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <Label htmlFor="is_active" className="cursor-pointer">
              Active (visible in menu)
            </Label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="w-4 h-4" />
            {loading ? 'Creating...' : 'Create Item'}
          </Button>
          <Link href={`/admin/menus/${menuId}/items`}>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
