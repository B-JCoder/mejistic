import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "10 Essential Tips for Planning Your Dream Wedding",
    excerpt:
      "Planning a wedding can feel overwhelming, but with the right guidance, you can create the perfect celebration. Here are our top tips from 15+ years of hosting unforgettable weddings.",
    author: "Grand Majestic Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Wedding Planning",
    image: "elegant wedding setup with golden lighting and floral arrangements",
    slug: "wedding-planning-tips",
  }

  const blogPosts = [
    {
      title: "How to Choose the Perfect Venue for Your Corporate Event",
      excerpt:
        "The right venue sets the tone for your corporate event. Learn what factors to consider when selecting a space that aligns with your business goals.",
      author: "Event Planning Team",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Corporate Events",
      image: "professional corporate event setup with modern lighting",
      slug: "corporate-venue-selection",
    },
    {
      title: "5 Trending Wedding Themes for 2025",
      excerpt:
        "Discover the hottest wedding trends for 2025, from elegant minimalism to bold maximalist celebrations. Find inspiration for your special day.",
      author: "Design Team",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Wedding Trends",
      image: "modern wedding decor with trending 2025 design elements",
      slug: "wedding-trends-2025",
    },
    {
      title: "Planning a Memorable Birthday Celebration: Age-Specific Ideas",
      excerpt:
        "From milestone birthdays to intimate gatherings, discover creative ideas for birthday celebrations that guests will remember for years to come.",
      author: "Celebration Experts",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Birthday Parties",
      image: "elegant birthday party setup with sophisticated decorations",
      slug: "birthday-celebration-ideas",
    },
    {
      title: "The Ultimate Guide to Bridal Shower Planning",
      excerpt:
        "Create a beautiful and memorable bridal shower with our comprehensive planning guide, including themes, activities, and venue considerations.",
      author: "Event Coordinators",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Bridal Showers",
      image: "charming bridal shower setup with elegant table settings",
      slug: "bridal-shower-guide",
    },
    {
      title: "Corporate Event Catering: Making the Right Impression",
      excerpt:
        "Food plays a crucial role in corporate events. Learn how to select catering options that impress clients and colleagues while staying within budget.",
      author: "Catering Team",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Corporate Events",
      image: "sophisticated corporate catering setup with professional presentation",
      slug: "corporate-catering-guide",
    },
    {
      title: "Baby Shower Themes That Create Lasting Memories",
      excerpt:
        "Celebrate new beginnings with these creative baby shower themes and decoration ideas that will make the expecting parents feel truly special.",
      author: "Party Planners",
      date: "November 25, 2024",
      readTime: "5 min read",
      category: "Baby Showers",
      image: "adorable baby shower setup with soft colors and elegant touches",
      slug: "baby-shower-themes",
    },
  ]

  const categories = [
    "All Posts",
    "Wedding Planning",
    "Corporate Events",
    "Birthday Parties",
    "Bridal Showers",
    "Baby Showers",
    "Event Tips",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 gold-accent text-lg px-4 py-2">Event Planning Insights</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 text-balance">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Expert tips, inspiration, and insights for planning unforgettable events from the Grand Majestic team
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "gold-accent"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
                  }
                >
                  <Tag className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most popular and helpful content</p>
          </div>

          <Card className="overflow-hidden border-border hover:border-primary transition-colors duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={`/elegant-banquet-hall-interior-with-golden-lighting.png?height=400&width=600&query=${featuredPost.image}`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 gold-accent">{featuredPost.category}</Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4 text-balance">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="gold-accent w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Stay updated with our latest event planning tips and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-primary transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/elegant-banquet-hall-interior-with-golden-lighting.png?height=300&width=400&query=${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 gold-accent text-xs">{post.category}</Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Stay Inspired</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Subscribe to our newsletter for the latest event planning tips, trends, and exclusive offers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none"
            />
            <Button className="gold-accent px-8">Subscribe</Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}
