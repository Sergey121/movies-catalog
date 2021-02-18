import axios from 'axios';
import { Movie, MovieCollection } from '../models';

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

const getList = async (page = 1): Promise<MovieCollection> => {
  return (await _get('/movie/popular', {
    page,
  })).data;
};

const searchMovie = async (query: string): Promise<MovieCollection> => {
  return (await _get('/search/movie', {
    query: encodeURI(query),
  })).data;
}

const getMovie = async (id: number): Promise<Movie> => {
  return (await _get(`/movie/${id}`)).data;
}

export const API = {
  getList,
  searchMovie,
  getMovie,
}
