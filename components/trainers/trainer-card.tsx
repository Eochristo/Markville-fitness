"use client"

import { User } from "lucide-react"

interface TrainerCardProps {
  name: string
  imageUrl?: string
  specialty?: string
}

export function TrainerCard({ name, imageUrl, specialty }: TrainerCardProps) {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Image container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary">
            <User className="h-24 w-24 text-muted-foreground/50" />
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Specialty badge - shows on hover if specialty exists */}
        {specialty && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
              {specialty}
            </span>
          </div>
        )}
      </div>
      
      {/* Trainer name */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">Personal Trainer</p>
      </div>
    </div>
  )
}
