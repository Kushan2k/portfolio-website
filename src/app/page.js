"use client"
import {
  About,
  Hero,
  NumberFacts,
  NavbarDefault,
  TechStack,
} from "@/components"

import { useState, useRef } from "react"
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
    <main
      className="min-h-screen overflow-hidden  bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400  scroll-smooth"
      style={{
        backgroundImage:
          "url(https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/04/low_poly_banner_design_1711-e1655987082738.jpg?resize=1000%2C750&ssl=1)",

        backgroundBlendMode: "color",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
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
      <ReactVisibilitySensor onChange={(vis) => onChange(vis, "stats")}>
        <NumberFacts />
      </ReactVisibilitySensor>
      <ReactVisibilitySensor onChange={(vis) => onChange(vis, "stack")}>
        <TechStack />
      </ReactVisibilitySensor>
    </main>
  )
}
