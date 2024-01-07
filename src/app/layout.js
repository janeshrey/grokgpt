import './globals.css'
import './styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Grok GPT - Empowering Your Crypto Journey with AI',
  description: 'Empowering Your Crypto Journey with AI',
  openGraph: {
    images: ['/images/Thumbnail.jpg'],
  },
}

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      
      <body className={inter.className} data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0" >{children}</body>
    </html>
  )
}
