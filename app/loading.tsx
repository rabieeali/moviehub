export default function Loading() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section Skeleton */}
      <div className="hero min-h-[60vh] relative">
        <div className="absolute inset-0 bg-base-300 animate-pulse" />
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md">
            <div className="h-12 w-64 bg-base-200 rounded animate-pulse mb-5" />
            <div className="space-y-3">
              <div className="h-4 bg-base-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-base-200 rounded animate-pulse w-3/4 mx-auto" />
            </div>
            <div className="mt-8">
              <div className="h-10 bg-base-200 rounded animate-pulse w-full max-w-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="h-8 w-48 bg-base-300 rounded animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="relative h-[400px] bg-base-300 animate-pulse" />
              <div className="card-body">
                <div className="h-6 bg-base-300 rounded animate-pulse mb-2" />
                <div className="flex justify-between">
                  <div className="h-4 w-24 bg-base-300 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-base-300 rounded animate-pulse" />
                </div>
                <div className="space-y-2 mt-2">
                  <div className="h-4 bg-base-300 rounded animate-pulse" />
                  <div className="h-4 bg-base-300 rounded animate-pulse w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="h-8 w-20 bg-base-300 rounded animate-pulse" />
          <div className="join">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-8 w-8 bg-base-300 rounded animate-pulse mx-1" />
            ))}
          </div>
          <div className="h-8 w-20 bg-base-300 rounded animate-pulse" />
        </div>
      </div>
    </main>
  );
} 