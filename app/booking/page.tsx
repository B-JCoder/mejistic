"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"
import { useState } from "react"

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Event Details
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    duration: "",

    // Step 2: Services
    services: [] as string[],
    cateringStyle: "",
    menuPreference: "",
    specialRequirements: "",

    // Step 3: Contact & Budget
    name: "",
    email: "",
    phone: "",
    budget: "",
    hearAboutUs: "",
    additionalNotes: "",
  })

  const totalSteps = 3

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    const currentServices = formData.services
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service]
    handleInputChange("services", updatedServices)
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    setIsSubmitted(true)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.eventType && formData.eventDate && formData.guestCount
      case 2:
        return formData.services.length > 0
      case 3:
        return formData.name && formData.email && formData.phone
      default:
        return false
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold gold-gradient-text mb-4">Booking Request Submitted!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for choosing Grand Majestic. Our event planning team will contact you within 24 hours to discuss
              your event details and provide a customized quote.
            </p>
            <div className="space-y-4">
              <Button className="gold-accent" onClick={() => (window.location.href = "tel:+14162690292")}>
                <Phone className="mr-2 h-4 w-4" />
                Call Us: 416-269-0292
              </Button>
              <p className="text-sm text-muted-foreground">
                For immediate assistance or urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">Book Your Perfect Event</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you create an unforgettable experience with our comprehensive event planning service.
          </p>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                    step <= currentStep ? "bg-primary text-background" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 transition-colors duration-200 ${
                      step < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}:{" "}
            {currentStep === 1 ? "Event Details" : currentStep === 2 ? "Services & Preferences" : "Contact & Budget"}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl gold-gradient-text-static">
                {currentStep === 1 && "Tell Us About Your Event"}
                {currentStep === 2 && "Select Your Services"}
                {currentStep === 3 && "Contact Information & Budget"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type *</Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) => handleInputChange("eventType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Reception</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="birthday">Birthday Celebration</SelectItem>
                            <SelectItem value="anniversary">Anniversary Party</SelectItem>
                            <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                            <SelectItem value="baby-shower">Baby Shower</SelectItem>
                            <SelectItem value="baptism">Baptism/Christening</SelectItem>
                            <SelectItem value="graduation">Graduation Party</SelectItem>
                            <SelectItem value="other">Other Special Event</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guestCount">Expected Guest Count *</Label>
                        <Select
                          value={formData.guestCount}
                          onValueChange={(value) => handleInputChange("guestCount", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25-50">25-50 guests</SelectItem>
                            <SelectItem value="51-100">51-100 guests</SelectItem>
                            <SelectItem value="101-150">101-150 guests</SelectItem>
                            <SelectItem value="151-200">151-200 guests</SelectItem>
                            <SelectItem value="201-250">201-250 guests</SelectItem>
                            <SelectItem value="251-300">251-300 guests</SelectItem>
                            <SelectItem value="300+">300+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Preferred Event Date *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange("eventDate", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventTime">Preferred Start Time</Label>
                        <Select
                          value={formData.eventTime}
                          onValueChange={(value) => handleInputChange("eventTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (11:00 AM - 2:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (3:00 PM - 5:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Event Duration</Label>
                      <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How long will your event last?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-3">2-3 hours</SelectItem>
                          <SelectItem value="4-5">4-5 hours</SelectItem>
                          <SelectItem value="6-7">6-7 hours</SelectItem>
                          <SelectItem value="8+">8+ hours</SelectItem>
                          <SelectItem value="multiple-days">Multiple days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Services */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Select Services (Choose all that apply) *</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Full Catering Service",
                          "Bar Service",
                          "DJ & Entertainment",
                          "Photography",
                          "Videography",
                          "Floral Arrangements",
                          "Event Decoration",
                          "Wedding Cake",
                          "Bridal Suite Access",
                          "Valet Parking",
                          "Security Service",
                          "Event Coordination",
                        ].map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={() => handleServiceToggle(service)}
                            />
                            <Label htmlFor={service} className="text-sm cursor-pointer">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cateringStyle">Catering Style</Label>
                        <Select
                          value={formData.cateringStyle}
                          onValueChange={(value) => handleInputChange("cateringStyle", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select catering style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plated">Plated Dinner Service</SelectItem>
                            <SelectItem value="buffet">Buffet Style</SelectItem>
                            <SelectItem value="family-style">Family Style</SelectItem>
                            <SelectItem value="cocktail">Cocktail Reception</SelectItem>
                            <SelectItem value="mixed">Mixed Service</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="menuPreference">Menu Preference</Label>
                        <Select
                          value={formData.menuPreference}
                          onValueChange={(value) => handleInputChange("menuPreference", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select menu type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="traditional">Traditional</SelectItem>
                            <SelectItem value="contemporary">Contemporary</SelectItem>
                            <SelectItem value="ethnic">Ethnic Cuisine</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="mixed">Mixed Options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements or Dietary Restrictions</Label>
                      <Textarea
                        id="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                        placeholder="Please describe any special dietary needs, accessibility requirements, or other special requests..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Budget */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="20k-35k">$20,000 - $35,000</SelectItem>
                            <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                            <SelectItem value="50k+">$50,000+</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Select
                          value={formData.hearAboutUs}
                          onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="referral">Friend/Family Referral</SelectItem>
                            <SelectItem value="wedding-show">Wedding Show</SelectItem>
                            <SelectItem value="vendor">Wedding Vendor</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        placeholder="Tell us more about your vision, any specific requests, or questions you have..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                  <div>
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={handlePrevious}>
                        Previous
                      </Button>
                    )}
                  </div>

                  <div>
                    {currentStep < totalSteps ? (
                      <Button type="button" onClick={handleNext} disabled={!isStepValid()} className="gold-accent">
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={!isStepValid()} className="gold-accent">
                        Submit Booking Request
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
