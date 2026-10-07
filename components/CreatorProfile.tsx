'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { TELEGRAM_URL, type Creator } from '@/lib/creators';
import { CloseIcon, TelegramIcon } from './Icons';

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return desktop;
}

export default function CreatorProfile({ creator, onClose }: { creator: Creator | null; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const open = creator !== null;

  // Escape to close, focus trap, scroll lock
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => panel.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !panel.current) return;
      const els = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const panelAnim = desktop
    ? { initial: { opacity: 0, y: 24, scale: 0.97 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 16, scale: 0.98 } }
    : { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } };

  return (
    <AnimatePresence>
      {creator && (
        <div key="profile" className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:p-6">
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key={creator.id}
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-name"
            aria-describedby="profile-bio"
            {...panelAnim}
            transition={reduce ? { duration: 0 } : { type: 'spring', damping: 32, stiffness: 320 }}
            drag={desktop || reduce ? false : 'y'}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => (info.offset.y > 120 || info.velocity.y > 600) && onClose()}
            className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-paper shadow-2xl md:max-h-[86vh] md:max-w-4xl md:flex-row md:rounded-3xl"
          >
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-white/70 md:hidden" aria-hidden="true" />
            <button
              type="button"
              onClick={onClose}
              data-autofocus
              aria-label={`Close ${creator.name} profile`}
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/65"
            >
              <CloseIcon />
            </button>

            <div className="relative h-64 shrink-0 md:h-auto md:min-h-[520px] md:w-[42%]" style={{ background: creator.theme.bg }}>
              <Image
                src={creator.portrait}
                alt={creator.alt}
                fill
                sizes="(min-width:768px) 400px, 100vw"
                className="object-cover object-[50%_30%] md:object-[50%_22%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
            </div>

            <div className="overflow-y-auto overscroll-contain p-5 pb-8 md:w-[58%] md:p-8">
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                style={{ background: creator.theme.bg, color: creator.theme.accent }}
              >
                {creator.category}
              </span>
              <h3 id="profile-name" className="mt-3 font-display text-4xl font-medium tracking-tight">{creator.name}</h3>
              <p className="text-sm text-mute">@{creator.handle} · {creator.location}</p>
              <p id="profile-bio" className="mt-4 leading-relaxed">{creator.bio}</p>

              <dl className="mt-5 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line text-center">
                {[['Followers', creator.stats.followers], ['Posts', creator.stats.posts], ['Engagement', creator.stats.engagement]].map(([k, v]) => (
                  <div key={k} className="flex flex-col-reverse py-3">
                    <dt className="text-[11px] uppercase tracking-wider text-mute">{k}</dt>
                    <dd className="font-display text-xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-2xl p-4" style={{ background: creator.theme.bg, color: creator.theme.fg }}>
                <p className="text-xs font-bold uppercase tracking-wider opacity-70">Ask {creator.name.split(' ')[0]}</p>
                <p className="mt-2 text-sm font-semibold">&ldquo;{creator.ask.q}&rdquo;</p>
                <p className="mt-2 rounded-xl px-3 py-2 text-sm" style={{ background: creator.theme.accent, color: creator.theme.accentFg }}>
                  {creator.ask.a}
                </p>
              </div>

              <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-[0.16em] text-mute">Latest drops</h4>
              <ul className="-mx-5 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:auto-rows-fr md:grid-cols-3 md:overflow-visible md:px-0">
                {creator.posts.map((p) => {
                  const stat = p.kind === 'stat';
                  return (
                    <li
                      key={p.title}
                      className="flex min-h-[220px] w-[64%] shrink-0 snap-start flex-col justify-between gap-5 rounded-2xl p-4 md:w-auto"
                      style={{ background: stat ? creator.theme.accent : creator.theme.bg, color: stat ? creator.theme.accentFg : creator.theme.fg }}
                    >
                      <p className="font-display text-xl font-medium leading-tight">{p.title}</p>
                      <div>
                        <p className="text-[13px] leading-snug">{p.body}</p>
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-wider opacity-80">{p.meta}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-tg px-6 font-bold text-white transition hover:brightness-95"
              >
                <TelegramIcon /> Follow {creator.name.split(' ')[0]} on Telegram<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
