"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Briefcase, GraduationCap, Baby, Gift, Sparkles, Calendar, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  const handleServiceBooking = (serviceType: string) => {
    router.push(`/contact?service=${encodeURIComponent(serviceType)}`)
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+14162790292"
  }

  const services = [
    {
      title: "Weddings",
      description:
        "Create the wedding of your dreams in our elegant banquet halls with personalized service and attention to every detail.",
      icon: <Heart className="h-8 w-8" />,
      features: ["Bridal suite", "Dance floor", "Professional lighting", "Customizable decor", "Wedding coordination"],
      image: "/images/wedding-setup.png",
      popular: true,
    },
    {
      title: "Corporate Events",
      description:
        "Professional venues perfect for meetings, conferences, product launches, and corporate celebrations.",
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        "AV equipment",
        "Presentation setup",
        "Networking spaces",
        "Catering options",
        "Professional atmosphere",
      ],
      image: "/images/corporate-event.png",
      popular: true,
    },
    {
      title: "Birthday Celebrations",
      description: "Make milestone birthdays unforgettable with our festive spaces and celebration packages.",
      icon: <Gift className="h-8 w-8" />,
      features: [
        "Themed decorations",
        "Entertainment space",
        "Cake presentation",
        "Photo opportunities",
        "Party coordination",
      ],
      image: "/images/dance-floor.png",
    },
    {
      title: "Bridal Showers",
      description: "Intimate and elegant spaces perfect for celebrating the bride-to-be with friends and family.",
      icon: <Sparkles className="h-8 w-8" />,
      features: ["Intimate setting", "Brunch options", "Gift display area", "Photo backdrop", "Elegant ambiance"],
      image: "/images/reception-setup.png",
    },
    {
      title: "Baby Showers",
      description: "Celebrate new beginnings in our warm and welcoming spaces designed for memorable baby showers.",
      icon: <Baby className="h-8 w-8" />,
      features: [
        "Family-friendly setup",
        "Gift station",
        "Comfortable seating",
        "Themed decorations",
        "Catering options",
      ],
      image: "/images/reception-setup.png",
    },
    {
      title: "Baptisms & Religious Celebrations",
      description: "Honor sacred moments with our respectful and beautiful venues for religious celebrations.",
      icon: <Star className="h-8 w-8" />,
      features: [
        "Sacred atmosphere",
        "Family gathering space",
        "Traditional setup",
        "Ceremonial arrangements",
        "Reception area",
      ],
      image: "/images/hero-banquet-hall.png",
    },
    {
      title: "Proposals & Engagements",
      description: "Create the perfect romantic setting for life's most important question with our intimate spaces.",
      icon: <Heart className="h-8 w-8" />,
      features: [
        "Romantic ambiance",
        "Private setting",
        "Customizable decor",
        "Photography support",
        "Celebration space",
      ],
      image: "/images/wedding-setup.png",
    },
    {
      title: "Workshops & Training",
      description: "Professional learning environments equipped with modern amenities for educational events.",
      icon: <GraduationCap className="h-8 w-8" />,
      features: ["Training setup", "AV equipment", "Comfortable seating", "Break areas", "Professional environment"],
      image: "/images/corporate-event.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 gold-accent text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
            Complete Event Solutions
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-primary mb-4 sm:mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From intimate gatherings to grand celebrations, we provide exceptional venues and services for every
            occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 overflow-hidden relative"
              >
                {service.popular && (
                  <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 gold-accent text-xs sm:text-sm">
                    Popular
                  </Badge>
                )}

                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-primary bg-background/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                    {service.icon}
                  </div>
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Included Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleServiceBooking(service.title)}
                    className="w-full gold-accent group-hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
                  >
                    <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 sm:py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We go above and beyond to ensure your event is perfect in every detail
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Planning",
                description: "Professional event coordinators to handle every detail",
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
              },
              {
                title: "Flexible Packages",
                description: "Customizable options to fit your budget and vision",
                icon: <Gift className="h-6 w-6 sm:h-8 sm:w-8" />,
              },
              {
                title: "Premium Venues",
                description: "Elegant spaces with modern amenities and luxury finishes",
                icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
              },
              {
                title: "Full Service",
                description: "From setup to cleanup, we handle everything for you",
                icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty">
            Let us help you create an unforgettable experience. Contact us today for a personalized consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="gold-accent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book Consultation
              </Button>
            </Link>
            <Button
              onClick={handlePhoneCall}
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
            >
              Call 416-269-0292
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
