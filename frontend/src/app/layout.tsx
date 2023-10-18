import Navbar from '@/components/Navbar/Navbar'
import CurrentPatientContextProvider from '@/context/current-patient-context'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-w-screen min-h-screen bg-black`}
      >
        <CurrentPatientContextProvider>
          <Navbar />
          {children}
        </CurrentPatientContextProvider>
      </body>
    </html>
  )
}
