import {useQuery} from '@tanstack/react-query';
import api from '../utils/api.ts';

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
}

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey:['popularMovies'],
    queryFn:fetchPopularMovies,
    select:data => data.data.results
  })
}