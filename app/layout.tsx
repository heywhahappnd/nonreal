import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, jsonLd } from '@/lib/site';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });

const title = 'Nonreal: four virtual creators worth following';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ['AI creators', 'virtual influencers', 'AI influencers', 'Kai Arden', 'Mara Solé', 'Dante Voss', 'Iris Calder'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title, description: SITE_DESCRIPTION, url: '/', siteName: SITE_NAME, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description: SITE_DESCRIPTION },
};
export const viewport: Viewport = { themeColor: '#F4EFE7', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
