import "./globals.css"
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Yu Xin Cheng",
  description: "A showcase of my work and skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen dot-pattern`}>
        <CustomCursor />
        <Navbar />
        <main className="container mx-auto px-4 py-8 rounded-xl">{children}</main>
      </body>
    </html>
  )
}

