import Link from 'next/link';
import React from 'react';
import PopArchitectureLogo from '@/assets/pop-architecture-logo.svg';
// import { HeaderUserActions } from './header-user-actions';

export const Header = () => {
  return (
    <header className='py-6 md:py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='items-center justify-between grid grid-cols-3'>
          <nav className='flex items-center justify-start space-x-3 md:space-x-6'>
            <Link
              href='/about'
              className='text-gray-800 hover:text-blue-600 p-1 transition'
            >
              About
            </Link>
          </nav>
          <div className='flex-1 flex items-center justify-center col-span-2 sm:col-span-1'>
            <Link href='/' className='flex items-center text-gray-900'>
              <div className='rounded-full w-12 h-12 flex items-center justify-center mr-4'>
                <PopArchitectureLogo className='h-10 w-10 shrink-0' />
              </div>
              <span className='text-lg font-medium w-max'>
                POP Architecture
              </span>
            </Link>
          </div>
          {/* <HeaderUserActions /> */}
        </div>
      </div>
    </header>
  );
};
