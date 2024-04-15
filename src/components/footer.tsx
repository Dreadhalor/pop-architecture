import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='px-6 flex justify-center'>
      <div className='max-w-6xl py-6 w-full border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center flex items-center w-full justify-between'>
          <p className='text-gray-500 text-sm'>
            Powered by wonder, built by coffee, and inspired by the world.
          </p>
          <nav className='flex items-center justify-between md:space-x-6'>
            <Link
              href='/terms-of-sale'
              className='text-gray-600 hover:text-blue-600 p-1 transition text-sm'
            >
              Terms of Sale
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
