import axios from 'axios';
import { GetMovieListDto } from '../dto/GetMovieDto.dto';

const homeService = {
  getMovieList: (params: GetMovieListDto) => {
    const { type, language = 'en-US', page = 1, sort_by } = params || {};
    const url = `movie/${type}`;
    return axios.get(url, { params });
  },
};
export default homeService;
