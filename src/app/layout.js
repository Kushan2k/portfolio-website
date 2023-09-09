"use client"
import { NavbarDefault } from "@/components"
import "./globals.css"
import { Inter } from "next/font/google"
import { useRef, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kushan Gayantha",
  description: "portfolio website for me",
}

export default function RootLayout({ children }) {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDefault ref={ref} isOpen={isOpen} setOpen={setOpen} />
        {children}
      </body>
    </html>
  )
}
