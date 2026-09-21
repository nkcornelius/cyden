import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyden General Enterprises - Rupa Mall',
  description: 'Cyden General Enterprises outlet page inspired by thebar.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
