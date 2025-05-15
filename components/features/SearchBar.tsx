'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition, useState, useEffect } from 'react';
import { Movie } from '@/services/movieService';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import { getSearchSuggestions } from '@/app/actions';

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      // Reset page when searching
      params.delete('page');
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;

    startTransition(() => {
      router.push(`/?${createQueryString('query', query)}`);
      setShowSuggestions(false);
    });
  };

  const handleSuggestionClick = (movie: Movie) => {
    setSuggestions([]);
    setInputValue('');
    router.push(`/?query=${encodeURIComponent(movie.title)}`);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length >= 2) {
        const results = await getSearchSuggestions(inputValue);
        setSuggestions(results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const formatYear = (dateString: string | null) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).getFullYear().toString();
    } catch {
      return '';
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="w-full">
        <div className="join w-full">
          <input
            type="text"
            name="query"
            placeholder="Search movies..."
            className="input input-bordered join-item w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => inputValue.length >= 2 && setShowSuggestions(true)}
          />
          <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={isPending}
          >
            {isPending ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-base-100 shadow-lg rounded-lg overflow-hidden">
          {suggestions.map((movie) => (
            <button
              key={movie.id}
              className="w-full px-4 py-2 hover:bg-base-200 flex items-center gap-3 text-left"
              onClick={() => handleSuggestionClick(movie)}
            >
              <div className="relative w-12 h-18 flex-shrink-0">
                <Image
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  fill
                  className="object-cover rounded"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-medium">{movie.title}</div>
                <div className="text-sm text-gray-500">
                  {formatYear(movie.release_date)}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 