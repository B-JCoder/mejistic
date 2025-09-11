"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, eventType: serviceParam.toLowerCase() }))
    }
  }, [searchParams])

  const handlePhoneCall = () => {
    window.location.href = "tel:+14162790292"
  }

  const handleSiteVisit = () => {
    // You could integrate with a calendar booking system here
    window.location.href = "tel:+14162790292"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 gold-accent text-lg px-4 py-2">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold gold-gradient-text mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            Ready to plan your perfect event? We're here to help make your vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Start Detailed Booking
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40 bg-transparent"
              onClick={handlePhoneCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl gold-gradient-text-static">Quick Inquiry</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your inquiry has been submitted. We'll contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="bg-input border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-input border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="bg-input border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type *</Label>
                          <Select
                            value={formData.eventType}
                            onValueChange={(value) => handleInputChange("eventType", value)}
                          >
                            <SelectTrigger className="bg-input border-border focus:border-primary">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="birthday">Birthday Party</SelectItem>
                              <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                              <SelectItem value="baby-shower">Baby Shower</SelectItem>
                              <SelectItem value="baptism">Baptism</SelectItem>
                              <SelectItem value="proposal">Proposal</SelectItem>
                              <SelectItem value="workshop">Workshop</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Preferred Event Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => handleInputChange("eventDate", e.target.value)}
                            className="bg-input border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guestCount">Expected Guest Count</Label>
                          <Select
                            value={formData.guestCount}
                            onValueChange={(value) => handleInputChange("guestCount", value)}
                          >
                            <SelectTrigger className="bg-input border-border focus:border-primary">
                              <SelectValue placeholder="Select guest count" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-25">1-25 guests</SelectItem>
                              <SelectItem value="26-50">26-50 guests</SelectItem>
                              <SelectItem value="51-100">51-100 guests</SelectItem>
                              <SelectItem value="101-200">101-200 guests</SelectItem>
                              <SelectItem value="201-300">201-300 guests</SelectItem>
                              <SelectItem value="300+">300+ guests</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message / Special Requirements</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your vision, special requirements, or any questions you have..."
                          className="bg-input border-border focus:border-primary min-h-[120px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gold-accent text-lg py-4 hover:scale-105 transition-transform duration-200"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Inquiry
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl gold-gradient-text-static">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">416-269-0292</p>
                      <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">gmbanquet@bellnet.ca</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">2648 Eglinton Ave East</p>
                      <p className="text-muted-foreground">Greater Toronto Area</p>
                      <p className="text-sm text-muted-foreground">Ample parking available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 12:00 PM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl gold-gradient-text-static">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For urgent inquiries or last-minute bookings, don't hesitate to call us directly.
                  </p>
                  <div className="space-y-3">
                    <Button
                      onClick={handlePhoneCall}
                      className="w-full gold-accent hover:scale-105 transition-transform duration-200"
                      size="lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 416-269-0292
                    </Button>
                    <Button
                      onClick={handleSiteVisit}
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 bg-transparent"
                      size="lg"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-border/50">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">2648 Eglinton Ave East, GTA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
