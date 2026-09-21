import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyden General Enterprises - Eldoret City',
  description: 'Shop drinks and enjoy convenient local ordering from Cyden General Enterprises in Eldoret City.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
