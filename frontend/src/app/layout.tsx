import Navbar from '@/components/Navbar'
import GlobalContextProvider from '@/context/global-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gallery | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
  icons: {
    icon: ['/favicon.png?v=4'],
  },
  manifest: '/manifest.json',
}

export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-w-screen min-h-screen bg-[linear-gradient(90deg,_rgba(0,0,0,0.90)_-2.91%,_rgba(0,0,0,0.80)_51.04%,_rgba(0,0,0,0.90)_107.23%)]`}
      >
        <GlobalContextProvider>
          <Navbar />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
