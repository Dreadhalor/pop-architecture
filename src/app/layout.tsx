import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TRPCProvider } from '@/trpc/trpc-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'POP Architecture',
  description: 'Art and Architecture Studio',
  icons: '/pop-architecture-logo.svg',
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
        <TRPCProvider>
          <Header />
          <main className='py-6 md:py-12 flex-1'>
            <div className='max-w-6xl mx-auto px-6'>{children}</div>
          </main>
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}
