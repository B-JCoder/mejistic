import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Booking & Reservations",
      questions: [
        {
          question: "How far in advance should I book my event?",
          answer:
            "We recommend booking 6-12 months in advance for weddings and large events, especially during peak season (May-October). For smaller events, 2-3 months notice is typically sufficient.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Cancellations made 90+ days before the event receive a full refund minus a processing fee. Cancellations 30-89 days prior receive 50% refund. Cancellations within 30 days are non-refundable but can be rescheduled subject to availability.",
        },
        {
          question: "Do you require a deposit?",
          answer:
            "Yes, we require a 25% deposit to secure your date, with the balance due 30 days before your event. We accept cash, check, and all major credit cards.",
        },
      ],
    },
    {
      category: "Venue & Capacity",
      questions: [
        {
          question: "What is the maximum capacity of your venue?",
          answer:
            "Our main ballroom accommodates up to 300 guests for seated dining and 400 for cocktail-style events. We also have smaller rooms available for intimate gatherings of 50-150 guests.",
        },
        {
          question: "Do you have parking available?",
          answer:
            "Yes, we provide complimentary parking for up to 200 vehicles. Valet parking service is also available for an additional fee.",
        },
        {
          question: "Is the venue wheelchair accessible?",
          answer:
            "Absolutely. Our facility is fully wheelchair accessible with ramps, accessible restrooms, and designated seating areas.",
        },
      ],
    },
    {
      category: "Catering & Menu",
      questions: [
        {
          question: "Can you accommodate dietary restrictions?",
          answer:
            "Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, kosher, and halal options. Please inform us of any restrictions when booking.",
        },
        {
          question: "Do you allow outside catering?",
          answer:
            "We prefer to use our in-house catering team to ensure quality and coordination. However, we may consider outside caterers on a case-by-case basis with prior approval and additional fees.",
        },
        {
          question: "Can I taste the food before my event?",
          answer:
            "We offer complimentary tastings for events of 100+ guests. Smaller events can schedule tastings for a nominal fee that's credited toward your final bill.",
        },
      ],
    },
    {
      category: "Services & Amenities",
      questions: [
        {
          question: "What audio/visual equipment do you provide?",
          answer:
            "We provide basic sound system, wireless microphones, projector, and screen. Advanced lighting, DJ equipment, and specialized AV needs can be arranged through our preferred vendors.",
        },
        {
          question: "Do you provide decorations?",
          answer:
            "We provide basic linens, centerpieces, and ambient lighting. Custom decorations can be arranged through our event planning team or you may bring your own decorator.",
        },
        {
          question: "Is there a bridal suite available?",
          answer:
            "Yes, we have a beautiful bridal suite with full-length mirrors, seating area, and private restroom available for wedding parties to prepare.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our venue, services, and booking process. Can't find what you're
            looking for? We're here to help!
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gold-gradient-text-static">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border/50 rounded-lg px-6 hover:border-primary/20 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors duration-200">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl gold-gradient-text mb-2">Still Have Questions?</CardTitle>
              <CardDescription className="text-lg">
                Our team is ready to help you plan the perfect event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold gold-gradient-text-static">Call Us</h3>
                  <p className="text-sm text-muted-foreground">Speak directly with our event specialists</p>
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 bg-transparent">
                    (416) 279-0292
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold gold-gradient-text-static">Email Us</h3>
                  <p className="text-sm text-muted-foreground">Get detailed information via email</p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 bg-transparent">
                      Send Message
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold gold-gradient-text-static">Schedule Consultation</h3>
                  <p className="text-sm text-muted-foreground">Book a personalized venue tour</p>
                  <Link href="/contact">
                    <Button className="gold-accent text-sm px-4 py-2 hover:scale-105 transition-transform duration-200">
                      Book Tour
                    </Button>
                  </Link>
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
