import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Star, CheckCircle, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your event exceeds expectations.",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Personalized Service",
      description: "Every event is unique, and we tailor our services to match your vision perfectly.",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Professional Team",
      description: "Our experienced staff brings expertise and dedication to every celebration.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Attention to Detail",
      description: "From planning to execution, we ensure every element is flawlessly coordinated.",
      icon: <Sparkles className="h-8 w-8" />,
    },
  ]

  const achievements = [
    { number: "500+", label: "Successful Events" },
    { number: "50+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Corporate Partners" },
  ]

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding Reception",
      quote:
        "Grand Majestic made our wedding day absolutely perfect. The attention to detail and professional service exceeded all our expectations.",
      rating: 5,
    },
    {
      name: "Toronto Tech Solutions",
      event: "Corporate Gala",
      quote:
        "Outstanding venue and service for our annual gala. The team handled everything flawlessly, allowing us to focus on our guests.",
      rating: 5,
    },
    {
      name: "The Patel Family",
      event: "50th Anniversary",
      quote:
        "The elegant atmosphere and exceptional service made our celebration truly memorable. Highly recommend Grand Majestic!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 gold-accent text-lg px-4 py-2">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 text-balance">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Creating unforgettable moments and lasting memories for over 50 years in the Greater Toronto Area
          </p>
        </div>
      </section>

      {/* Our Story */}
   <section className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Story</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="text-pretty">
            Grand Majestic Banquet and Convention Centre was founded with a simple yet powerful vision: to create
            extraordinary experiences that bring people together and celebrate life's most precious moments.
          </p>
          <p className="text-pretty">
            Located in the heart of the Greater Toronto Area, we will be one of the GTA's premier choices for elegant
            events, with a versatile flare and catering to a multitude of cultures. Our commitment to excellence,
            attention to detail, and personalized service sets us apart as a trusted partner for families and
            businesses alike.
          </p>
          <p className="text-pretty">
            From intimate gatherings to grand celebrations, we believe every event tells a unique story. Our role is to
            provide the perfect setting and flawless execution that allows your story to unfold beautifully.
            <span className="font-semibold"> Scarborough</span>
          </p>
        </div>
        <div className="mt-8">
          <Link href="/contact">
            <Button size="lg" className="gold-accent">
              <Calendar className="mr-2 h-5 w-5" />
              Plan Your Event
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          src="/images/corporate-event.png"
          alt="Grand Majestic Interior"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg">
          <div className="text-2xl font-bold">50+</div>
          <div className="text-xl">Years</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Values */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The principles that guide everything we do and ensure exceptional experiences for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-border hover:border-primary transition-colors duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-lg text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Real experiences from families and businesses who trusted us with their special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.quote}"</blockquote>
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

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Our Mission</h2>
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              "To create extraordinary experiences that celebrate life's most important moments, bringing people
              together in elegant spaces where memories are made and stories are told for generations to come."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Committed to Excellence Since 1975</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let us help you plan an unforgettable event that reflects your unique vision and creates lasting memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gold-accent text-lg px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Start Planning Today
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
