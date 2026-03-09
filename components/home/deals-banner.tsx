"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface DealsBannerProps {
  /** Whether the banner is visible. Default is false (hidden). */
  isVisible?: boolean
  /** The image URL to display in the banner */
  imageUrl?: string
  /** Alt text for the image */
  imageAlt?: string
  /** Optional link URL when banner is clicked */
  linkUrl?: string
  /** Optional headline text overlay */
  headline?: string
  /** Optional subheadline text overlay */
  subheadline?: string
  /** Whether to allow users to dismiss the banner */
  dismissible?: boolean
  /** Optional callback when banner is dismissed */
  onDismiss?: () => void
}

export function DealsBanner({
  isVisible = false,
  imageUrl = "/images/deals/current-deal.jpg",
  imageAlt = "Current promotional deal at Markville Fitness",
  linkUrl,
  headline,
  subheadline,
  dismissible = true,
  onDismiss,
}: DealsBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (!isVisible || isDismissed) {
    return null
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    onDismiss?.()
  }

  const BannerContent = () => (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Banner Container */}
      <div className="relative mx-auto max-w-7xl">
        {/* Image Container */}
        <div className="relative aspect-[21/9] w-full sm:aspect-[3/1] lg:aspect-[4/1]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          
          {/* Gradient Overlay for text readability */}
          {(headline || subheadline) && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          )}
          
          {/* Text Overlay */}
          {(headline || subheadline) && (
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-16">
              {headline && (
                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                  {headline}
                </h2>
              )}
              {subheadline && (
                <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base lg:text-lg">
                  {subheadline}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white sm:right-4 sm:top-4"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
    </div>
  )

  // If there's a link, wrap the banner in a Link component
  if (linkUrl) {
    return (
      <Link href={linkUrl} className="block">
        <BannerContent />
      </Link>
    )
  }

  return <BannerContent />
}
