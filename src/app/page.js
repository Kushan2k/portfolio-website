"use client"
import { About, Hero } from "@/components"
import { NavbarDefault } from "@/components"
import { useRef, useState } from "react"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <main className="min-h-screen overflow-hidden ">
      <NavbarDefault isOpen={isOpen} setOpen={setOpen} />
      <Hero />
      <About />
    </main>
  )
}
