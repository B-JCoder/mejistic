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
  const [formData, setFormData] = useState({
    // Step 1
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    duration: "",
    // Step 2
    services: [] as string[],
    cateringStyle: "",
    menuPreference: "",
    specialRequirements: "",
    // Step 3
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
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleNext = () => currentStep < totalSteps && setCurrentStep((s) => s + 1)
  const handlePrevious = () => currentStep > 1 && setCurrentStep((s) => s - 1)

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">Book Your Perfect Event</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you create an unforgettable experience with our comprehensive event planning service.
          </p>

          {/* Progress */}
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

      {/* Form */}
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
              <form
                action="https://formsubmit.co/bilalcodes777@gmail.com"
                method="POST"
              >
                {/* Required for FormSubmit */}
                <input type="hidden" name="_subject" value="New Booking Request - Grand Majestic" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://mejistic.vercel.app/thank-you" />

                {/* Map formData */}
                <input type="hidden" name="Event Type" value={formData.eventType} />
                <input type="hidden" name="Guest Count" value={formData.guestCount} />
                <input type="hidden" name="Event Date" value={formData.eventDate} />
                <input type="hidden" name="Event Time" value={formData.eventTime} />
                <input type="hidden" name="Event Duration" value={formData.duration} />
                <input type="hidden" name="Services" value={formData.services.join(", ")} />
                <input type="hidden" name="Catering Style" value={formData.cateringStyle} />
                <input type="hidden" name="Menu Preference" value={formData.menuPreference} />
                <input type="hidden" name="Special Requirements" value={formData.specialRequirements} />
                <input type="hidden" name="Full Name" value={formData.name} />
                <input type="hidden" name="Email" value={formData.email} />
                <input type="hidden" name="Phone" value={formData.phone} />
                <input type="hidden" name="Budget" value={formData.budget} />
                <input type="hidden" name="How Did You Hear About Us" value={formData.hearAboutUs} />
                <input type="hidden" name="Additional Notes" value={formData.additionalNotes} />

                {/* --- Step 1 --- */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    {/* Event type & guest count */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Event Type *</Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(v) => handleInputChange("eventType", v)}
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
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Expected Guest Count *</Label>
                        <Select
                          value={formData.guestCount}
                          onValueChange={(v) => handleInputChange("guestCount", v)}
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

                    {/* Date & time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Preferred Event Date *</Label>
                        <Input
                          type="date"
                          value={formData.eventDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Start Time</Label>
                        <Select
                          value={formData.eventTime}
                          onValueChange={(v) => handleInputChange("eventTime", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (11 AM - 2 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (3 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (6 PM - 9 PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label>Event Duration</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(v) => handleInputChange("duration", v)}
                      >
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

                {/* --- Step 2 --- */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {/* Services */}
                    <div className="space-y-4">
                      <Label>Select Services *</Label>
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

                    {/* Catering & menu */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Catering Style</Label>
                        <Select
                          value={formData.cateringStyle}
                          onValueChange={(v) => handleInputChange("cateringStyle", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select catering style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plated">Plated Dinner</SelectItem>
                            <SelectItem value="buffet">Buffet Style</SelectItem>
                            <SelectItem value="family-style">Family Style</SelectItem>
                            <SelectItem value="cocktail">Cocktail Reception</SelectItem>
                            <SelectItem value="mixed">Mixed Service</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Menu Preference</Label>
                        <Select
                          value={formData.menuPreference}
                          onValueChange={(v) => handleInputChange("menuPreference", v)}
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

                    {/* Special requirements */}
                    <div className="space-y-2">
                      <Label>Special Requirements</Label>
                      <Textarea
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                        placeholder="Dietary needs, accessibility requests, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* --- Step 3 --- */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number *</Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Estimated Budget</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(v) => handleInputChange("budget", v)}
                        >
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
                        <Label>How did you hear about us?</Label>
                        <Select
                          value={formData.hearAboutUs}
                          onValueChange={(v) => handleInputChange("hearAboutUs", v)}
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
                      <Label>Additional Notes</Label>
                      <Textarea
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        placeholder="Tell us more about your vision or requests..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                )}

                {/* Nav buttons */}
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
                      <Button type="button" onClick={handleNext} disabled={!isStepValid()}
 className="gold-accent">
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
