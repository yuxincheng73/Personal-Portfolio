"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const navbarHeight = 80 // Approximate navbar height
    const targetPosition = element.offsetTop - navbarHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <nav className="bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => scrollToSection("home")} className="text-xl font-bold text-teal-400">
          Yu Xin Cheng
        </button>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-teal-300 ${
                    activeSection === section ? "text-teal-400" : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded-xl hover:bg-teal-500 hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

