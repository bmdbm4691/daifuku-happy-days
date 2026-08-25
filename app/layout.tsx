import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '大福の日々｜もふもふの、ちいさなしあわせ。',
  description: 'お芋のおやつと公園が似合う、6歳のポメラニアン・大福の小さくてしあわせな毎日。',
  openGraph: {
    title: '大福の日々｜もふもふの、ちいさなしあわせ。',
    description: '6歳のポメラニアン・大福の小さくてしあわせな毎日。',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1672, height: 941, alt: '大福の日々' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '大福の日々｜もふもふの、ちいさなしあわせ。',
    description: '6歳のポメラニアン・大福の小さくてしあわせな毎日。',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
