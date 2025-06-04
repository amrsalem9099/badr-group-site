"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Image paths for easy management
const images = {
  hero: {
    backgroundPattern: "/images/hero-background-pattern.jpg",
    heroMainImage: "/images/hero-main-building.jpg",
  },
  founder: {
    founderPhoto: "/images/founder-abdulrahman-badr.jpg",
    founderBackgroundPattern: "/images/founder-section-bg.jpg",
  },
  companies: {
    realEstate: {
      logo: "/images/logos/badr-real-estate-logo.png",
      coverImage: "/images/companies/real-estate-projects.jpg",
      galleryImage1: "/images/companies/real-estate-building1.jpg",
      galleryImage2: "/images/companies/real-estate-building2.jpg",
    },
    investment: {
      logo: "/images/logos/badr-investment-logo.png",
      coverImage: "/images/companies/investment-portfolio.jpg",
      galleryImage1: "/images/companies/investment-meeting.jpg",
      galleryImage2: "/images/companies/investment-charts.jpg",
    },
    clothing: {
      logo: "/images/logos/badr-clothing-logo.png",
      coverImage: "/images/companies/clothing-store.jpg",
      galleryImage1: "/images/companies/clothing-collection1.jpg",
      galleryImage2: "/images/companies/clothing-collection2.jpg",
    },
    technology: {
      logo: "/images/logos/badr-technology-logo.png",
      coverImage: "/images/companies/technology-office.jpg",
      galleryImage1: "/images/companies/technology-team.jpg",
      galleryImage2: "/images/companies/technology-solutions.jpg",
    },
  },
  general: {
    companyMainLogo: "/images/logos/badr-group-main-logo.png",
    aboutUsImage: "/images/about-us-team.jpg",
    officeBuilding: "/images/office-building-cairo.jpg",
  },
}

// صور الموقع - يمكن تغييرها بسهولة
const websiteImages = {
  // صورة المؤسس
  founderPhoto: "/placeholder.svg?height=400&width=400",

  // صور الشركات
  realEstateCompanyImage: "/REALESTAT.jpg?height=300&width=400",
  investmentCompanyImage: "/placeholder.svg?height=300&width=400",
  clothingCompanyImage: "/placeholder.svg?height=300&width=400",
  technologyCompanyImage: "/falconTEAM.jpg?height=300&width=400",

  // شعار المجموعة الرئيسي (يمكن أن يكون صورة بدلاً من حرف B)
  mainLogo: null , // ضع مسار الصورة هنا إذا كنت تريد استبدال حرف B بصورة
}

const companies = [
  {
    id: 1,
    name: { ar: "البدر للتطوير العقاري", en: "Badr Real Estate Development" },
    field: { ar: "التطوير العقاري", en: "Real Estate Development" },
    description: {
      ar: "شركة رائدة في تطوير المشاريع العقارية السكنية والتجارية",
      en: "Leading company in residential and commercial real estate development",
    },
    image: websiteImages.realEstateCompanyImage,
  },
  {
    id: 2,
    name: { ar: "البدر للاستثمار", en: "Badr Investment" },
    field: { ar: "الاستثمار المالي", en: "Financial Investment" },
    description: {
      ar: "إدارة محافظ استثمارية متنوعة وحلول مالية مبتكرة",
      en: "Managing diverse investment portfolios and innovative financial solutions",
    },
    image: websiteImages.investmentCompanyImage,
  },
  {
    id: 3,
    name: { ar: "البدر لتجارة الملابس", en: "Al-Badr Clothing Trade" },
    field: { ar: "تجارة الملابس", en: "Clothing Trade" },
    description: {
      ar: "تجارة الملابس والأزياء العصرية",
      en: "Import and export of clothing and modern fashion",
    },
    image: websiteImages.clothingCompanyImage,
  },
{
  id: 4,
  name: { ar: "فالكون تيم", en: "Falcon Team" },
  field: { ar: "الحلول البرمجية", en: "Software Solutions" },
  description: {
    ar: "فريق متخصص في تطوير الحلول البرمجية المبتكرة والمخصصة لتلبية احتياجات مختلف المجالات",
    en: "A specialized team in developing innovative and custom software solutions tailored to diverse industries",
  },  // << هنا الفاصلة مفقودة

  image: websiteImages.technologyCompanyImage,
},
]

