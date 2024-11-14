import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Starfield from '@/components/Starfield'
import AnimateBg from '@/components/AnimateBg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Manuel's Portfolio",
  description: 'Page from the Web Developer Manuel Morales',
  metadataBase: new URL('https://manuel-portfolio-next.netlify.app/'), // Replace with your domain
  openGraph: {
    title: "Manuel's Portfolio",
    description:
      'Portfolio of Web Developer Manuel Morales, showcasing projects and skills.',
    url: 'https://manuel-portfolio-next.netlify.app/',
    siteName: "Manuel's Portfolio",
    locale: 'en',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle', // Replace with your Twitter handle
    title: "Manuel's Portfolio",
    description:
      'Portfolio of Web Developer Manuel Morales, showcasing projects and skills.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages({ locale })

  return (
    <html className='dark' lang={locale}>
      <body
        className={`${inter.className} bg-bWhite dark:bg-background text-black dark:text-white relative`}
      >
        {/* Render Starfield only in dark mode */}
        <div className='hidden dark:block absolute inset-0 z-0 pointer-events-none'>
          <Starfield />
        </div>
        {/* Render CloudyBackground only is not dark mode */}
        {/* <AnimateBg /> */}

        <div className='relative flex flex-col min-h-screen max-w-4xl mx-auto z-10'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className='w-full flex-grow'>
              <div className='flex flex-col gap-20'>{children}</div>
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
