import Image from 'next/image';
import type { Creator } from '@/types/creator';
import { ArrowIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/providers/I18nProvider';

export default function CreatorCard({
  creator: c,
  priority,
  onOpen,
}: {
  creator: Creator;
  priority?: boolean;
  onOpen: (el: HTMLElement) => void;
}) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      aria-haspopup="dialog"
      aria-label={t('card.open', { name: c.name })}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl text-left transition-transform duration-500 hover:-translate-y-1"
      style={{ background: c.theme.bg, color: c.theme.fg }}
    >
      <Image
        src={c.portrait}
        alt={c.alt}
        fill
        priority={priority}
       
        sizes="(min-width:1024px) 290px, (min-width:640px) 45vw, 50vw"
        className="object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span
        className="absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:left-3 sm:top-3 sm:text-[11px]"
        style={{ background: c.theme.accent, color: c.theme.accentFg }}
      >
        {c.category.split(' & ')[0]}
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-12 text-white sm:p-4 sm:pt-16">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-medium leading-tight sm:text-2xl">{c.name}</h3>
          <p className="mt-0.5 hidden text-sm text-white/75 sm:block">{c.tagline}</p>
        </div>
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition group-hover:translate-x-0.5 sm:h-9 sm:w-9"
          style={{ background: c.theme.accent, color: c.theme.accentFg }}
          aria-hidden="true"
        >
          <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
