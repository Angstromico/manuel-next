import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
        className={`${inter.className} bg-white dark:bg-background text-black dark:text-white`}
      >
        <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className='flex-grow mt-20'>{children}</main>
          </NextIntlClientProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
