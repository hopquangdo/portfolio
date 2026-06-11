"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { BackgroundEffect } from "@/components/background-effect"
import { SiteNav } from "@/components/site-nav"
import {
  activities,
  awards,
  education,
  navSections,
  profile,
  projects,
  publications,
  skills,
  socialLinks,
  workExperience,
} from "@/data/resume"
import { isValidSectionId, scrollToSection, updateSectionHash } from "@/lib/section-hash"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("intro")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const isNavigatingRef = useRef(false)

  const handleNavigate = useCallback((id: string) => {
    isNavigatingRef.current = true
    scrollToSection(id)
    setActiveSection(id)
    window.setTimeout(() => {
      isNavigatingRef.current = false
    }, 900)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!isValidSectionId(hash)) return

    const el = document.getElementById(hash)
    if (!el) return

    isNavigatingRef.current = true
    el.classList.add("animate-fade-in-up")
    setActiveSection(hash)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ block: "start" })
      })
    })

    window.setTimeout(() => {
      isNavigatingRef.current = false
    }, 500)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (!isValidSectionId(hash)) return

      const el = document.getElementById(hash)
      if (!el) return

      isNavigatingRef.current = true
      el.classList.add("animate-fade-in-up")
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(hash)
      window.setTimeout(() => {
        isNavigatingRef.current = false
      }, 900)
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            if (!isNavigatingRef.current) {
              const id = entry.target.id
              setActiveSection(id)
              updateSectionHash(id, true)
            }
          }
        })
      },
      { threshold: 0.12, rootMargin: "-8% 0px -12% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = useCallback((index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el
  }, [])

  return (
    <div className="min-h-screen text-foreground relative isolate overflow-x-hidden">
      <BackgroundEffect activeSection={activeSection} />
      <SiteNav activeSection={activeSection} onNavigate={handleNavigate} />

      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-20 p-2.5 rounded-lg border border-border/60 bg-background/70 backdrop-blur-sm hover:border-muted-foreground/50 transition-all lg:hidden"
        aria-label="Chuyển giao diện"
      >
        {isDark ? (
          <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 pb-12">
        <header
          id="intro"
          ref={setSectionRef(0)}
          className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center section-reveal pt-12 sm:pt-12"
        >
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 w-full">
            <div className="lg:col-span-3 space-y-5 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wider">
                  HỒ SƠ / 2026
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
                  <span className="text-muted-foreground">Đỗ Quang</span>
                  <br />
                  <span className="text-glow">Hợp</span>
                </h1>
              </div>

              <div className="space-y-5 sm:space-y-6 max-w-xl">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {profile.summary}
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {profile.title}
                  </div>
                  <span className="hidden sm:inline text-muted-foreground/40">·</span>
                  <div>{profile.location}</div>
                </div>
              </div>

           
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8 lg:justify-end">
              <div className="p-4 sm:p-5 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm space-y-3">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">HIỆN TẠI</div>
                <div className="space-y-1">
                  <div className="text-foreground font-medium">{profile.currentRole}</div>
                  <div className="text-sm text-muted-foreground">@ {profile.currentCompany}</div>
                  <div className="text-xs text-muted-foreground">{profile.currentPeriod}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">CHUYÊN MÔN</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs border border-border/60 rounded-full hover:border-muted-foreground/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="work" ref={setSectionRef(1)} className="section-reveal py-16 sm:py-24 lg:py-32 scroll-mt-16">
          <div className="space-y-10 sm:space-y-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Work Experience</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">
                  Các vai trò và cột mốc theo thời gian.
                </p>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-mono shrink-0">2024 — Hiện tại</div>
            </div>

            <div className="relative">
              <div
                className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-border/80"
                aria-hidden
              />

              <div className="space-y-6 sm:space-y-8">
                {workExperience.map((job) => (
                  <article
                    key={`${job.company}-${job.period}`}
                    className="relative pl-7 sm:pl-10 group"
                  >
                    <div
                      className="absolute left-0 sm:left-1 top-1.5 w-[15px] h-[15px] sm:w-[23px] sm:h-[23px] rounded-full border-2 border-background bg-foreground/80 ring-2 ring-border/60 group-hover:ring-foreground/30 transition-all"
                      aria-hidden
                    />

                    <div className="p-4 sm:p-6 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm hover:border-muted-foreground/40 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[11px] sm:text-xs font-mono text-muted-foreground">{job.period}</span>
                      </div>

                      <div className="space-y-1 mb-3">
                        <h3 className="text-base sm:text-lg font-medium leading-snug">{job.role}</h3>
                        <div className="text-sm text-muted-foreground">{job.company}</div>
                      </div>

                      <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-none">
                        {job.highlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-muted-foreground/40 shrink-0 mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/40">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] sm:text-xs text-muted-foreground border border-border/50 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" ref={setSectionRef(2)} className="section-reveal py-16 sm:py-24 lg:py-32 scroll-mt-16">
          <div className="space-y-10 sm:space-y-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-8 sm:gap-10">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group p-4 sm:p-6 md:p-8 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm hover:border-muted-foreground/50 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6 pb-5 border-b border-border/40">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-medium leading-snug">{project.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {project.role} · {project.period}
                      </div>
                    </div>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      >
                        {project.url.replace("https://", "")} →
                      </Link>
                    )}
                  </div>

                  <div className="space-y-6 sm:space-y-7">
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Problem</h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-0 sm:pl-1">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Solution</h4>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-none">
                        {project.solution.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span className="text-muted-foreground/40 shrink-0 mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Result</h4>
                      <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-none">
                        {project.result.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span className="text-green-600/70 dark:text-green-400/70 shrink-0 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-border/40">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] sm:text-xs text-muted-foreground border border-border/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" ref={setSectionRef(3)} className="section-reveal py-16 sm:py-24 lg:py-32 scroll-mt-16">
          <div className="space-y-10 sm:space-y-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Education & Research</h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-6 md:p-8 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{education.degree}</h3>
                    <div className="text-sm text-muted-foreground">{education.school}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-mono shrink-0">
                    {education.period} · GPA {education.gpa}
                  </div>
                </div>
              </div>

              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="p-4 sm:p-6 md:p-8 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm space-y-4"
                >
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground font-mono">{pub.date}</div>
                    <h3 className="text-base sm:text-lg font-medium leading-snug">{pub.title}</h3>
                    <div className="text-sm text-muted-foreground">{pub.authors}</div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
                    {pub.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-muted-foreground/40 shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" ref={setSectionRef(4)} className="section-reveal py-16 sm:py-24 lg:py-32 scroll-mt-16">
          <div className="space-y-10 sm:space-y-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Activities & Awards</h2>

            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Activities</h3>
                {activities.map((item) => (
                  <article
                    key={item.id}
                    className="p-4 sm:p-6 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm hover:border-muted-foreground/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-medium leading-snug">{item.title}</h4>
                      <span className="text-xs sm:text-sm font-mono text-muted-foreground shrink-0">{item.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{item.organization}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Awards & Honors</h3>
                {awards.map((item) => (
                  <article
                    key={item.id}
                    className="p-4 sm:p-6 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm hover:border-muted-foreground/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-medium leading-snug">{item.title}</h4>
                      <span className="text-xs sm:text-sm font-mono text-muted-foreground shrink-0">{item.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{item.organization}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={setSectionRef(5)}
          className="section-reveal py-16 sm:py-24 lg:py-32 scroll-mt-16 min-h-0"
        >
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Contact</h2>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-5 p-4 sm:p-6 border border-border/60 rounded-xl bg-background/40 backdrop-blur-sm">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Sẵn sàng trao đổi về hệ thống AI, ứng dụng LLM và các cơ hội hợp tác mới.
                </p>

                <div className="space-y-3 pt-1">
                  <Link
                    href={`mailto:${profile.email}`}
                    className="group flex items-start gap-2 text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <span className="text-sm sm:text-base break-all">{profile.email}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" aria-hidden>
                      →
                    </span>
                  </Link>
                  <div className="text-sm text-muted-foreground">{profile.phone}</div>
                  <div className="text-sm text-muted-foreground">{profile.location}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono">KHÁC</div>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between p-4 border border-border/60 rounded-xl bg-background/30 backdrop-blur-sm hover:border-muted-foreground/50 transition-all"
                    >
                      <div>
                        <div className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 break-all">{social.handle}</div>
                      </div>
                      <span className="text-muted-foreground group-hover:translate-x-0.5 transition-transform shrink-0 ml-3">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="hidden lg:block py-10 sm:py-14 mt-4 border-t border-border/60">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="text-xs sm:text-sm text-muted-foreground">© 2026 {profile.name}. Bảo lưu mọi quyền.</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground">
                {profile.title} · {profile.location}
              </div>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 sm:p-3 rounded-lg border border-border/60 hover:border-muted-foreground/50 transition-all"
              aria-label="Chuyển giao diện"
            >
              {isDark ? (
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}
