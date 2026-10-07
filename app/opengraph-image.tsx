import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getCreators } from '@/lib/creators';
import { createTranslator, defaultLocale, getMessages } from '@/lib/i18n';

const messages = getMessages(defaultLocale);
const t = createTranslator(messages);
const creators = getCreators(messages);

export const alt = t('meta.title');
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photos = await Promise.all(
    creators.map(async (c) => {
      const buf = await readFile(path.join(process.cwd(), 'public', c.portrait));
      return `data:image/jpeg;base64,${buf.toString('base64')}`;
    }),
  );
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F4EFE7', color: '#14120F', padding: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 520 }}>
          <div style={{ fontSize: 44, fontWeight: 700 }}>nonreal</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>{t('meta.ogTitle').split('. ')[0] + '.'}</div>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, color: '#C74B2E' }}>{t('meta.ogTitle').split('. ')[1]}</div>
            <div style={{ fontSize: 28, marginTop: 24, color: '#5C564D' }}>{t('meta.ogSubtitle')}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginLeft: 'auto' }}>
          {photos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" width={140} height={502} style={{ objectFit: 'cover', borderRadius: 20, marginTop: i % 2 ? 40 : 0 }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
