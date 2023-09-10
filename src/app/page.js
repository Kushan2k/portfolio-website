"use client"
import { About, Hero, NumberFacts } from "@/components"
import { NavbarDefault } from "@/components"
import { useState } from "react"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <main className="min-h-screen overflow-hidden ">
      <NavbarDefault isOpen={isOpen} setOpen={setOpen} />
      <Hero />
      <About />
      <NumberFacts />
    </main>
  )
}
