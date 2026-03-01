export interface GetMovieListDto {
  language?: 'en-US' | string;
  page?: number;
  sort_by?: `${SortField}.${SortOrder}`;
  type: 'now_playing' | 'popular' | 'upcoming';
}

type SortOrder = 'asc' | 'desc';

type SortField = 'popularity' | 'release_date' | 'title';
