"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Sparkles,
  Award,
  Clock,
  Shield,
  Heart,
  Quote,
  ArrowDown,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import ImageWithFallback from "@/components/image-with-fallback"
import { CardSkeleton, StatSkeleton, TestimonialSkeleton } from "@/components/loading-skeleton"
import Images from "next/image"
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoaded(true)

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+14162790292"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:gmbanquet@bellnet.ca"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
       <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
   <div className="absolute inset-0 z-0">
    <img
      src="https://i.pinimg.com/1200x/f1/1a/76/f11a7623f97d7748e47da44483a0dd00.jpg"
      alt="Grand Majestic Banquet Hall"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Spotlight overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,128,31,0.45)_0%,rgba(0,0,0,0.9)_80%)] mix-blend-screen"></div>
  </div>

  {/* Hero Content (Logo Center) */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    <div className="relative inline-block">
      <Images
        src="/images/grand-majestic-logo.png"
        alt="Grand Majestic Logo"
        width={380}
        height={160}
        className="mx-auto animate-slide-up 
                   drop-shadow-[0_0_15px_#000] 
                   drop-shadow-[0_0_35px_#A8801F] 
                   drop-shadow-[0_0_70px_#A8801F]"
      />
    </div>
  



<Badge className="text-3xl gold-accent sm:text-base md:text-2xl px-4 sm:px-6 py-1.9 sm:py-1 animate-fade-in">
      Banquet and Convention Centre
    </Badge>
    {/* Subtitle */}

    {/* Description */}
    <p className="text-xs sm:text-sm md:text-base text-primary max-w-2xl mx-auto animate-slide-up animation-delay-400 leading-snug">
      Where your most precious moments become unforgettable memories. Elegant venues for weddings, corporate
      events, and celebrations.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center animate-slide-up animation-delay-600">
      <Link href="/contact">
        <Button
          size="lg"
          className="gold-accent text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 hover:scale-105 transition-transform duration-200"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Your Event
        </Button>
      </Link>
      <Button
        size="lg"
        variant="outline"
        onClick={scrollToGallery}
        className="text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-200"
      >
        View Gallery
      </Button>
    </div>
  </div>
</section>


        {/* Stats Section */}
     <section
  className="py-16 px-4 bg-card/50 text-center relative overflow-hidden"
  aria-label="Company statistics and achievements"
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold gold-gradient-text mb-4">
      Coming Soon
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
      Exciting milestones and achievements will be revealed soon. Stay tuned!
    </p>
  </div>
</section>


        {/* Services Overview */}
        <section className="py-16 sm:py-20 px-4" data-animate id="services-section" aria-label="Our event services">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-12 sm:mb-16 ${visibleSections.has("services-section") ? "animate-slide-up" : "opacity-0"}`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">
                Exceptional Events
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                From intimate gatherings to grand celebrations, we create the perfect atmosphere for every occasion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {isLoading
                ? [...Array(3)].map((_, index) => <CardSkeleton key={index} />)
                : [
                    {
                      title: "Weddings",
                      description:
                        "Make your special day unforgettable with our elegant banquet halls and personalized service",
                      icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
                      image: "/images/wedding-setup.png",
                      alt: "Elegant wedding setup with white floral backdrop and gold throne chairs",
                    },
                    {
                      title: "Corporate Events",
                      description: "Professional venues for meetings, conferences, and corporate celebrations",
                      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                      image: "/images/corporate-event.png",
                      alt: "Corporate event setup with professional staging and blue branding",
                    },
                    {
                      title: "Private Parties",
                      description: "Birthdays, anniversaries, and special celebrations in luxurious settings",
                      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />,
                      image: "/images/dance-floor.png",
                      alt: "Modern banquet hall with blue ceiling lighting and white dance floor",
                    },
                  ].map((service, index) => (
                    <Card
                      key={index}
                      className={`group hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift hover-glow ${visibleSections.has("services-section") ? `animate-slide-up animation-delay-${(index + 1) * 200}` : "opacity-0"}`}
                    >
                      <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
                        <ImageWithFallback
                          src={service.image || "/placeholder.svg"}
                          alt={service.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          width={400}
                          height={300}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                        <div className="absolute top-4 left-4 text-primary glass-effect rounded-full p-2 sm:p-3">
                          {service.icon}
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold gold-gradient-text-static mb-2 sm:mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 sm:py-20 px-4 bg-card" data-animate id="amenities-section">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-12 sm:mb-16 ${visibleSections.has("amenities-section") ? "animate-slide-up" : "opacity-0"}`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">
                Premium Amenities
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Every detail carefully crafted to ensure your event is flawless
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Crystal Chandeliers",
                  description: "Stunning crystal lighting creates an elegant ambiance",
                  icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  title: "Professional Sound System",
                  description: "State-of-the-art audio equipment for speeches and music",
                  icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  title: "Spacious Dance Floor",
                  description: "Polished floors perfect for dancing and entertainment",
                  icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  title: "Bridal Suite",
                  description: "Private preparation room for the bride and bridal party",
                  icon: <Star className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  title: "Ample Parking",
                  description: "Convenient parking for all your guests",
                  icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  title: "Climate Control",
                  description: "Perfect temperature control for year-round comfort",
                  icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
              ].map((amenity, index) => (
             <div
  key={index}
  className={`flex items-start space-x-4 p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 group hover-glow ${
    visibleSections.has("amenities-section")
      ? `animate-slide-in-left animation-delay-${(index + 1) * 100}`
      : "opacity-0"
  }`}
>
  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 shadow-inner">
    <div className="text-primary">{amenity.icon}</div>
  </div>
  <div>
    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
      {amenity.title}
    </h3>
    <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
      {amenity.description}
    </p>
  </div>
</div>

              ))}
            </div>
          </div>
        </section>

        {/* What Our Clients Say */}
        <section className="py-20 px-4" aria-label="Client testimonials">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Don't just take our word for it - hear from couples and event planners who chose Grand Majestic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading
                ? [...Array(3)].map((_, index) => <TestimonialSkeleton key={index} />)
                : [
                    {
                      name: "Sarah & Michael",
                      event: "Wedding Reception",
                      rating: 5,
                      text: "Grand Majestic made our wedding day absolutely perfect. The staff was incredible, the venue was stunning, and every detail was handled with care.",
                    },
                    {
                      name: "Corporate Solutions Inc.",
                      event: "Annual Conference",
                      rating: 5,
                      text: "Professional service, excellent facilities, and seamless execution. Our conference was a huge success thanks to the Grand Majestic team.",
                    },
                    {
                      name: "The Johnson Family",
                      event: "50th Anniversary",
                      rating: 5,
                      text: "The elegant atmosphere and exceptional service made our anniversary celebration truly memorable. Highly recommend Grand Majestic!",
                    },
                  ].map((testimonial, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-4">
                          <Quote className="h-8 w-8 text-primary/30 mr-2" aria-hidden="true" />
                          <div className="flex" role="img" aria-label={`${testimonial.rating} star rating`}>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground mb-4 text-pretty italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery-section" className="py-16 sm:py-20 px-4 bg-card" data-animate>
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-12 sm:mb-16 ${visibleSections.has("gallery-section") ? "animate-slide-up" : "opacity-0"}`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">
                Event Gallery
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                Take a glimpse into the magical moments we've helped create
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { src: "/images/wedding-setup.png", alt: "Elegant Wedding Setup" },
                { src: "/images/corporate-event.png", alt: "Corporate Event Space" },
                { src: "/images/dance-floor.png", alt: "Dance Floor with Blue Lighting" },
                { src: "/images/reception-setup.png", alt: "Reception Table Setting" },
                { src: "/images/hero-banquet-hall.png", alt: "Main Banquet Hall" },
                { src: "/images/elegant-banquet-hall.png", alt: "Elegant Golden Ballroom" },
                { src: "/images/corporate-event.png", alt: "Business Meeting Setup" },
                { src: "/images/dance-floor.png", alt: "Evening Reception" },
              ].map((image, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-lg aspect-square hover-scale cursor-pointer ${visibleSections.has("gallery-section") ? `animate-scale-in animation-delay-${(index + 1) * 100}` : "opacity-0"}`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-6">
                  Why Choose Grand Majestic?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Elegant Venues",
                      description: "Beautifully designed spaces with luxurious amenities and stunning decor",
                    },
                    {
                      title: "Expert Service",
                      description: "Professional event coordination and personalized attention to every detail",
                    },
                    {
                      title: "Prime Location",
                      description: "Conveniently located in the GTA with ample parking and easy accessibility",
                    },
                    {
                      title: "Flexible Packages",
                      description: "Customizable event packages to suit your budget and requirements",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold gold-gradient-text-static mb-2 sm:mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/elegant-banquet-hall.png"
                  alt="Grand Majestic Interior"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  
                  <div className="text-xs sm:text-sm">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Booking */}
        <section
          className="py-16 sm:py-20 px-4 bg-gradient-to-br from-card to-background"
          data-animate
          id="contact-section"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-6 ${visibleSections.has("contact-section") ? "animate-slide-up" : "opacity-0"}`}
            >
              Ready to Plan Your Event?
            </h2>
            <p
              className={`text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed ${visibleSections.has("contact-section") ? "animate-slide-up animation-delay-200" : "opacity-0"}`}
            >
              Contact us today to discuss your vision and let us create an unforgettable experience
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 ${visibleSections.has("contact-section") ? "animate-fade-in animation-delay-400" : "opacity-0"}`}
            >
              <button
                onClick={handlePhoneCall}
                className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group cursor-pointer hover-glow min-h-11 min-w-11"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Call Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">416 269 0292</p>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group cursor-pointer hover-glow min-h-11 min-w-11"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email Us</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-all">
                    gmbanquet@bellnet.ca
                  </p>
                </div>
              </button>

              <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg hover:bg-background/50 transition-colors duration-300 group sm:col-span-2 md:col-span-1 hover-glow min-h-11 min-w-11">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Visit Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base text-center">2648 Eglinton Ave East, GTA</p>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${visibleSections.has("contact-section") ? "animate-slide-up animation-delay-600" : "opacity-0"}`}
            >
              <Link href="/booking">
                <Button
                  size="lg"
                  className="gold-accent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-200 relative overflow-hidden min-h-11 min-w-11"
                >
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="relative z-10">Book Consultation</span>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-200 min-h-11 min-w-11"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
