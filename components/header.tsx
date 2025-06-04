"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  language: "ar" | "en"
  setLanguage: (lang: "ar" | "en") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const content = {
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      companies: "شركاتنا",
      contact: "اتصل بنا",
    },
    en: {
      home: "Home",
      about: "About",
      companies: "Companies",
      contact: "Contact",
    },
  }

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "#about" },
    { key: "companies", href: "#companies" },
    { key: "contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-900 to-navy-700 rounded-lg flex items-center justify-center">
              <span className="text-gold-400 font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-navy-900">
              {language === "ar" ? "مجموعة البدر" : "Al-Badr Group"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center justify-end ${language === "ar" ? "space-x-reverse space-x-4" : "space-x-8"}`}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group`}
              >
                {content[language][item.key as keyof (typeof content)[typeof language]]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              variant="outline"
              size="sm"
              className="border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
            >
              <Globe size={16} className="mr-1" />
              {language === "ar" ? "EN" : "عر"}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gold-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gold-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {content[language][item.key as keyof (typeof content)[typeof language]]}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  )
}
