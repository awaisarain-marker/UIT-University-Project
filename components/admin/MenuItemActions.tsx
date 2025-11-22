'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Grid3x3 } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

interface MenuItemActionsProps {
  itemId: string;
  menuId: string;
  itemTitle: string;
}

export default function MenuItemActions({ itemId, menuId, itemTitle }: MenuItemActionsProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const supabase = createClient();

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${itemTitle}"? This will also delete all child items.`)) {
      return;
    }

    setDeleting(true);

    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

      router.refresh();
    } catch (error) {
      console.error('Error deleting menu item:', error);
      alert('Failed to delete menu item');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex justify-end gap-2">
      <Link href={`/admin/menus/${menuId}/items/${itemId}/mega-menu`}>
        <Button variant="ghost" size="sm" title="Manage Mega Menu">
          <Grid3x3 className="w-4 h-4" />
        </Button>
      </Link>
      <Link href={`/admin/menus/${menuId}/items/${itemId}/edit`}>
        <Button variant="ghost" size="sm" title="Edit">
          <Edit className="w-4 h-4" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
        disabled={deleting}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
        title="Delete"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
