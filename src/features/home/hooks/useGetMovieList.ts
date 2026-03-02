import { useQuery } from '@tanstack/react-query';
import { useMovieFilterStore } from './useMovieFilterStore';
import { HandleOptions } from '../../../types/HandleOption.type';
import homeService from '../services/home.service';
import { GetMovieListDto } from '../dto/GetMovieDto.dto';
import useHandleQuery from '../../../hooks/useHandleQuery';
import { useEffect } from 'react';
import { Movie } from '../../../types/ComponentsTypes';

interface GetMovieListParam extends HandleOptions, GetMovieListDto {
  page?: number;
}

const useGetMovieList = (getMovieListParams: GetMovieListParam) => {
  const { page, type, language, sort_by, onSuccess, onError } =
    getMovieListParams;
  const { setMovie } = useMovieFilterStore();

  const query = useHandleQuery(
    useQuery({
      queryKey: ['@get/movie-data', page],
      queryFn: () =>
        homeService.getMovieList({ type, page, sort_by, language }),
      select: response => response?.data || {},
    }),
    {
      onSuccess,
      onError,
    },
  );

  const { data, isLoading } = query;
  const { results = {} } = data ?? {}

  useEffect(() => {
    if (!isLoading) {
      setMovie(results as Movie[]);
    }
    console.log('gogo', data);
  }, [data]);

  return query;
};

export default useGetMovieList;