export default function HomePage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length)
  }

  const content = {
    ar: {
      hero: {
        title: "مجموعة البدر",
        subtitle: "رؤية طموحة.. إنجازات متميزة",
        description: "مجموعة شركات رائدة تعمل في مختلف القطاعات الاقتصادية بهدف تحقيق التنمية المستدامة والابتكار",
        cta: "اكتشف المزيد",
      },
      founder: {
        title: "كلمة المؤسس",
        name: "عبد الرحمن البدر",
        position: "المؤسس والرئيس التنفيذي",
        message:
          "بدأت رحلتنا برؤية واضحة لبناء مجموعة شركات متكاملة تساهم في التنمية الاقتصادية وتقديم حلول مبتكرة. اليوم، نفخر بما حققناه من إنجازات ونتطلع لمستقبل أكثر إشراقاً.",
      },
      companies: {
        title: "شركاتنا",
        subtitle: "مجموعة متنوعة من الشركات الرائدة",
      },
      stats: {
        projects: { number: "50+", label: "مشروع منجز" },
        clients: { number: "200+", label: "عميل راضي" },
        experience: { number: "15+", label: "سنة خبرة" },
        countries: { number: "5+", label: "دول نعمل بها" },
      },
    },
    en: {
      hero: {
        title: "AL-Badr Group",
        subtitle: "Ambitious Vision.. Distinguished Achievements",
        description:
          "A leading group of companies operating in various economic sectors aiming to achieve sustainable development and innovation",
        cta: "Discover More",
      },
      founder: {
        title: "Founder's Message",
        name: "Abdul Rahman Badr",
        position: "Founder & CEO",
        message:
          "We started our journey with a clear vision to build an integrated group of companies that contribute to economic development and provide innovative solutions. Today, we are proud of our achievements and look forward to a brighter future.",
      },
      companies: {
        title: "Our Companies",
        subtitle: "A diverse group of leading companies",
      },
      stats: {
        projects: { number: "50+", label: "Completed Projects" },
        clients: { number: "200+", label: "Satisfied Clients" },
        experience: { number: "15+", label: "Years Experience" },
        countries: { number: "5+", label: "Countries We Serve" },
      },
    },
  }

  return (
    <div
      className={`min-h-screen bg-white ${language === "ar" ? "font-cairo" : "font-inter"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Header language={language} setLanguage={setLanguage} contact="+2011023614112" location="القاهرة" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0.1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0.1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 relative z-20"
          >
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {content[language].hero.title}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0.1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 text-gold-300"
          >
            {content[language].hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            {content[language].hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0.1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button className="bg-gold-600 hover:bg-gold-700 text-navy-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              {content[language].hero.cta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(content[language].stats).map(([key, stat], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0.1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0.1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">{content[language].founder.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-right">
                <img
                  src={websiteImages.founderPhoto || "/placeholder.svg"}
                  alt={content[language].founder.name}
                  className="w-80 h-80 rounded-full mx-auto md:mx-0 object-cover border-4 border-gold-400 shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{content[language].founder.name}</h3>
                  <p className="text-gold-600 font-semibold text-lg">{content[language].founder.position}</p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">{content[language].founder.message}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0.1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">{content[language].companies.title}</h2>
            <p className="text-xl text-gray-600">{content[language].companies.subtitle}</p>
          </motion.div>

          {/* Companies Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${language === "ar" ? currentSlide * 100 : -currentSlide * 100}%)` }}
              >
                {companies.map((company, index) => (
                  <div key={company.id} className="w-full flex-shrink-0">
                    <Card className="mx-4 overflow-hidden shadow-xl border-0 bg-white">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={company.image || "/placeholder.svg"}
                            alt={company.name[language]}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                        </div>

                        <CardContent className="p-8 flex flex-col justify-center">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-navy-900 mb-2">{company.name[language]}</h3>
                            <p className="text-gold-600 font-semibold">{company.field[language]}</p>
                          </div>

                          <p className="text-gray-700 leading-relaxed">{company.description[language]}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 -translate-y-1/2 ${language === "ar" ? "right-4" : "left-4"} bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
            >
              {language === "ar" ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>

            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -translate-y-1/2 ${language === "ar" ? "left-4" : "right-4"} bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
            >
              {language === "ar" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-gold-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} contact="+2011023614112" location="القاهرة" />
    </div>
  )
}
