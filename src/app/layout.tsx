'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/UI/Navbar';
import { NavbarProvider } from '../../context/NavbarContext';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.0.66/build/spline-viewer.js"></script>
      </head>
      <body className={(inter.className, 'relative')}>
        <NavbarProvider>
          <Navbar />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
