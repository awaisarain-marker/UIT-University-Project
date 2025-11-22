'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { createClient } from '@/lib/supabase-client';

type MenuItem = {
    id: string;
    title: string;
    url: string;
    target: string;
    parent_id: string | null;
    display_order: number;
    children?: MenuItem[];
};

type NavigationItem = {
    name: string;
    href: string;
    target?: string;
    dropdown?: NavigationItem[];
};

export default function DynamicHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
    const [mobileMenuItems, setMobileMenuItems] = useState<NavigationItem[]>([]);

    useEffect(() => {
        loadMenus();
        loadMobileMenu();
    }, []);

    const loadMenus = async () => {
        const supabase = createClient();
        
        // Fetch header menu
        const { data: menu } = await supabase
            .from('menus')
            .select('id')
            .eq('location', 'header')
            .eq('is_active', true)
            .order('display_order', { ascending: true })
            .limit(1)
            .single();

        if (!menu) return;

        // Fetch menu items
        const { data: items } = await supabase
            .from('menu_items')
            .select('*')
            .eq('menu_id', menu.id)
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        if (items) {
            const navItems = buildNavigationTree(items);
            setNavigationItems(navItems);
        }
    };

    const loadMobileMenu = async () => {
        const supabase = createClient();
        
        // Fetch mobile menu
        const { data: menu } = await supabase
            .from('menus')
            .select('id')
            .eq('slug', 'mobile-menu')
            .eq('is_active', true)
            .single();

        if (!menu) return;

        // Fetch menu items
        const { data: items } = await supabase
            .from('menu_items')
            .select('*')
            .eq('menu_id', menu.id)
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        if (items) {
            const navItems = buildNavigationTree(items);
            setMobileMenuItems(navItems);
        }
    };

    const buildNavigationTree = (items: any[]): NavigationItem[] => {
        const itemMap = new Map<string, any>();
        const rootItems: any[] = [];

        // Create a map of all items
        items.forEach(item => {
            itemMap.set(item.id, { ...item, children: [] });
        });

        // Build the tree structure
        items.forEach(item => {
            const mappedItem = itemMap.get(item.id)!;
            if (item.parent_id) {
                const parent = itemMap.get(item.parent_id);
                if (parent) {
                    if (!parent.children) parent.children = [];
                    parent.children.push(mappedItem);
                }
            } else {
                rootItems.push(mappedItem);
            }
        });

        // Convert to NavigationItem format
        return rootItems.map(item => convertToNavigationItem(item));
    };

    const convertToNavigationItem = (item: any): NavigationItem => {
        const navItem: NavigationItem = {
            name: item.title,
            href: item.url,
            target: item.target,
        };

        if (item.children && item.children.length > 0) {
            navItem.dropdown = item.children.map((child: any) => convertToNavigationItem(child));
        }

        return navItem;
    };

    const toggleDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
        <header className="relative z-50">
            {/* Top Bar */}
            <div className="bg-primary text-primary-foreground py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="hidden sm:flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+92-21-111-978-275</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span className="hidden sm:inline">info@uitu.edu.pk</span>
                                <span className="sm:hidden">Contact Us</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                                <Instagram className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center group">
                                <div className="flex items-center">
                                    <div className="h-12 w-auto lg:h-14 lg:w-auto group-hover:opacity-90 transition-opacity">
                                        <img
                                            src="/images/logo_with_text_final__6_-removebg-preview (2).png"
                                            alt="UIT University Logo"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navigationItems.map((item, index) => (
                                <div key={`${item.name}-${index}`} className="relative group">
                                    {item.dropdown ? (
                                        <div className="relative">
                                            <Link
                                                href={item.href}
                                                target={item.target || '_self'}
                                                className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-xl border border-gray-200 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <div key={dropdownItem.name} className="relative group/submenu">
                                                        <Link
                                                            href={dropdownItem.href}
                                                            target={dropdownItem.target || '_self'}
                                                            className="flex items-center justify-between px-4 py-2 text-[14px] text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                                        >
                                                            <span>{dropdownItem.name}</span>
                                                            {dropdownItem.dropdown && (
                                                                <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-gray-400" />
                                                            )}
                                                        </Link>
                                                        
                                                        {/* Submenu */}
                                                        {dropdownItem.dropdown && (
                                                            <div className="absolute left-full top-0 ml-0.5 w-52 bg-white rounded-md shadow-xl border border-gray-200 py-1 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-150 z-50">
                                                                {dropdownItem.dropdown.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        target={subItem.target || '_self'}
                                                                        className="block px-4 py-2 text-[14px] text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            target={item.target || '_self'}
                                            className="text-foreground hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <Button size="sm" asChild>
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-foreground hover:text-primary"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Left Drawer */}
            {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    
                    {/* Drawer */}
                    <div className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <img src="/logo.png" alt="UIT" className="h-10 w-auto" />
                                <span className="font-bold text-primary">UIT University</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        {/* Drawer Content */}
                        <div className="p-4 space-y-1">
                            {mobileMenuItems.map((item, index) => (
                                <div key={`mobile-${item.name}-${index}`}>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full text-left text-gray-900 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                                            >
                                                {item.name}
                                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                    }`} />
                                            </button>

                                            {activeDropdown === item.name && (
                                                <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2">
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <div key={dropdownItem.name}>
                                                            <Link
                                                                href={dropdownItem.href}
                                                                target={dropdownItem.target || '_self'}
                                                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md transition-colors"
                                                                onClick={() => {
                                                                    if (!dropdownItem.dropdown) {
                                                                        setIsMenuOpen(false);
                                                                        setActiveDropdown(null);
                                                                    }
                                                                }}
                                                            >
                                                                {dropdownItem.name}
                                                            </Link>
                                                            {dropdownItem.dropdown && (
                                                                <div className="ml-4 mt-1 space-y-1">
                                                                    {dropdownItem.dropdown.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            target={subItem.target || '_self'}
                                                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-md transition-colors"
                                                                            onClick={() => {
                                                                                setIsMenuOpen(false);
                                                                                setActiveDropdown(null);
                                                                            }}
                                                                        >
                                                                            • {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            target={item.target || '_self'}
                                            className="block text-gray-900 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA Button */}
                            <div className="pt-4">
                                <Button className="w-full" asChild>
                                    <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
                                        Apply Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Bottom Navigation Bar */}
            <BottomNavBar />
        </header>
    );
}

// Bottom Navigation Bar Component
function BottomNavBar() {
    const [bottomMenuItems, setBottomMenuItems] = useState<NavigationItem[]>([]);

    useEffect(() => {
        loadBottomMenu();
    }, []);

    const loadBottomMenu = async () => {
        const supabase = createClient();
        
        // Fetch bottom menu
        const { data: menu } = await supabase
            .from('menus')
            .select('id')
            .eq('slug', 'header-bottom-menu')
            .eq('is_active', true)
            .single();

        if (!menu) return;

        // Fetch all menu items
        const { data: items } = await supabase
            .from('menu_items')
            .select('*')
            .eq('menu_id', menu.id)
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        if (items && items.length > 0) {
            const navItems = buildNavigationTree(items);
            setBottomMenuItems(navItems);
        }
    };

    const buildNavigationTree = (items: any[]): NavigationItem[] => {
        const itemMap = new Map<string, any>();
        const rootItems: any[] = [];

        items.forEach(item => {
            itemMap.set(item.id, { ...item, children: [] });
        });

        items.forEach(item => {
            const mappedItem = itemMap.get(item.id)!;
            if (item.parent_id) {
                const parent = itemMap.get(item.parent_id);
                if (parent) {
                    if (!parent.children) parent.children = [];
                    parent.children.push(mappedItem);
                }
            } else {
                rootItems.push(mappedItem);
            }
        });

        return rootItems.map(item => convertToNavigationItem(item));
    };

    const convertToNavigationItem = (item: any): NavigationItem => {
        const navItem: NavigationItem = {
            name: item.title,
            href: item.url,
            target: item.target,
        };

        if (item.children && item.children.length > 0) {
            navItem.dropdown = item.children.map((child: any) => convertToNavigationItem(child));
        }

        return navItem;
    };

    if (bottomMenuItems.length === 0) return null;

    return (
        <nav className="bg-white shadow-sm hidden lg:block py-3" style={{ borderTop: '1px solid #d1d1d1', borderBottom: '1px solid #d1d1d1' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center space-x-1">
                    {bottomMenuItems.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="relative group">
                            {item.dropdown ? (
                                <div className="relative">
                                    <Link
                                        href={item.href}
                                        target={item.target || '_self'}
                                        className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                    </Link>

                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-xl border border-gray-200 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                                        {item.dropdown.map((dropdownItem) => (
                                            <div key={dropdownItem.name} className="relative group/submenu">
                                                <Link
                                                    href={dropdownItem.href}
                                                    target={dropdownItem.target || '_self'}
                                                    className="flex items-center justify-between px-4 py-2 text-[14px] text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                                >
                                                    <span>{dropdownItem.name}</span>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    target={item.target || '_self'}
                                    className="text-foreground hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
