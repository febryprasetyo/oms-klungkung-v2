import type { Metadata } from 'next';
import Image from 'next/image';
import Favico from './favicon.png';
import Head from 'next/head';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OMS - DLH Klungkung',
  description: 'ONLINE MONITORING SYSTEM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
