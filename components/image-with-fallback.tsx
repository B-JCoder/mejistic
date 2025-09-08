"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackSrc?: string
  priority?: boolean
  loading?: "lazy" | "eager"
  sizes?: string
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/placeholder.svg",
  priority = false,
  loading = "lazy",
  sizes,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && <div className="absolute inset-0 bg-muted/50 animate-pulse rounded-lg"></div>}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        priority={priority}
        loading={loading}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }}
        {...props}
      />
    </div>
  )
}
