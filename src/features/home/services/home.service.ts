import { GetMovieListDto } from '../dto/GetMovieDto.dto';
import axiosInstance from '../../../libs/axios/instance';

const homeService = {
  getMovieList: (params: GetMovieListDto) => {
    const { type } = params || {};
    const url = `movie/${type}`;
    return axiosInstance.get(url, { params });
  },
};
export default homeService;
