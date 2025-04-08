import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider, App as AntApp } from 'antd';
import theme from './theme/themeConfig';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Фотобудка в Бресте | Аренда фотокабины для мероприятий | Инстабудка',
    template: '%s | Фотобудка Брест'
  },
  description: 'Аренда профессиональной фотобудки в Бресте для свадеб, корпоративов и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит. Лучшие цены от 250 BYN/час. ☎ +375 (29) 228-42-13',
  keywords: [
    'фотобудка Брест',
    'аренда фотобудки',
    'фотокабина Брест',
    'инстабудка',
    'фото на праздник',
    'свадебная фотобудка',
    'аренда фотобудки на свадьбу',
    'фотобудка на корпоратив',
    'фотобудка цена Брест'
  ],
  applicationName: 'Фотобудка Брест',
  authors: [{ name: 'Фотобудка Брест', url: 'https://photobudka-brest.ru' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Фотобудка Брест',
  publisher: 'Фотобудка Брест',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  openGraph: {
    title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий',
    description: 'Профессиональная аренда фотобудки в Бресте для свадеб, корпоративов и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит.',
    url: 'https://photobudka-brest.ru',
    type: 'website',
    locale: 'ru_BY',
    siteName: 'Фотобудка Брест',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Фотобудка Брест - Профессиональная аренда фотобудки',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий',
    description: 'Профессиональная аренда фотобудки в Бресте для свадеб, корпоративов и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит.',
    creator: '@photobudkabrest',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://photobudka-brest.ru',
    languages: {
      'ru-BY': 'https://photobudka-brest.ru',
    },
  },
  category: 'event services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru-BY">
      <head>
        <meta name="geo.region" content="BY-BR" />
        <meta name="geo.placename" content="Брест" />
        <meta name="geo.position" content="52.097621;23.734051" />
        <meta name="ICBM" content="52.097621, 23.734051" />
      </head>
      <body className={inter.className}>
        <ConfigProvider theme={theme}>
          <AntApp>
            {children}
          </AntApp>
        </ConfigProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}