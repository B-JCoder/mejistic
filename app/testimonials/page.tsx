import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding Reception",
      date: "September 2024",
      rating: 5,
      image: "/images/wedding-setup.png",
      testimonial:
        "Grand Majestic exceeded all our expectations! From the initial consultation to the last dance, everything was absolutely perfect. The staff was incredibly professional, the venue was stunning, and our guests are still talking about how amazing our wedding was. We couldn't have asked for a better experience.",
      highlight: "Absolutely perfect wedding experience",
    },
    {
      name: "Jennifer Chen",
      event: "Corporate Gala",
      date: "October 2024",
      rating: 5,
      image: "/images/corporate-event.png",
      testimonial:
        "We hosted our annual company gala at Grand Majestic and it was flawless. The team handled every detail with precision, from the elegant setup to the seamless service throughout the evening. Our clients and employees were thoroughly impressed. Highly recommend for corporate events!",
      highlight: "Flawless corporate event execution",
    },
    {
      name: "Maria & David Rodriguez",
      event: "25th Anniversary",
      date: "August 2024",
      rating: 5,
      image: "/images/reception-setup.png",
      testimonial:
        "Celebrating our 25th anniversary at Grand Majestic was magical. The attention to detail, beautiful ambiance, and exceptional service made our special day unforgettable. Our family and friends had an amazing time, and the photos turned out absolutely gorgeous!",
      highlight: "Magical anniversary celebration",
    },
    {
      name: "Robert Thompson",
      event: "Birthday Celebration",
      date: "July 2024",
      rating: 5,
      image: "/images/dance-floor.png",
      testimonial:
        "My 50th birthday party at Grand Majestic was beyond my wildest dreams. The venue was elegant, the food was exceptional, and the staff went above and beyond to make sure everything was perfect. All my guests commented on how beautiful and well-organized everything was.",
      highlight: "Beyond wildest dreams celebration",
    },
    {
      name: "Amanda & James Wilson",
      event: "Wedding Reception",
      date: "June 2024",
      rating: 5,
      image: "/images/elegant-banquet-hall.png",
      testimonial:
        "From our first visit to Grand Majestic, we knew it was the perfect venue for our wedding. The coordinator was amazing, helping us with every detail. The day of our wedding was stress-free and absolutely beautiful. Thank you for making our dream wedding come true!",
      highlight: "Dream wedding came true",
    },
    {
      name: "Lisa Park",
      event: "Bridal Shower",
      date: "May 2024",
      rating: 5,
      image: "/images/hero-banquet-hall.png",
      testimonial:
        "The bridal shower at Grand Majestic was elegant and intimate. The staff was attentive, the food was delicious, and the atmosphere was perfect for our celebration. Everyone loved the beautiful setting and professional service. Definitely booking here for future events!",
      highlight: "Elegant and intimate celebration",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Couples" },
    { number: "1000+", label: "Events Hosted" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the couples and families who trusted us with their most important
            celebrations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-gradient-text-static mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link href="/booking">
            <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
              <Calendar className="mr-2 h-5 w-5" />
              Start Planning Your Event
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="gold-accent text-background">
                      {testimonial.event}
                    </Badge>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} event`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-semibold text-lg gold-gradient-text-static">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <blockquote className="text-muted-foreground italic leading-relaxed pl-6">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>

                  <div className="mt-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium text-primary">
                      <Heart className="h-4 w-4 inline mr-2" />
                      {testimonial.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient-text">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who chose Grand Majestic for their most important celebrations. Let us
            help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Event
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40 bg-transparent"
              >
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
