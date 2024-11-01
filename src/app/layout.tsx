import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
//import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sam on Programming',
  description: 'Generated by create next app and then modified to be a neat site you like hopefully. ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Sidebar />
        <main className='mx-5 mt-16 sm:ml-[300px] sm:mt-3'>{children}</main>
      </body>
    </html>
  );
}