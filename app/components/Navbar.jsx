"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) return

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
  }, [isHomePage])

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (!element) return
    
    const navbarHeight = 80 // Approximate navbar height
    const targetPosition = element.offsetTop - navbarHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })

    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hidden md:block text-xl font-bold text-teal-400">
          Yu Xin Cheng
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-teal-400 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-teal-300 ${
                    activeSection === section && isHomePage ? "text-teal-400" : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded-xl hover:bg-teal-500 hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-gray-800 bg-opacity-95 backdrop-filter backdrop-blur-lg flex-col items-center py-4 space-y-4`}>
          <ul className="flex flex-col items-center space-y-4">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-teal-300 ${
                    activeSection === section && isHomePage ? "text-teal-400" : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/Resume.pdf"
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
};

