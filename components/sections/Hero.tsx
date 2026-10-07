'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TELEGRAM_URL } from '@/lib/constants';
import { ArrowIcon, TelegramIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/providers/I18nProvider';

const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t, creators } = useTranslation();
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-20 md:pb-16">
      <motion.p {...rise(0)} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5C564D]">
        {t('hero.eyebrow')}
      </motion.p>
      <motion.h1
        id="hero-title"
        {...rise(1)}
        className="max-w-4xl font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]"
      >
        {t('hero.titleStart')}
        <span className="italic text-[#C74B2E]">{t('hero.titleEmphasis')}</span>
        {t('hero.titleEnd')}
      </motion.h1>
      <motion.p {...rise(2)} className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
        {t('hero.subtitle')}
      </motion.p>
      <motion.div {...rise(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#creators"
          className="group flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-bold text-paper transition hover:bg-[#2b2620]"
        >
          {t('hero.ctaCreators')} <ArrowIcon className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-7 text-base font-bold transition hover:bg-ink/5"
        >
          <TelegramIcon className="h-5 w-5" /> {t('hero.ctaTelegram')}
          <span className="sr-only"> {t('common.opensInNewTab')}</span>
        </a>
      </motion.div>
      <motion.div {...rise(4)} className="mt-10 flex items-center gap-3">
        <div className="flex -space-x-3">
          {creators.map((c) => (
            <Image key={c.id} src={c.portrait} alt="" width={48} height={48} priority className="h-12 w-12 rounded-full border-[3px] border-paper object-cover object-top" />
          ))}
        </div>
        <p className="text-sm font-semibold text-mute">{t('hero.followers')}</p>
      </motion.div>
    </section>
  );
}
