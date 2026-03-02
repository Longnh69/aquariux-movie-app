import { useQuery } from '@tanstack/react-query';
import { HandleOptions } from '../../../types/HandleOption.type';
import useHandleQuery from '../../../hooks/useHandleQuery';
import detailService from '../services/detail.service';

interface GetMovieCastParam extends HandleOptions {
  id: number;
}

const useGetMovieCast = (getMovieCastParams: GetMovieCastParam) => {
  const { id, onSuccess, onError } =
    getMovieCastParams;

  const query = useHandleQuery(
    useQuery({
      queryKey: ['@get/movie-cast', id],
      queryFn: () =>
        detailService.getMovieCast(id),
      select: response => response?.data || {},
    }),
    {
      onSuccess,
      onError,
    },
  );


  return query
};

export default useGetMovieCast;
