import Image from 'next/image';
import { TELEGRAM_URL, creators } from '@/lib/creators';
import { TelegramIcon } from './Icons';

export default function TelegramCTA() {
  return (
    <section id="join" aria-labelledby="join-title" className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-paper sm:px-12 sm:py-16">
        <div className="relative z-10 max-w-xl">
          <h2 id="join-title" className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Four feeds. <span className="italic text-[#F6D9B0]">One channel.</span>
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            Daily drops from every creator, first access to new faces, and the occasional answer when you ask.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-tg px-8 text-lg font-bold text-white transition hover:brightness-110 sm:w-auto"
          >
            <TelegramIcon className="h-6 w-6" /> Join on Telegram<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="mt-10 flex -space-x-3 md:absolute md:bottom-12 md:right-12 md:mt-0 md:-space-x-4">
          {creators.map((c) => (
            <Image
              key={c.id}
              src={c.portrait}
              alt=""
              width={80}
              height={80}
             
              className="h-14 w-14 rounded-full border-4 border-ink object-cover object-top md:h-20 md:w-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
