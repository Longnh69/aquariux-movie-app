import axiosInstance from '../../../libs/axios/instance';

const detailService = {
  getMovieDetail: (id: number) => {
    const url = `movie/${id}`;
    return axiosInstance.get(url);
  },

  getRecommendMovies: (id: number) => {
    const url = `movie/${id}/recommendations`;
    return axiosInstance.get(url);
  },

  getMovieCast: (id: number) => {
    const url = `movie/${id}/credits`;
    return axiosInstance.get(url);
  }
};
export default detailService;
