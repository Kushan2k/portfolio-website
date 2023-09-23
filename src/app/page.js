"use client"
import {
  About,
  Hero,
  NumberFacts,
  NavbarDefault,
  TechStack,
  Portfolio,
  Service,
  Resume,
  Contact,
} from "@/components"

import { useState } from "react"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const [vissibleLink, setvissible] = useState("home")

  function onChange(link) {
    setvissible(link)
  }

  return (
    <main className="min-h-screen overflow-hidden  bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-200  scroll-smooth dark:bg-black ">
      <NavbarDefault
        isOpen={isOpen}
        setOpen={setOpen}
        activeLink={vissibleLink}
      />

      <Hero onchange={onChange} />

      <About onchange={onChange} />

      <Resume onchange={onChange} />
      <Portfolio onchange={onChange} />
      <Service onchange={onChange} />
      <Contact onchange={onChange} />
    </main>
  )
}
