"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

interface FooterProps {
  language: "ar" | "en"
}

export default function Footer({ language }: FooterProps) {
  const content = {
    ar: {
      company: "مجموعة بدر",
      description: "مجموعة شركات رائدة تعمل في مختلف القطاعات الاقتصادية",
      quickLinks: "روابط سريعة",
      contact: "معلومات التواصل",
      social: "تابعنا",
      rights: "جميع الحقوق محفوظة",
      links: {
        home: "الرئيسية",
        about: "من نحن",
        companies: "شركاتنا",
        contact: "اتصل بنا",
      },
    },
    en: {
      company: "Badr Group",
      description: "A leading group of companies operating in various economic sectors",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      social: "Follow Us",
      rights: "All Rights Reserved",
      links: {
        home: "Home",
        about: "About",
        companies: "Companies",
        contact: "Contact",
      },
    },
  }

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">{content[language].company}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{content[language].description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              {Object.entries(content[language].links).map(([key, label]) => (
                <li key={key}>
                  <Link
                    href={key === "contact" ? "/contact" : key === "home" ? "/" : `#${key}`}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">{content[language].contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-gray-300">+966 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-gray-300">info@badrgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-gray-300">{language === "ar" ? "الرياض، السعودية" : "Riyadh, Saudi Arabia"}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">{content[language].social}</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {content[language].company}. {content[language].rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
