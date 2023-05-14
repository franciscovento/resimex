import axios, { AxiosError } from 'axios';
import { default as cookies } from 'js-cookie';
import getConfig from 'next/config';
import { logout } from './logout.helper';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = cookies.get('app-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  async (resp) => {
    return Promise.resolve(resp);
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      return logout();
    }
    return Promise.reject(error);
  }
);

export default instance;
