import {
  type DefaultError,
  type QueryKey,
  type useQuery,
} from '@tanstack/react-query';
import { type HandleOptions } from '../types/HandleOption.type';

type QueryResult<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey = QueryKey,
> = ReturnType<typeof useQuery<TQueryFnData, TError, TData, TQueryKey>>;

export default function useHandleQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  query: QueryResult<TQueryFnData, TError, TData, TQueryKey>,
  options: HandleOptions,
): QueryResult<TQueryFnData, TError, TData, TQueryKey> {
  const { data, isError, isSuccess } = query || {};
  const { onSuccess, onError } = options || {};

  if (isSuccess && onSuccess) {
    onSuccess(data);
  }

  if (isError && onError) {
    onError(data);
  }

  return query;
}
