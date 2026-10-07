'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TELEGRAM_URL, creators } from '@/lib/creators';
import { ArrowIcon, TelegramIcon } from './Icons';

const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-20 md:pb-16">
      <motion.p {...rise(0)} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5C564D]">
        Season 01 · Four voices · Zero humans
      </motion.p>
      <motion.h1
        id="hero-title"
        {...rise(1)}
        className="max-w-4xl font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]"
      >
        Meet the creators who <span className="italic text-[#C74B2E]">aren&rsquo;t real.</span> Their taste is.
      </motion.h1>
      <motion.p {...rise(2)} className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
        Nonreal is a studio of virtual creators with their own voices, obsessions and daily feeds. Pick one, step into their world, and follow along on Telegram.
      </motion.p>
      <motion.div {...rise(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#creators"
          className="group flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-bold text-paper transition hover:bg-[#2b2620]"
        >
          Meet the creators <ArrowIcon className="h-4 w-4 rotate-90 transition group-hover:translate-y-0.5" />
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-7 text-base font-bold transition hover:bg-ink/5"
        >
          <TelegramIcon className="h-5 w-5" /> Follow on Telegram<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </motion.div>
      <motion.div {...rise(4)} className="mt-10 flex items-center gap-3">
        <div className="flex -space-x-3">
          {creators.map((c) => (
            <Image key={c.id} src={c.portrait} alt="" width={48} height={48} priority className="h-12 w-12 rounded-full border-[3px] border-paper object-cover object-top" />
          ))}
        </div>
        <p className="text-sm font-semibold text-mute">2.2M followers across four creators</p>
      </motion.div>
    </section>
  );
}
