import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios';
import appConfig from '../../config/app.config';

const axiosInstance = axios.create({
  baseURL: appConfig.API_URL_END_WITH_SLASH,
});
console.log(
  appConfig.API_URL_END_WITH_SLASH,
  'appConfig.API_URL_END_WITH_SLASH',
);
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = appConfig.TMDB_ACCESS_TOKEN;
    // Thêm headers
    if (!config.headers) config.headers = new AxiosHeaders();
    // Thêm ngôn ngữ
    // if (!config.headers['locale']) config.headers['locale'] = i18n?.language || ELocale.Vi
    // Thêm xác thực
    if (!config.headers['Authorization'])
      config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => {
    // console.log(response, 'resssssssssssssss');
    return response;
  },
  error => {
    // if (error?.response?.status === 401) {
    //   localStorage.clear()
    //   sessionStorage.clear()
    //   window.location.reload()
    // }
    return Promise.reject(error);
  },
);

export default axiosInstance;
