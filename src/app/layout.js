import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kushan Gayantha",
  description: "portfolio website for me",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className, "overflow-hidden"]}>{children}</body>
    </html>
  )
}
