import { Metadata } from 'next';
import { AdminDashboardLayout } from '@/components/admin/AdminDashboardLayout';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Administrative interface for managing the application',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminDashboardLayout>{children}</AdminDashboardLayout>;
}