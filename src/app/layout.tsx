import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { LocalBusinessJsonLd } from '@/components/local-business-jsonld';
import { MobileCallButton } from '@/components/mobile-call-button';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.company.name}`
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.locale,
    siteName: siteConfig.siteName,
    url: siteConfig.domain,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: siteConfig.company.name
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <MobileCallButton />
        <Footer />
      </body>
    </html>
  );
}
