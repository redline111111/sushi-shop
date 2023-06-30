import { ReduxProvider } from '@/redux/features/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sushi.',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ReduxProvider>
          <Header/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
