
import './globals.css'
import Header from "@/app/components/Header";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Jobs',
  description: 'Site to search for jobs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        </body>
    </html>
  )
}
