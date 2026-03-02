import { useQuery } from '@tanstack/react-query';
import { HandleOptions } from '../../../types/HandleOption.type';
import useHandleQuery from '../../../hooks/useHandleQuery';
import detailService from '../services/detail.service';

interface GetMovieListParam extends HandleOptions {
  id: number;
}

const useGetRecommendMovie = (getMovieListParams: GetMovieListParam) => {
  const { id, onSuccess, onError } =
    getMovieListParams;

  const query = useHandleQuery(
    useQuery({
      queryKey: ['@get/movie-recommendations', id],
      queryFn: () =>
        detailService.getRecommendMovies(id),
      select: response => response?.data || {},
    }),
    {
      onSuccess,
      onError,
    },
  );

  const { data } = query;
  const { results = {} } = data ?? {}



  return {
      ...query,
      data: results,
  };
};

export default useGetRecommendMovie;
