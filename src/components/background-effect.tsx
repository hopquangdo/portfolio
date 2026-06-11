"use client"

import { useEffect, useState } from "react"

const SECTION_THEMES: Record<
  string,
  { orbs: [string, string, string]; grid: string; spotlight: string }
> = {
  intro: {
    orbs: [
      "oklch(0.55 0.08 280 / 0.07)",
      "oklch(0.6 0.06 220 / 0.05)",
      "oklch(0.65 0.05 165 / 0.04)",
    ],
    grid: "oklch(0.85 0 0 / 0.04)",
    spotlight: "oklch(0.7 0.08 260 / 0.04)",
  },
  work: {
    orbs: [
      "oklch(0.55 0.08 252 / 0.07)",
      "oklch(0.58 0.06 235 / 0.05)",
      "oklch(0.62 0.05 210 / 0.04)",
    ],
    grid: "oklch(0.75 0.04 240 / 0.04)",
    spotlight: "oklch(0.65 0.08 240 / 0.04)",
  },
  projects: {
    orbs: [
      "oklch(0.58 0.08 195 / 0.07)",
      "oklch(0.62 0.06 168 / 0.05)",
      "oklch(0.66 0.05 145 / 0.04)",
    ],
    grid: "oklch(0.75 0.04 170 / 0.04)",
    spotlight: "oklch(0.68 0.08 175 / 0.04)",
  },
  education: {
    orbs: [
      "oklch(0.62 0.08 55 / 0.06)",
      "oklch(0.58 0.06 280 / 0.05)",
      "oklch(0.6 0.05 210 / 0.04)",
    ],
    grid: "oklch(0.78 0.04 60 / 0.035)",
    spotlight: "oklch(0.7 0.07 70 / 0.035)",
  },
  activities: {
    orbs: [
      "oklch(0.58 0.08 200 / 0.07)",
      "oklch(0.6 0.06 175 / 0.05)",
      "oklch(0.62 0.05 150 / 0.04)",
    ],
    grid: "oklch(0.75 0.04 175 / 0.04)",
    spotlight: "oklch(0.68 0.08 180 / 0.04)",
  },
  contact: {
    orbs: [
      "oklch(0.58 0.08 320 / 0.06)",
      "oklch(0.6 0.06 265 / 0.05)",
      "oklch(0.62 0.05 200 / 0.04)",
    ],
    grid: "oklch(0.78 0.04 310 / 0.035)",
    spotlight: "oklch(0.68 0.07 300 / 0.035)",
  },
}

type BackgroundEffectProps = {
  activeSection: string
}

export function BackgroundEffect({ activeSection }: BackgroundEffectProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const theme = SECTION_THEMES[activeSection] ?? SECTION_THEMES.intro
  const sectionIndex = ["intro", "work", "projects", "education", "activities", "contact"].indexOf(activeSection)
  const drift = sectionIndex >= 0 ? sectionIndex * 8 : 0

  useEffect(() => {
    let frame = 0

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    const handleMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  const orbs = [
    {
      wrap: "bg-orb-wrap-1",
      parallax: { x: drift * 0.5, y: scrollY * 0.035 },
      delay: "0s",
    },
    {
      wrap: "bg-orb-wrap-2",
      parallax: { x: -drift * 0.7, y: scrollY * -0.05 },
      delay: "4s",
    },
    {
      wrap: "bg-orb-wrap-3",
      parallax: { x: drift * 0.35, y: scrollY * 0.02 },
      delay: "8s",
    },
  ] as const

  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-background" />

      {orbs.map((orb, index) => (
        <div
          key={orb.wrap}
          className={`bg-orb-wrap ${orb.wrap}`}
          style={{
            transform: `translate(${orb.parallax.x}px, ${orb.parallax.y}px)`,
          }}
        >
          <div
            className="bg-orb-inner"
            style={{
              background: theme.orbs[index],
              animationDelay: orb.delay,
            }}
          />
        </div>
      ))}

      <div
        className="bg-spotlight"
        style={{
          background: `radial-gradient(circle, ${theme.spotlight} 0%, transparent 72%)`,
          transform: `translate(${mouse.x - 220}px, ${mouse.y - 220}px)`,
        }}
      />

      <div className="bg-grid" style={{ ["--grid-dot" as string]: theme.grid }} />
      <div className="bg-vignette" />
    </div>
  )
}
