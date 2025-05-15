export default function MovieDetailsLoading() {
  return (
    <main className="min-h-screen bg-base-200">
      {/* Back Button Skeleton */}
      <div className="container mx-auto px-4 pt-4">
        <div className="w-32 h-10 bg-base-300 rounded-lg animate-pulse" />
      </div>

      {/* Hero Section Skeleton */}
      <div className="hero min-h-[70vh] relative">
        <div className="absolute inset-0 bg-base-300 animate-pulse" />

        <div className="hero-content flex-col lg:flex-row gap-8 relative z-10">
          {/* Poster Skeleton */}
          <div className="w-64 h-96 bg-base-300 rounded-lg animate-pulse" />

          {/* Content Skeleton */}
          <div className="max-w-2xl w-full">
            <div className="h-12 w-3/4 bg-base-300 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 w-1/2 bg-base-300 rounded-lg mb-4 animate-pulse" />

            {/* Genres Skeleton */}
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-6 bg-base-300 rounded-full animate-pulse" />
              ))}
            </div>

            {/* Rating and Info Skeleton */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-6 bg-base-300 rounded-lg animate-pulse" />
              <div className="w-4 h-4 bg-base-300 rounded-full animate-pulse" />
              <div className="w-16 h-6 bg-base-300 rounded-lg animate-pulse" />
              <div className="w-4 h-4 bg-base-300 rounded-full animate-pulse" />
              <div className="w-20 h-6 bg-base-300 rounded-lg animate-pulse" />
            </div>

            {/* Overview Skeleton */}
            <div className="mb-8">
              <div className="h-8 w-40 bg-base-300 rounded-lg mb-2 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-base-300 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-base-300 rounded-lg animate-pulse" />
                <div className="h-4 w-3/4 bg-base-300 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Production Companies Skeleton */}
            <div>
              <div className="h-8 w-48 bg-base-300 rounded-lg mb-2 animate-pulse" />
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 bg-base-300 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-10 w-48 bg-base-300 rounded-lg mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              <div className="h-[400px] bg-base-300 animate-pulse" />
              <div className="card-body">
                <div className="h-6 w-3/4 bg-base-300 rounded-lg mb-2 animate-pulse" />
                <div className="h-4 w-1/4 bg-base-300 rounded-lg mb-2 animate-pulse" />
                <div className="card-actions justify-end">
                  <div className="w-12 h-6 bg-base-300 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 