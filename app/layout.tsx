import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Nonreal — Four virtual creators worth following',
  description: 'Meet Kai, Mara, Dante and Iris: AI-born creators sharing tech, travel, style and wellness. Follow them on Telegram.',
  openGraph: { title: 'Nonreal', description: 'Four virtual creators. All of them worth following.', type: 'website' },
};
export const viewport: Viewport = { themeColor: '#F4EFE7', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
