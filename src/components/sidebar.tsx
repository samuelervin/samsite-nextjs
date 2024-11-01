'use client';

import {
  Bell,
  Bookmark,
  createLucideIcon,
  Home,
  Linkedin,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
  
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarButton } from './sidebar-button';
import { SidebarItems } from '@/lib/types';
import { SidebarMobile } from './sidebar-mobile';
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';

const XIcon = createLucideIcon("X", [
    [
      "path",
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
        stroke: "none",
        fill: "currentColor",
      },
    ],
  ]);

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Notifications', href: '/item/notifications', icon: Bell },
    { label: 'Messages', href: '/item/messages', icon: Mail },
    {
      href: '/item/lists',
      icon: List,
      label: 'Lists',
    },
    {
      href: '/item/bookmarks',
      icon: Bookmark,
      label: 'Bookmarks',
    },
    {
      href: '/item/communities',
      icon: Users,
      label: 'Communities',
    },
    {
      href: '/item/profile',
      icon: User,
      label: 'Profile',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton>
      
      <Link href='https://x.com/Oakking1225' target='_blank'>
      <SidebarButton
        className='w-full justify-center text-white text-sm' 
        variant='default'
        >
         <XIcon />
        
      </SidebarButton>
          </Link>
         
          <Link href='https://www.linkedin.com/in/samuelervin/' target='_blank'>
      <SidebarButton
        className='w-full justify-center text-white text-sm' 
        variant='default'
        >
        <Linkedin />
      </SidebarButton>
          </Link>
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}