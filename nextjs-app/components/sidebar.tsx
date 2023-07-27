'use client';

import { cn } from '@/lib/utils';
import { Code2, LayoutDashboard, MessageSquare, Settings } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    lable: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-orange-500',
  },
  {
    label: 'Progress Tracker',
    icon: MessageSquare,
    href: '/progresstracker',
    color: 'text-pink-500',
  },
  {
    label: 'Workout Plan',
    icon: Code2,
    href: '/workoutplan',
    color: 'text-white-500',
  },
  {
    lable: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-slate-200',
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-800 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn('text-white font-bold', montserrat.className)}>
            GymGenius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium hover:bg-white hover:bg-slate-100/10 rouded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-300',
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.lable}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
