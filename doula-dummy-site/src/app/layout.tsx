import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Doula & Birth Education',
  description: 'Holistic, confident, and evidence-based care.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
