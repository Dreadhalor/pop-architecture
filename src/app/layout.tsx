import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'h-screen bg-background font-sans antialiased flex flex-col',
          fontSans.variable
        )}
      >
        <Header />
        <main className='py-6 md:py-12 flex-1'>
          <div className='max-w-6xl mx-auto px-6'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
