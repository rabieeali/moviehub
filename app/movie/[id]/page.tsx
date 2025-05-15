import { movieService } from '@/services/movieService';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface MovieDetailsPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: MovieDetailsPageProps): Promise<Metadata> {
  try {
    const movie = await movieService.getMovieDetails(Number(params.id));
    
    return {
      title: `${movie.title} | MovieHub`,
      description: movie.overview,
      openGraph: {
        title: movie.title,
        description: movie.overview,
        images: [
          {
            url: getImageUrl(movie.backdrop_path, 'original'),
            width: 1920,
            height: 1080,
            alt: movie.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Movie Not Found | MovieHub',
      description: 'The movie you are looking for could not be found.',
    };
  }
}

export default async function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  try {
    const movie = await movieService.getMovieDetails(Number(params.id));
    const { results: similarMovies } = await movieService.getSimilarMovies(Number(params.id));

    return (
      <main className="min-h-screen bg-base-200">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-4">
          <Link
            href="/"
            className="btn btn-ghost gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="hero min-h-[70vh] relative">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={getImageUrl(movie.backdrop_path, 'original')}
                alt={movie.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70" />
          </div>

          <div className="hero-content flex-col lg:flex-row gap-8 relative z-10">
            <div className="relative w-64 h-96 flex-shrink-0">
              <Image
                src={getImageUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>

            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
              {movie.tagline && (
                <p className="text-xl italic text-gray-300 mb-4">{movie.tagline}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="badge badge-primary">
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xl font-semibold">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-300">{movie.runtime} min</span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
              </div>

              {movie.production_companies.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Production Companies</h2>
                  <div className="flex flex-wrap gap-4">
                    {movie.production_companies.map((company) => (
                      <div key={company.id} className="flex items-center gap-2">
                        {company.logo_path ? (
                          <Image
                            src={getImageUrl(company.logo_path, 'w92')}
                            alt={company.name}
                            width={46}
                            height={46}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-gray-300">{company.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Movies Section */}
        {similarMovies.length > 0 && (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Similar Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {similarMovies.slice(0, 4).map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative h-[400px]">
                      <Image
                        src={getImageUrl(movie.poster_path, 'w500')}
                        alt={movie.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{movie.title}</h2>
                      <p className="text-sm text-gray-500">
                        {new Date(movie.release_date).getFullYear()}
                      </p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-primary">
                          {movie.vote_average.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    );
  } catch (error) {
    console.error('Error loading movie details:', error);
    notFound();
  }
} 