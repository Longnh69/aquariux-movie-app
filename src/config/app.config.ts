const TMDB_ACCESS_TOKEN = '';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

const API_URL_END_WITH_SLASH = 'https://api.themoviedb.org/3/';

// Image size presets
const IMG = {
  poster: `${TMDB_IMAGE_BASE}/w500`,
  posterSm: `${TMDB_IMAGE_BASE}/w185`,
  backdrop: `${TMDB_IMAGE_BASE}/w1280`,
  profile: `${TMDB_IMAGE_BASE}/w185`,
} as const;

export default {
  TMDB_ACCESS_TOKEN,
  TMDB_IMAGE_BASE,
  API_URL_END_WITH_SLASH,
  IMG,
};
