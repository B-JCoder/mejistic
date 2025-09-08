"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Sparkles, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const packages = [
    {
      name: "Essential",
      price: "Starting at $45",
      priceDetail: "per person",
      description: "Perfect for intimate gatherings and corporate events",
      icon: Star,
      features: [
        "Venue rental (4 hours)",
        "Basic table settings",
        "Standard linens",
        "Basic lighting",
        "Sound system",
        "Complimentary parking",
        "Event coordinator",
        "Setup and cleanup",
      ],
      popular: false,
      color: "border-border/50",
    },
    {
      name: "Premium",
      price: "Starting at $75",
      priceDetail: "per person",
      description: "Our most popular choice for weddings and celebrations",
      icon: Crown,
      features: [
        "Venue rental (6 hours)",
        "Premium table settings",
        "Designer linens",
        "Enhanced lighting package",
        "Professional sound system",
        "Complimentary parking",
        "Dedicated event coordinator",
        "Bridal suite access",
        "Setup and cleanup",
        "Basic floral centerpieces",
        "Welcome cocktail hour",
        "Dance floor",
      ],
      popular: true,
      color: "border-primary/50 ring-2 ring-primary/20",
    },
    {
      name: "Luxury",
      price: "Starting at $120",
      priceDetail: "per person",
      description: "The ultimate experience for your most special occasions",
      icon: Sparkles,
      features: [
        "Venue rental (8 hours)",
        "Luxury table settings",
        "Premium designer linens",
        "Full lighting design",
        "Premium sound & AV system",
        "Valet parking service",
        "Personal event manager",
        "Bridal suite & groom's room",
        "Full setup and cleanup",
        "Luxury floral arrangements",
        "Extended cocktail reception",
        "LED dance floor",
        "Champagne toast",
        "Late night snack service",
        "Photography coordination",
      ],
      popular: false,
      color: "border-border/50",
    },
  ]

  const addOns = [
    { service: "Professional Photography", price: "$800 - $2,500" },
    { service: "Videography Package", price: "$1,200 - $3,000" },
    { service: "DJ & Entertainment", price: "$600 - $1,500" },
    { service: "Live Band", price: "$1,500 - $4,000" },
    { service: "Floral Design", price: "$500 - $2,000" },
    { service: "Wedding Cake", price: "$300 - $800" },
    { service: "Bar Service", price: "$15 - $35 per person" },
    { service: "Additional Hour", price: "$200 per hour" },
    { service: "Valet Parking", price: "$8 per car" },
    { service: "Coat Check", price: "$3 per person" },
  ]

  const cateringOptions = [
    {
      style: "Plated Dinner",
      description: "Elegant three-course served dinner",
      price: "$35 - $65 per person",
    },
    {
      style: "Buffet Service",
      description: "Variety of dishes with professional service",
      price: "$28 - $45 per person",
    },
    {
      style: "Cocktail Reception",
      description: "Passed hors d'oeuvres and stationed appetizers",
      price: "$25 - $40 per person",
    },
    {
      style: "Family Style",
      description: "Shared platters served at each table",
      price: "$30 - $50 per person",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">Event Packages & Pricing</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for unforgettable events. Choose the perfect package for your celebration, with flexible
            options to match your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40 bg-transparent"
              onClick={() => (window.location.href = "tel:+14162790292")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Discuss Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Event Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All-inclusive packages designed to make your event planning effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.color} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gold-accent text-background px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                    <pkg.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl gold-gradient-text-static">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground">
                    {pkg.price} {pkg.priceDetail}
                  </div>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking">
                    <Button
                      className={`w-full ${pkg.popular ? "gold-accent" : "bg-transparent border border-primary/20 hover:bg-primary/10"} hover:scale-105 transition-transform duration-200`}
                    >
                      Select Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Catering Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible dining options to complement your event package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringOptions.map((option, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg gold-gradient-text-static">{option.style}</CardTitle>
                  <div className="text-xl font-bold text-primary">{option.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your event with our professional add-on services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-foreground">{addon.service}</h3>
                  </div>
                  <div className="text-primary font-semibold">{addon.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gold-gradient-text">Important Pricing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What's Included</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All prices include setup and cleanup</li>
                    <li>• Professional event coordination</li>
                    <li>• Basic tables, chairs, and linens</li>
                    <li>• Complimentary parking for guests</li>
                    <li>• Standard sound system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Additional Information</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prices subject to change based on date and availability</li>
                    <li>• 25% deposit required to secure booking</li>
                    <li>• Final payment due 30 days before event</li>
                    <li>• Gratuity and taxes not included</li>
                    <li>• Custom packages available upon request</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-border/50">
                <p className="text-muted-foreground mb-4">
                  All pricing is customizable based on your specific needs and guest count.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking">
                    <Button className="gold-accent hover:scale-105 transition-transform duration-200">
                      Request Custom Quote
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:border-primary/40 bg-transparent"
                    onClick={() => (window.location.href = "tel:+14162790292")}
                  >
                    Call for Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
