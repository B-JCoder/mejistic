export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-muted/50 h-48 rounded-t-lg"></div>
      <div className="p-6 space-y-3">
        <div className="h-4 bg-muted/50 rounded w-3/4"></div>
        <div className="h-4 bg-muted/50 rounded w-1/2"></div>
        <div className="h-3 bg-muted/50 rounded w-full"></div>
        <div className="h-3 bg-muted/50 rounded w-2/3"></div>
      </div>
    </div>
  )
}

export function StatSkeleton() {
  return (
    <div className="animate-pulse text-center">
      <div className="w-16 h-16 bg-muted/50 rounded-full mx-auto mb-4"></div>
      <div className="h-8 bg-muted/50 rounded w-16 mx-auto mb-2"></div>
      <div className="h-4 bg-muted/50 rounded w-20 mx-auto"></div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse p-6">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-muted/50 rounded mr-2"></div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-muted/50 rounded"></div>
          ))}
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-muted/50 rounded w-full"></div>
        <div className="h-4 bg-muted/50 rounded w-5/6"></div>
        <div className="h-4 bg-muted/50 rounded w-4/6"></div>
      </div>
      <div className="space-y-1">
        <div className="h-4 bg-muted/50 rounded w-32"></div>
        <div className="h-3 bg-muted/50 rounded w-24"></div>
      </div>
    </div>
  )
}
