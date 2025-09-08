import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChefHat, Utensils, Users, Clock, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CateringPage() {
  const cateringServices = [
    {
      title: "Wedding Catering",
      description: "Exquisite multi-course meals designed to make your special day unforgettable",
      features: [
        "Custom menu planning",
        "Dietary accommodations",
        "Professional service staff",
        "Elegant presentation",
      ],
      image: "/images/wedding-setup.png",
      price: "Starting from $85/person",
    },
    {
      title: "Corporate Events",
      description: "Professional catering solutions for business meetings and corporate functions",
      features: ["Business lunch packages", "Coffee break service", "Networking reception", "Executive dining"],
      image: "/images/corporate-event.png",
      price: "Starting from $45/person",
    },
    {
      title: "Social Celebrations",
      description: "Perfect catering for birthdays, anniversaries, and family gatherings",
      features: ["Buffet style service", "Family-style dining", "Cocktail reception", "Dessert stations"],
      image: "/images/reception-setup.png",
      price: "Starting from $55/person",
    },
  ]

  const menuCategories = [
    {
      category: "Appetizers",
      items: ["Stuffed Mushrooms", "Shrimp Cocktail", "Bruschetta Trio", "Cheese & Charcuterie Board"],
    },
    {
      category: "Main Courses",
      items: ["Grilled Salmon", "Beef Tenderloin", "Chicken Marsala", "Vegetarian Lasagna"],
    },
    {
      category: "Desserts",
      items: ["Wedding Cake", "Chocolate Fountain", "Assorted Pastries", "Fresh Fruit Display"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">Exceptional Catering Services</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, our culinary team creates memorable dining experiences with
            fresh ingredients, creative presentation, and impeccable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
                <ChefHat className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40 bg-transparent"
            >
              <Utensils className="mr-2 h-5 w-5" />
              View Sample Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Our Catering Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored culinary experiences for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cateringServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl gold-gradient-text-static">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gold-accent text-background">
                      {service.price}
                    </Badge>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10 bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Sample Menu Items</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A taste of our culinary offerings - fully customizable to your preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl gold-gradient-text-static">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                      >
                        <span className="text-foreground">{item}</span>
                        <Star className="h-4 w-4 text-primary" />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Why Choose Our Catering</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ChefHat, title: "Expert Chefs", description: "Professionally trained culinary team" },
              { icon: Users, title: "Full Service", description: "Complete event staffing included" },
              { icon: Clock, title: "On-Time Delivery", description: "Punctual and reliable service" },
              { icon: Star, title: "Premium Quality", description: "Fresh, high-quality ingredients" },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 gold-gradient-text-static">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient-text">Ready to Plan Your Event?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized catering consultation and custom menu planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="gold-accent text-lg px-8 py-3 hover:scale-105 transition-transform duration-200">
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 border-primary/20 hover:border-primary/40 bg-transparent"
            >
              Call (416) 279-0292
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
