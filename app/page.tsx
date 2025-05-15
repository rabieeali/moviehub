import { movieService } from '@/services/movieService';
import { MovieCard } from '@/components/ui/MovieCard';
import { SearchBar } from '@/components/features/SearchBar';
import { Pagination } from '@/components/features/Pagination';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  try {
    const query = typeof searchParams.query === 'string' ? searchParams.query : undefined;
    const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

    const { results: movies, total_pages } = query
      ? await movieService.searchMovies(query, page)
      : await movieService.getPopularMovies(page);

    return (
      <main className="min-h-screen bg-base-200">
        {/* Hero Section */}
        <div className="hero min-h-[60vh] relative">
          {movies[0] && !query && (
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src={getImageUrl(movies[0].backdrop_path, 'original')}
                  alt={movies[0].title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
          )}
          <div className="hero-content text-center text-neutral-content relative z-10">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to MovieHub</h1>
              <p className="mb-5">
                Discover the latest and greatest movies. From blockbusters to indie gems,
                find your next favorite film.
              </p>
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">
            {query ? `Search Results for "${query}"` : 'Popular Movies'}
          </h2>
          {movies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
              <Pagination currentPage={page} totalPages={total_pages} />
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">
                No movies found. Try a different search term.
              </h3>
            </div>
          )}
        </div>
      </main>
    );
  } catch {
    return (
      <main className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-error mb-4">Oops! Something went wrong</h1>
          <p className="text-lg text-gray-600">
            We couldn&apos;t load the movies. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}
