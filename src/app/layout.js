"use client"

import 'aos/dist/aos.css';
import './globals.css';

import { useEffect } from 'react';
import AOS from 'aos';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <html lang="en">
      <body className="light-theme">{children}</body>
    </html>
  );
}
