'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Users } from 'lucide-react';
import { useState } from 'react';

export default function StudentSidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    student: true,
    'library-service': false,
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-600" />
          Student Menu
        </h3>
      </div>

      <nav className="space-y-2">
        {/* Student Parent Menu */}
        <div>
          <button
            onClick={() => toggleMenu('student')}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span>Student</span>
            {openMenus.student ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>

          {openMenus.student && (
            <div className="ml-4 mt-1 space-y-1">
              {/* Student Portal - External Link */}
              <a
                href="https://eduboard.uit.edu/StudentPortal/Student/EDU_EBS_STU_Login.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Student Portal
              </a>

              {/* Student Affairs */}
              <Link
                href="/student/student-affairs"
                className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive('/student/student-affairs')
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Student Affairs
              </Link>

              {/* Library Service with submenu */}
              <div>
                <button
                  onClick={() => toggleMenu('library-service')}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>Library Service</span>
                  {openMenus['library-service'] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {openMenus['library-service'] && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/student/library-service/library"
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive('/student/library-service/library')
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Library
                    </Link>
                    <Link
                      href="/student/library-service/library-form"
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive('/student/library-service/library-form')
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Library Form
                    </Link>
                  </div>
                )}
              </div>

              {/* Scholarships */}
              <Link
                href="/student/scholarships"
                className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive('/student/scholarships')
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Scholarships
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Home */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/"
          className="block px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center font-medium"
        >
          Back to Home
        </Link>
      </div>
    </aside>
  );
}
