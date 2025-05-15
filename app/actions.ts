'use server';

import { movieService } from '@/services/movieService';

export async function getSearchSuggestions(query: string) {
  if (!query || query.length < 2) return [];
  
  try {
    const { results } = await movieService.searchMovies(query, 1);
    return results.slice(0, 5);
  } catch (error) {
    console.error('Failed to fetch suggestions:', error);
    return [];
  }
} 