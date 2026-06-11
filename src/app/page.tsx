"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  education,
  profile,
  projects,
  publications,
  skills,
  socialLinks,
  workExperience,
} from "@/data/resume"
import { BackgroundEffect } from "@/components/background-effect"

const sections = ["intro", "work", "projects", "education", "connect"]

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("intro")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-foreground relative isolate overflow-x-hidden">
      <BackgroundEffect activeSection={activeSection} />

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">RESUME / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Đỗ Quang
                  <br />
                  <span className="text-muted-foreground">Hợp</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{profile.summary}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {profile.title}
                  </div>
                  <div>{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">{profile.currentRole}</div>
                  <div className="text-muted-foreground">@ {profile.currentCompany}</div>
                  <div className="text-xs text-muted-foreground">{profile.currentPeriod}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Work Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2024 — Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-3">
                    <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.period}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed max-w-lg list-none">
                      {job.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-muted-foreground/50 shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group p-6 sm:p-8 border border-border/60 rounded-lg bg-background/40 backdrop-blur-sm hover:border-muted-foreground/50 hover:bg-background/55 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground font-mono">
                      <span>{project.period}</span>
                      <span>{project.role}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-muted-foreground/50 shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs text-muted-foreground border border-border rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <span>{project.url.replace("https://", "")}</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Education & Research</h2>

            <div className="space-y-8">
              <div className="p-6 sm:p-8 border border-border/60 rounded-lg bg-background/40 backdrop-blur-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{education.degree}</h3>
                    <div className="text-muted-foreground">{education.school}</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono shrink-0">
                    {education.period} · GPA {education.gpa}
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground leading-relaxed list-none">
                  {education.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-muted-foreground/50 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {publications.map((pub) => (
                <div key={pub.title} className="p-6 sm:p-8 border border-border/60 rounded-lg bg-background/40 backdrop-blur-sm space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground font-mono">{pub.date}</div>
                    <h3 className="text-base sm:text-lg font-medium leading-snug">{pub.title}</h3>
                    <div className="text-sm text-muted-foreground">{pub.authors}</div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
                    {pub.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-muted-foreground/50 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Luôn sẵn sàng trao đổi về AI systems, LLM applications và các cơ hội hợp tác mới.
                </p>

                <div className="space-y-4">
                  <Link
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">{profile.email}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="text-muted-foreground">{profile.phone}</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-4 border border-border/60 rounded-lg bg-background/30 backdrop-blur-sm hover:border-muted-foreground/50 hover:bg-background/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 {profile.name}. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">{profile.title} · {profile.location}</div>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/90 via-background/50 to-transparent pointer-events-none z-10" />
    </div>
  )
}
