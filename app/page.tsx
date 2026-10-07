import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import TelegramCTA from '@/components/TelegramCTA';
import Footer from '@/components/Footer';
import { createTranslator, defaultLocale, getMessages } from '@/lib/i18n';

export default function Home() {
  const t = createTranslator(getMessages(defaultLocale));
  return (
    <>
      <a href="#creators" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-paper">{t('a11y.skipToCreators')}</a>
      <Header />
      <main id="main">
        <Hero />
        <Showcase />
        <TelegramCTA />
      </main>
      <Footer />
    </>
  );
}
