'use client';
import { MotionConfig } from 'framer-motion';

/** Makes every animation honour the visitor's prefers-reduced-motion setting. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
