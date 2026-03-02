import { useQuery } from '@tanstack/react-query';
import { HandleOptions } from '../../../types/HandleOption.type';
import useHandleQuery from '../../../hooks/useHandleQuery';
import detailService from '../services/detail.service';

interface GetMovieDetailParam extends HandleOptions {
  id: number;
}

const useGetDetail = (getMovieDetailParams: GetMovieDetailParam) => {
  const { id, onSuccess, onError } =
    getMovieDetailParams;

  const query = useHandleQuery(
    useQuery({
      queryKey: ['@get/movie-detail', id],
      queryFn: () =>
        detailService.getMovieDetail(id),
      select: response => response?.data || {},
    }),
    {
      onSuccess,
      onError,
    },
  );

  return query
    
};

export default useGetDetail;
