'use client'
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import logo from '../assets/logo.jpg';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Announcements', href: '/announcement', icon: UsersIcon },
  { name: 'Payments', href: '/payments', icon: FolderIcon },
  { name: 'Manage Notes', href: '/manage-notes', icon: CalendarIcon },
  { name: 'Manage Users', href: '/manage-users', icon: DocumentDuplicateIcon },
  { name: 'Semesters & Subjects', href: '/semester-subjects', icon: ChartPieIcon },
];

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Sign Out', href: '/logout' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Mobile Sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="lg:hidden z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative w-64 bg-white p-4 overflow-y-auto">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4">
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full mb-4" />
            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isActive
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-black',
                      'flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium transition'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col  bg-gray-100">
        <div className="flex items-center gap-3 px-6 py-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="text-lg font-bold tracking-wide">SS EFFORT</span>
        </div>
        <nav className="flex flex-col flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black',
                  'flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium transition'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 mt-auto mb-6">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-full text-sm font-medium transition"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 lg:hidden"
              aria-label="Open sidebar"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="rounded-md border border-gray-300 pl-9 pr-3 py-1.5 text-sm text-gray-700 focus:ring-1 focus:ring-black focus:outline-none"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
            </form>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-black transition" aria-label="Notifications">
              <BellIcon className="h-6 w-6" />
            </button>
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                />
                <span className="text-sm font-medium text-gray-800 hidden lg:block">Tom Cook</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-50 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
