"use client"

import { navSections } from "@/data/resume"

type SiteNavProps = {
  activeSection: string
  onNavigate: (id: string) => void
}

export function SiteNav({ activeSection, onNavigate }: SiteNavProps) {
  return (
    <nav
      className="fixed left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      aria-label="Section navigation"
    >
      <div className="flex flex-col gap-3">
        {navSections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-2 h-7 rounded-full transition-all duration-500 ${
              activeSection === section.id
                ? "bg-foreground scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? "true" : undefined}
          />
        ))}
      </div>
    </nav>
  )
}
