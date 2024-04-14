import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='max-w-6xl mx-auto px-6'>
      <div className='py-6 border-t border-gray-100 text-center flex flex-col md:flex-row items-center justify-between'>
        <p className='text-gray-600 text-sm'>
          Powered by
          <a
            href='https://headlessdropshipping.com'
            title='Learn more about how this site was made'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-0.5 text-gray-800 hover:text-blue-600'
          >
            Headless Dropshipping Starter
          </a>
          , Built by{' '}
          <a
            href='https://twitter.com/notrab'
            title='Follow the creator on Twitter'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-0.5 text-gray-800 hover:text-blue-600'
          >
            @notrab
          </a>
        </p>
        <nav className='flex items-center justify-end space-x-3 md:space-x-6'>
          <Link href='/about' legacyBehavior>
            <a className='text-gray-800 hover:text-blue-600 p-1 transition text-sm'>
              FAQS
            </a>
          </Link>
          <Link href='/terms-of-sale' legacyBehavior>
            <a className='text-gray-800 hover:text-blue-600 p-1 transition text-sm'>
              Terms of Sale
            </a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};
