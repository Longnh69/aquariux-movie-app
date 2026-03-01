import { create } from 'zustand';
import {
  Movie,
  MovieCategory,
  RatingFilter,
  SortKey,
} from '../../../types/ComponentsTypes';

interface MovieFilterState {
  category: MovieCategory;
  sortKey: SortKey;
  searchQuery: string;
  ratingFilter: RatingFilter;
  sortOrder: 'asc' | 'desc';
  page: number;
  data: Movie[];

  setCategory: (c: MovieCategory) => void;
  setSortKey: (s: SortKey) => void;
  setSearchQuery: (q: string) => void;
  setRatingFilter: (f: RatingFilter) => void;
  toggleSortOrder: () => void;
  resetSearch: () => void;
  setMovie: (movie: Movie[]) => void;
  setPage: (page: number) => void;
}

export const useMovieFilterStore = create<MovieFilterState>(set => ({
  category: 'now_playing',
  sortKey: 'date',
  searchQuery: '',
  ratingFilter: 'all',
  sortOrder: 'asc',
  data: [],
  page: 1,

  setCategory: category => set({ category }),
  setSortKey: sortKey => set({ sortKey }),
  setSearchQuery: searchQuery => set({ searchQuery }),
  setRatingFilter: ratingFilter => set({ ratingFilter }),
  toggleSortOrder: () =>
    set(state => ({ sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' })),
  resetSearch: () => set({ searchQuery: '' }),
  setMovie: movie => set({ data: movie }),
  setPage: page => set({ page }),
}));
