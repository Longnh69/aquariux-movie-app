export type MovieCategory = 'now_playing' | 'upcoming' | 'popular';
export type SortKey = 'alpha' | 'rating' | 'date';
export type RatingFilter = 'all' | 'high' | 'mid' | 'low';

export interface CastMember {
  name: string;
  role: string;
  img: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string[];
  runtime: string;
  status: string;
  language: string;
  date: string;
  dateSort: number;
  director: string;
  writer: string;
  tagline: string;
  overview: string;
  poster: string;
  backdrop: string;
  cast: CastMember[];
  recommendations: number[];
  category: MovieCategory;
}

export interface DropdownItem {
  value: string;
  label: string;
}
