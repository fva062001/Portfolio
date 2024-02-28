'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Navbar';
import { NavbarProvider } from '../../context/NavbarContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, 'relative')}>
        <NavbarProvider>
          <Navbar />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
