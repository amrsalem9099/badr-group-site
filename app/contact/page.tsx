"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للإجابة على استفساراتكم وتقديم أفضل الخدمات",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        message: "الرسالة",
        submit: "إرسال الرسالة",
      },
      contact: {
        title: "معلومات التواصل",
        phone: "+966 11 123 4567",
        email: "info@badrgroup.com",
        address: "الرياض، المملكة العربية السعودية",
      },
      map: {
        title: "موقعنا على الخريطة",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "We are here to answer your questions and provide the best services",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Message",
      },
      contact: {
        title: "Contact Information",
        phone: "+966 11 123 4567",
        email: "info@badrgroup.com",
        address: "Riyadh, Saudi Arabia",
      },
      map: {
        title: "Our Location",
      },
    },
  }

  return (
    <div
      className={`min-h-screen bg-gray-50 ${language === "ar" ? "font-cairo" : "font-inter"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              {content[language].title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">{content[language].subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-center">{content[language].form.submit}</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {content[language].form.name}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {content[language].form.email}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {content[language].form.phone}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {content[language].form.message}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 transition-colors resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold-600 hover:bg-gold-700 text-navy-900 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      {content[language].form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-700 text-navy-900 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-center">{content[language].contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-navy-900 text-white p-3 rounded-full">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{language === "ar" ? "الهاتف" : "Phone"}</h3>
                      <p className="text-gray-600">{content[language].contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-navy-900 text-white p-3 rounded-full">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </h3>
                      <p className="text-gray-600">{content[language].contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-navy-900 text-white p-3 rounded-full">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{language === "ar" ? "العنوان" : "Address"}</h3>
                      <p className="text-gray-600">{content[language].contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-t-lg">
                  <CardTitle className="text-xl font-bold text-center">{content[language].map.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
