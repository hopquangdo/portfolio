import { navSections } from "@/data/resume"

type SectionId = (typeof navSections)[number]["id"]

export function isValidSectionId(id: string): id is SectionId {
  return navSections.some((section) => section.id === id)
}

export function updateSectionHash(id: string, replace = true) {
  if (typeof window === "undefined" || !isValidSectionId(id)) return

  const url = `${window.location.pathname}${window.location.search}#${id}`

  if (replace) {
    window.history.replaceState(null, "", url)
  } else {
    window.history.pushState(null, "", url)
  }
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  el?.classList.add("animate-fade-in-up")
  el?.scrollIntoView({ behavior: "smooth", block: "start" })
  updateSectionHash(id, false)
}
