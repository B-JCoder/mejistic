import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChefHat,
  Utensils,
  Users,
  Clock,
  Star,
  CheckCircle,
  UtensilsCrossed,
  Coffee,
  Wine,
  Salad,
  Drumstick,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CateringPage() {
  const cateringServices = [
    {
      title: "Wedding Catering",
      description:
        "Exquisite multi-course meals designed to make your special day unforgettable",
      features: [
        "Custom menu planning",
        "Dietary accommodations",
        "Professional service staff",
        "Elegant presentation",
      ],
      image:
        "https://i.pinimg.com/1200x/77/5e/2b/775e2b7342e4d970cdeed31d51813345.jpg",
      price: "Starting from $85/person",
    },
    {
      title: "Corporate Events",
      description:
        "Professional catering solutions for business meetings and corporate functions",
      features: [
        "Business lunch packages",
        "Coffee break service",
        "Networking reception",
        "Executive dining",
      ],
      image:
        "https://i.pinimg.com/1200x/2d/b1/f6/2db1f650bddd6c7f0c1aa5363fc8c993.jpg",
      price: "Starting from $45/person",
    },
    {
      title: "Social Celebrations",
      description:
        "Perfect catering for birthdays, anniversaries, and family gatherings",
      features: [
        "Buffet style service",
        "Family-style dining",
        "Cocktail reception",
        "Dessert stations",
      ],
      image:
        "https://i.pinimg.com/1200x/eb/5d/11/eb5d117eacaad5d67240c4ad46e48c4a.jpg",
      price: "Starting from $55/person",
    },
  ]

const menuCategories = [
  {
    category: "Appetizers",
    image: "https://i.pinimg.com/1200x/12/eb/a1/12eba18427d55f3c33254e3c18bcfc99.jpg",
    items: [
      "Stuffed Mushrooms",
      "Shrimp Cocktail",
      "Bruschetta Trio",
      "Cheese & Charcuterie Board",
    ],
  },
  {
    category: "Main Courses",
    image: "https://i.pinimg.com/736x/58/2d/c4/582dc4bcf7222205812391e8d7ce3cfd.jpg",
    items: [
      "Grilled Salmon",
      "Beef Tenderloin",
      "Chicken Marsala",
      "Vegetarian Lasagna",
    ],
  },
  {
    category: "Desserts",
    image: "https://i.pinimg.com/736x/0a/52/42/0a524268346502fefeaa165e5954a823.jpg",
    items: [
      "Wedding Cake",
      "Chocolate Fountain",
      "Assorted Pastries",
      "Fresh Fruit Display",
    ],
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient-text">
            Exceptional Catering Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, our culinary team
            creates memorable dining experiences with fresh ingredients,
            creative presentation, and impeccable service.
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">
              Our Catering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored culinary experiences for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {cateringServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 rounded-xl overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl gold-gradient-text-static">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-foreground/80"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="gold-accent text-background"
                    >
                      {service.price}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary/10 bg-transparent"
                    >
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
      <section className="py-24 bg-gradient-to-b from-muted/40 via-background to-muted/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gold-gradient-text">
              Our Signature Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our chef’s curated specialties – designed to delight your
              taste buds.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="grid md:grid-cols-3 gap-10">
            {menuCategories.map((category, index) => (
             <Card
  key={index}
  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* Background Image */}
 <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${category.image})` }}
></div>

{/* Overlay - darker */}
<div className="absolute inset-0 bg-black/70"></div>


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* Header */}
    <CardHeader className="text-center pb-4 border-b border-white/20">
      <CardTitle className="text-2xl font-semibold text-white tracking-wide flex items-center justify-center gap-2">
        {category.category.includes("Drinks") ? (
          <Wine className="h-6 w-6 text-primary" />
        ) : category.category.includes("Coffee") ? (
          <Coffee className="h-6 w-6 text-primary" />
        ) : category.category.includes("Salad") ? (
          <Salad className="h-6 w-6 text-primary" />
        ) : category.category.includes("Meat") ? (
          <Drumstick className="h-6 w-6 text-primary" />
        ) : (
          <UtensilsCrossed className="h-6 w-6 text-primary" />
        )}
        {category.category}
      </CardTitle>
    </CardHeader>

    {/* Items */}
    <CardContent className="pt-6">
      <ul className="space-y-5">
        {category.items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between py-2 px-3 rounded-lg group hover:bg-white/10 transition-colors duration-200"
          >
            <span className="text-white font-medium group-hover:text-primary transition-colors">
              {item}
            </span>
            <UtensilsCrossed className="h-4 w-4 text-white/70 group-hover:text-primary transition-colors" />
          </li>
        ))}
      </ul>
    </CardContent>
  </div>
</Card>

            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">
              Why Choose Our Catering
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ChefHat,
                title: "Expert Chefs",
                description: "Professionally trained culinary team",
              },
              {
                icon: Users,
                title: "Full Service",
                description: "Complete event staffing included",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "Punctual and reliable service",
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Fresh, high-quality ingredients",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 gold-gradient-text-static">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient-text">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized catering consultation and custom
            menu planning.
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
