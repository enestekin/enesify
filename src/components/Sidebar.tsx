'use client';

import { SIDEBAR_LINKS, SOCIAL_LINKS } from '@/constants';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className='px-2 text-sm w-52 border border-r-gray-300'>
      <div className='flex flex-col gap-y-5'>
        <div className='px-2 pt-2 leading-4'>
          <h1 className='font-semibold text-primary'>Enes Tekin</h1>
          <p className='text-secondary'>Software Engineer</p>
        </div>
        <ul className='flex flex-col gap-y-1'>
          {SIDEBAR_LINKS.map((item) => {
            const IconComponent = item.icon;
            return (
              <SidebarItem
                isActive={pathname === item.href}
                key={item.title}
                title={item.title}
                href={item.href}
                IconComponent={IconComponent}
              />
            );
          })}
        </ul>
      </div>
      <hr />
      <ul className='flex flex-col gap-y-1'>
        <h4 className='px-1 font-semibold'>Social</h4>
        {SOCIAL_LINKS.map((item) => {
          const IconComponent = item.icon;
          return (
            <SidebarItem
              isActive={pathname === item.href}
              key={item.title}
              title={item.title}
              href={item.href}
              IconComponent={IconComponent}
            />
          );
        })}
      </ul>
    </nav>
  );
}
