"use client"

import { useEffect, useState } from "react"

export function BackgroundEffect() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-background" />

      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div
        className="bg-spotlight"
        style={{
          transform: `translate(${mouse.x - 200}px, ${mouse.y - 200}px)`,
        }}
      />

      <div className="bg-grid" />
      <div className="bg-vignette" />
    </div>
  )
}
