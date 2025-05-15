import { Movie } from '@/services/movieService';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
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
            <div className="badge badge-primary">{movie.vote_average.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
} 