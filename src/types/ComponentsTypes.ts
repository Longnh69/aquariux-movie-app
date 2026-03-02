import {type SortField, type SortOrder } from "../features/home/dto/GetMovieDto.dto";

export type MovieCategory = 'now_playing' | 'upcoming' | 'popular';
export type SortKey = `${SortField}.${SortOrder}` | '';
export type RatingFilter = 'all' | 'high' | 'mid' | 'low';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;        // ISO 8601 format: "YYYY-MM-DD"
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DropdownItem {
  value: string;
  label: string;
}
