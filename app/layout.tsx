import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIT University - Excellence in Education",
  description: "UIT University offers world-class education in Engineering, Computing Sciences, and Management. Discover our programs, faculty, and state-of-the-art facilities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createServerSupabaseClient();
  
  // Fetch header menu data
  const { data: menu } = await supabase
    .from('menus')
    .select('id')
    .eq('location', 'header')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .limit(1)
    .single();

  let menuItems = [];
  let megaMenuData: Record<string, any> = {};

  if (menu) {
    const { data: items } = await supabase
      .from('menu_items')
      .select('*')
      .eq('menu_id', menu.id)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    menuItems = items || [];

    const menuItemIds = menuItems.map((item: any) => item.id);

    if (menuItemIds.length > 0) {
      const { data: sections } = await supabase
        .from('mega_menu_sections')
        .select('*')
        .in('menu_item_id', menuItemIds)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (sections && sections.length > 0) {
        const sectionIds = sections.map(s => s.id);
        
        const { data: links } = await supabase
          .from('mega_menu_links')
          .select('*')
          .in('section_id', sectionIds)
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        sections.forEach(section => {
          if (!megaMenuData[section.menu_item_id]) {
            megaMenuData[section.menu_item_id] = [];
          }
          megaMenuData[section.menu_item_id].push({
            id: section.id,
            title: section.title,
            links: links?.filter(link => link.section_id === section.id) || []
          });
        });
      }
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${GeistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ConditionalLayout initialMenuItems={menuItems} initialMegaMenuData={megaMenuData}>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
