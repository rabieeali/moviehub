import { http } from './http';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  status: string;
  tagline: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
  }[];
}

class MovieService {
  async getPopularMovies(page = 1): Promise<MovieResponse> {
    const { data } = await http.get<MovieResponse>(`/movie/popular?page=${page}`);
    return data;
  }

  async searchMovies(query: string, page = 1): Promise<MovieResponse> {
    const { data } = await http.get<MovieResponse>(`/search/movie?query=${query}&page=${page}`);
    return data;
  }

  async getMovieDetails(id: number): Promise<MovieDetails> {
    const { data } = await http.get<MovieDetails>(`/movie/${id}`);
    return data;
  }

  async getSimilarMovies(id: number, page = 1): Promise<MovieResponse> {
    const { data } = await http.get<MovieResponse>(`/movie/${id}/similar?page=${page}`);
    return data;
  }
}

export const movieService = new MovieService(); 