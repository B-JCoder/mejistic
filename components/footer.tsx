"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send to your backend
      console.log("Newsletter subscription:", email)
      setIsSubscribed(true)
      setEmail("")
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+14162790292"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:gmbanquet@bellnet.ca"
  }

  return (
    <footer className="bg-black text-white border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/images/grand-majestic-logo.png"
                alt="Grand Majestic Banquet and Function Centre"
                width={200}
                height={67}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating unforgettable moments with luxury and elegance. Your premier destination for weddings, corporate
              events, and special celebrations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/grandmajesticbanquet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/grandmajesticbanquet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/grandmajestic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-gold font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-gold font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Weddings</li>
              <li className="text-gray-300 text-sm">Corporate Events</li>
              <li className="text-gray-300 text-sm">Birthday Parties</li>
              <li className="text-gray-300 text-sm">Bridal Showers</li>
              <li className="text-gray-300 text-sm">Baby Showers</li>
              <li className="text-gray-300 text-sm">Baptisms</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-gold font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">2648 Eglinton Ave East</p>
                  <p className="text-gray-300 text-sm">Greater Toronto Area</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-gold flex-shrink-0" size={16} />
                <button
                  onClick={handlePhoneCall}
                  className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm cursor-pointer"
                >
                  416-269-0292
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-gold flex-shrink-0" size={16} />
                <button
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm cursor-pointer"
                >
                  gmbanquet@bellnet.ca
                </button>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-gold mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Mon-Fri: 11:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sat-Sun: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-serif text-gold font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for event planning tips and special offers.
            </p>
            {isSubscribed ? (
              <div className="text-gold text-sm font-semibold">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gold/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gold text-black font-semibold rounded-md hover:bg-gold/90 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20 text-center flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Grand Majestic Banquet. All rights reserved.
          </p>
   
        </div>
      </div>
    </footer>
  )
}
