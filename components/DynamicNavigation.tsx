'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  url: string;
  target: string;
  parent_id: string | null;
  display_order: number;
  children?: MenuItem[];
}

interface DynamicNavigationProps {
  menuItems: MenuItem[];
}

export default function DynamicNavigation({ menuItems }: DynamicNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Organize menu items into hierarchy
  const organizeMenuItems = (items: MenuItem[]): MenuItem[] => {
    const topLevel = items.filter(item => !item.parent_id);
    const childItems = items.filter(item => item.parent_id);

    return topLevel.map(parent => ({
      ...parent,
      children: childItems
        .filter(child => child.parent_id === parent.id)
        .sort((a, b) => a.display_order - b.display_order)
    })).sort((a, b) => a.display_order - b.display_order);
  };

  const organizedItems = organizeMenuItems(menuItems);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-xl">U</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground leading-tight">UIT</span>
                  <span className="text-sm text-muted-foreground leading-tight">UNIVERSITY</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {organizedItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;

                if (hasChildren) {
                  return (
                    <div
                      key={item.id}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(item.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.url}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                        target={item.target}
                      >
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 transition-all duration-200 ${
                        openDropdown === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}>
                        {item.children?.map((child) => (
                          <Link
                            key={child.id}
                            href={child.url}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            target={child.target}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    target={item.target}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {organizedItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.id}>
                  <Link
                    href={item.url}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    target={item.target}
                  >
                    {item.title}
                  </Link>
                  {hasChildren && (
                    <div className="pl-4 space-y-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.id}
                          href={child.url}
                          className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                          target={child.target}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
