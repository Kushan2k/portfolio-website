"use client"

import { Alert } from "flowbite-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Alert color={"failure"} title="hello world">
        hello world
      </Alert>
    </main>
  )
}
