export interface GetMovieListDto {
  language?: 'en-US' | string;
  page?: number;
  sort_by?: `${SortField}.${SortOrder}` | '';
  type: 'now_playing' | 'popular' | 'upcoming';
}

export type SortOrder = 'asc' | 'desc';

export type SortField = 'popularity' | 'release_date' | 'title';
