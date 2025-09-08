import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "wedding-planning-tips": {
      title: "10 Essential Tips for Planning Your Dream Wedding",
      content: `
        <p>Planning a wedding is one of life's most exciting yet challenging endeavors. With so many details to consider and decisions to make, it's easy to feel overwhelmed. At Grand Majestic Banquet and Convention Centre, we've had the privilege of hosting hundreds of beautiful weddings over the past 15 years, and we've learned what makes the difference between a good wedding and an unforgettable one.</p>

        <h2>1. Start with Your Vision</h2>
        <p>Before diving into the details, take time to envision your perfect day. What atmosphere do you want to create? Elegant and formal? Relaxed and intimate? Your vision will guide every decision from venue selection to decor choices.</p>

        <h2>2. Set a Realistic Budget</h2>
        <p>Determine your budget early and stick to it. A good rule of thumb is to allocate about 40-50% of your budget to the venue and catering, as these are typically the largest expenses.</p>

        <h2>3. Choose the Right Venue</h2>
        <p>Your venue sets the tone for your entire celebration. Consider factors like capacity, location, amenities, and the overall atmosphere. At Grand Majestic, we offer elegant spaces that can be customized to match your unique vision.</p>

        <h2>4. Plan Your Timeline</h2>
        <p>Create a detailed timeline for your wedding day, including setup, ceremony, cocktail hour, dinner, and dancing. Share this with all vendors to ensure smooth coordination.</p>

        <h2>5. Don't Forget the Details</h2>
        <p>Small touches make a big impact. Consider personalized elements like custom signage, unique centerpieces, or special lighting that reflects your personality as a couple.</p>

        <p>Remember, your wedding day is about celebrating your love story. While planning is important, don't lose sight of what truly matters – the commitment you're making to each other and the joy of sharing this moment with your loved ones.</p>
      `,
      author: "Grand Majestic Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Wedding Planning",
      image: "elegant wedding setup with golden lighting and floral arrangements",
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="gold-accent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-primary hover:text-primary/80 mb-6 p-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="gold-accent mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
          <img
            src={`/elegant-banquet-hall-interior-with-golden-lighting.png?height=600&width=1200&query=${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-card rounded-lg border border-border text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Ready to Plan Your Dream Wedding?</h3>
          <p className="text-muted-foreground mb-6">
            Let Grand Majestic help you create the perfect celebration. Contact us today for a personalized
            consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gold-accent">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
