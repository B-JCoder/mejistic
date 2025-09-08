import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/images/hero-banquet-hall.png",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | Grand Majestic Banquet Centre`
    : "Grand Majestic Banquet and Convention Centre | Premier Event Venue in GTA"

  const metaDescription =
    description ||
    "Premier luxury event venue in Greater Toronto Area. Elegant banquet halls for weddings, corporate events, and celebrations."

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={`https://grandmajesticbanquet.com${canonical}`} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`https://grandmajesticbanquet.com${ogImage}`} />
      <meta property="og:url" content={`https://grandmajesticbanquet.com${canonical || ""}`} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`https://grandmajesticbanquet.com${ogImage}`} />
    </Head>
  )
}
