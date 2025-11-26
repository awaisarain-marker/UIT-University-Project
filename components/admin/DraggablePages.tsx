'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Edit, Eye, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import DeletePageButton from '@/components/admin/DeletePageButton';
import { createClient } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

interface Page {
  id: string;
  title: string;
  slug: string;
  parent_id: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
}

interface DraggablePagesProps {
  pages: Page[];
}

export default function DraggablePages({ pages }: DraggablePagesProps) {
  const [pagesList, setPagesList] = useState(pages);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [collapsedParents, setCollapsedParents] = useState<Set<string>>(new Set());
  const router = useRouter();
  const supabase = createClient();

  const allPages = pagesList || [];
  const parentPages = allPages.filter(page => !page.parent_id);

  const getChildren = (parentId: string) => {
    return allPages.filter(page => page.parent_id === parentId);
  };

  const toggleCollapse = (parentId: string) => {
    setCollapsedParents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(parentId)) {
        newSet.delete(parentId);
      } else {
        newSet.add(parentId);
      }
      return newSet;
    });
  };

  const handleDragStart = (e: React.DragEvent, pageId: string) => {
    setDraggedItem(pageId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e: React.DragEvent, targetPageId: string) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem === targetPageId) {
      setDraggedItem(null);
      return;
    }

    const draggedIndex = allPages.findIndex(page => page.id === draggedItem);
    const targetIndex = allPages.findIndex(page => page.id === targetPageId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    // Reorder pages
    const newPages = [...allPages];
    const [removed] = newPages.splice(draggedIndex, 1);
    newPages.splice(targetIndex, 0, removed);

    // Update sort_order for all pages
    const updates = newPages.map((page, index) => ({
      id: page.id,
      sort_order: index
    }));

    // Update in database
    try {
      for (const update of updates) {
        await supabase
          .from('pages')
          .update({ sort_order: update.sort_order })
          .eq('id', update.id);
      }

      setPagesList(newPages);
      router.refresh();
    } catch (error) {
      console.error('Error updating order:', error);
    }

    setDraggedItem(null);
  };

  const renderPageRow = (page: Page, isChild = false): React.ReactNode => {
    const children = getChildren(page.id);
    const hasChildren = children.length > 0;
    const isCollapsed = collapsedParents.has(page.id);
    const isDragging = draggedItem === page.id;
    
    return (
      <React.Fragment key={page.id}>
        <tr 
          className={`hover:bg-gray-50 cursor-move ${isDragging ? 'opacity-50 bg-blue-50' : ''}`}
          draggable
          onDragStart={(e) => handleDragStart(e, page.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, page.id)}
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="cursor-grab active:cursor-grabbing">
                <GripVertical className="w-5 h-5 text-gray-400" />
              </div>
              
              {hasChildren && !isChild && (
                <button
                  onClick={() => toggleCollapse(page.id)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              )}
              
              {isChild && (
                <>
                  <div className="w-6 h-px bg-gray-300"></div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
              
              {!hasChildren && !isChild && (
                <div className="w-6"></div>
              )}
              
              <span className={`font-medium ${isChild ? 'text-gray-700 text-sm' : 'text-gray-900'}`}>
                {page.title}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">
            <span className={isChild ? 'text-xs' : ''}>{page.slug}</span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">
            <Link 
              href={`/${page.slug}`} 
              target="_blank" 
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              /{page.slug}
              <Eye className="w-3 h-3" />
            </Link>
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              page.is_published 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {page.is_published ? 'Published' : 'Draft'}
            </span>
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              isChild 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              {isChild ? 'Child Page' : 'Parent Page'}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 text-center">
            {page.sort_order}
          </td>
          <td className="px-6 py-4 text-right">
            <div className="flex justify-end gap-2">
              <Link href={`/admin/pages/${page.id}/edit`}>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
              </Link>
              <DeletePageButton pageId={page.id} pageTitle={page.title} />
            </div>
          </td>
        </tr>
        {hasChildren && !isCollapsed && children.map((child) => renderPageRow(child, true))}
      </React.Fragment>
    );
  };

  return (
    <>
      {parentPages.map((parent) => renderPageRow(parent, false))}
      {allPages
        .filter(page => page.parent_id && !parentPages.find(p => p.id === page.parent_id))
        .map((orphan) => renderPageRow(orphan, true))}
    </>
  );
}
