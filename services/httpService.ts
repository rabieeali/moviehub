import axios, { AxiosError } from 'axios';
import { APIError, NotFoundError } from '@/lib/errors';

interface TMDBErrorResponse {
  status_message: string;
  status_code: number;
}

const httpService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
httpService.interceptors.response.use(
  (response) => response,
  (error: AxiosError<TMDBErrorResponse>) => {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 404:
          throw new NotFoundError(data?.status_message || 'Resource not found');
        case 401:
          throw new APIError('Unauthorized access', 401, 'UNAUTHORIZED');
        case 403:
          throw new APIError('Access forbidden', 403, 'FORBIDDEN');
        case 429:
          throw new APIError('Too many requests', 429, 'RATE_LIMIT');
        default:
          throw new APIError(
            data?.status_message || 'An error occurred',
            status,
            data?.status_code?.toString()
          );
      }
    }
    
    if (error.request) {
      throw new APIError('No response received', 0, 'NETWORK_ERROR');
    }
    
    throw new APIError('Request configuration error', 0, 'REQUEST_ERROR');
  }
);

export default httpService; 