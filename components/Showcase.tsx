'use client';
import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { creators, type Creator } from '@/lib/creators';
import CreatorCard from './CreatorCard';
import CreatorProfile from './CreatorProfile';

export default function Showcase() {
  const [active, setActive] = useState<Creator | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    trigger.current?.focus();
  }, []);

  return (
    <section id="creators" aria-labelledby="creators-title" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-10 md:py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 id="creators-title" className="font-display text-3xl font-medium tracking-tight sm:text-4xl">The lineup</h2>
        <p className="hidden text-sm text-mute sm:block">Tap a creator to step inside</p>
      </div>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
      >
        {creators.map((c, i) => (
          <motion.li
            key={c.id}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <CreatorCard
              creator={c}
              priority={i < 2}
              onOpen={(el) => {
                trigger.current = el;
                setActive(c);
              }}
            />
          </motion.li>
        ))}
      </motion.ul>
      <CreatorProfile creator={active} onClose={close} />
    </section>
  );
}
