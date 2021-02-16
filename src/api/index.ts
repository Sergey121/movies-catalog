import axios from 'axios';

const API_KEY = '1cb29ff067aae84cd85f5645165528dd';

const url = (path: string) => {
  return `https://api.themoviedb.org/3${path}`;
}

const _get = (path: string, params?: Record<string, string | number>) => {
  return axios.get(url(path), {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
}

const getList = (page = 1) => {
  return _get('/movie/popular', {
    page,
  });
};

export const API = {
  getList,
}
