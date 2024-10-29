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
  const messages = await getMessages(locale)

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
        <AnimateBg />

        <div className='relative flex flex-col min-h-screen max-w-4xl mx-auto z-10'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className='w-full'>
              <div className='flex flex-col gap-20 h-[850px]'>{children}</div>
            </main>
          </NextIntlClientProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
