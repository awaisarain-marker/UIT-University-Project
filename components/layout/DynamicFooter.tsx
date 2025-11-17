'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

type MenuItem = {
  id: string;
  title: string;
  url: string;
  target: string;
};

type FooterMenu = {
  id: string;
  name: string;
  items: MenuItem[];
};

export default function DynamicFooter() {
  const [footerMenus, setFooterMenus] = useState<FooterMenu[]>([]);

  useEffect(() => {
    loadFooterMenus();
  }, []);

  const loadFooterMenus = async () => {
    const supabase = createClient();

    // Fetch footer menus
    const { data: menus } = await supabase
      .from('menus')
      .select('id, name')
      .eq('location', 'footer')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (!menus) return;

    // Fetch menu items for each menu
    const menusWithItems = await Promise.all(
      menus.map(async (menu) => {
        const { data: items } = await supabase
          .from('menu_items')
          .select('id, title, url, target')
          .eq('menu_id', menu.id)
          .eq('is_active', true)
          .is('parent_id', null) // Only top-level items for footer
          .order('display_order', { ascending: true });

        return {
          ...menu,
          items: items || []
        };
      })
    );

    setFooterMenus(menusWithItems);
  };

  return (
    <footer className="bg-[#050a12] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* UIT University */}
          <div>
            <h4 className="mb-4">UIT University</h4>
            <p className="text-white/60 text-sm">
              The UITU Campus is ideally located on the main university road in Karachi, easily accessible by all major modes of transportation.
            </p>
          </div>

          {/* Dynamic Footer Menus */}
          {footerMenus.slice(0, 3).map((menu) => (
            <div key={menu.id}>
              <h4 className="mb-4">{menu.name}</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                {menu.items.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={item.url}
                      target={item.target}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="mb-4">Contact Us</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white/60 text-sm">
            <div>
              <div className="text-white/80 mb-1">Address:</div>
              <div>ST-13, Block 7, Gulshan-e-Iqbal, Abul Hasan Isphahani Road, Off Main University Road, Karachi - 75300</div>
            </div>
            <div>
              <div className="text-white/80 mb-1">Email:</div>
              <a href="mailto:info@uitu.edu.pk" className="hover:text-white transition-colors">info@uitu.edu.pk</a>
            </div>
            <div>
              <div className="text-white/80 mb-1">UAN:</div>
              <div>(021) 111-978-276, 34994305, 34978274-5</div>
            </div>
            <div>
              <div className="text-white/80 mb-1">Admission:</div>
              <a href="tel:03330399113" className="hover:text-white transition-colors">0333-0399113</a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>© 2025 UIT University. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
