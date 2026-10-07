import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import AppProviders from '@/providers/AppProviders';
import { createTranslator, defaultLocale, getMessages } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, buildJsonLd } from '@/lib/site';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });

const locale = defaultLocale;
const messages = getMessages(locale);
const t = createTranslator(messages);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: t('meta.title'), template: `%s | ${SITE_NAME}` },
  description: t('meta.description'),
  applicationName: SITE_NAME,
  keywords: ['AI creators', 'virtual influencers', 'AI influencers', 'Kai Arden', 'Mara Solé', 'Dante Voss', 'Iris Calder'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: t('meta.title'), description: t('meta.description'), url: '/', siteName: SITE_NAME, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: t('meta.title'), description: t('meta.description') },
};
export const viewport: Viewport = { themeColor: '#F4EFE7', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(messages, locale)) }} />
        <AppProviders locale={locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
