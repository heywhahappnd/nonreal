import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import TelegramCTA from '@/components/TelegramCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <TelegramCTA />
      </main>
      <Footer />
    </>
  );
}
