import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider, App as AntApp } from 'antd';
import theme from './theme/themeConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий | Мгновенная печать фото',
  description: 'Аренда фотобудки в Бресте для свадеб и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит. Цены от 150 BYN/час. Звоните!',
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
    description: 'Аренда фотобудки в Бресте для свадеб и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит.',
    url: 'https://ваш-сайт.by',
    type: 'website',
    locale: 'ru_BY',
    siteName: 'PhotoBooth Брест',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PhotoBooth Брест - Аренда фотобудки',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий',
    description: 'Аренда фотобудки в Бресте для свадеб и праздников. Мгновенная печать фото, цифровая копия, стильный реквизит.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code', // Замените
    yandex: 'yandex-verification-code', // Замените
  },
  alternates: {
    canonical: 'https://ваш-сайт.by', // Замените
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ConfigProvider theme={theme}>
          <AntApp>
            {children}
          </AntApp>
        </ConfigProvider>
      </body>
    </html>
  );
}
