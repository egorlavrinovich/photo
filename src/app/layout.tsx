import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider, App as AntApp } from 'antd';
import theme from './theme/themeConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий | Мгновенная печать фото',
  description: 'Аренда фотобудки (фотокабины) в Бресте для свадеб, дней рождения, корпоративов. Мгновенная печать фотографий, стильные реквизиты, цифровая копия. Цены от 150 BYN/час. Работаем без выходных!',
  keywords: [
    'аренда фотобудки брест',
    'фотокабина брест',
    'фотобудка на свадьбу брест',
    'мгновенная печать фото брест',
    'фотобудка аренда брест',
    'фотокабина аренда брест',
    'фотобудка для мероприятий брест',
    'фотокабина для свадьбы брест',
    'фотобудка на день рождения брест',
    'фотокабина на корпоратив брест',
    'фотобудка с печатью брест',
    'фотокабина с мгновенной печатью брест',
    'фотобудка с реквизитом брест',
    'фотокабина с реквизитом брест',
    'фотобудка на выпускной брест',
    'фотокабина на выпускной брест',
    'фотобудка на детский праздник брест',
    'фотокабина на детский праздник брест',
    'фотобудка на новогодний праздник брест',
    'фотокабина на новый год брест'
  ],
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
  openGraph: {
    title: 'Аренда фотобудки в Бресте | Фотокабина для мероприятий',
    description: 'Аренда фотобудки (фотокабины) в Бресте для свадеб, дней рождения, корпоративов. Мгновенная печать фотографий, стильные реквизиты, цифровая копия. Цены от 150 BYN/час.',
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
    google: 'your-google-verification-code', // Нужно будет заменить на реальный код
    yandex: 'your-yandex-verification-code', // Нужно будет заменить на реальный код
  },
  alternates: {
    canonical: 'https://your-domain.com', // Нужно будет заменить на реальный домен
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
