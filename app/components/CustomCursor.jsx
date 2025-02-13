"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouchDevice()

    const updateCursorPosition = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    if (!isTouchDevice) {
      window.addEventListener("mousemove", updateCursorPosition)
      return () => window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <div
      className="custom-cursor hidden md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
};