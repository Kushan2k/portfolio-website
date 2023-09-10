"use client"
import { About, Hero, NumberFacts } from "@/components"
import { NavbarDefault } from "@/components"
import { useState } from "react"
import ReactVisibilitySensor from "react-visibility-sensor"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [vissibleLink, setvissible] = useState("home")

  function onChange(isVisible, link) {
    if (isVisible) {
      setvissible(link)
    }
  }
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
      <NavbarDefault
        isOpen={isOpen}
        setOpen={setOpen}
        activeLink={vissibleLink}
      />
      <ReactVisibilitySensor onChange={(vis) => onChange(vis, "home")}>
        <Hero />
      </ReactVisibilitySensor>
      <ReactVisibilitySensor onChange={(vis) => onChange(vis, "about")}>
        <About />
      </ReactVisibilitySensor>
      <ReactVisibilitySensor onChange={(vis) => onChange(vis, "info")}>
        <NumberFacts />
      </ReactVisibilitySensor>
    </main>
  )
}
