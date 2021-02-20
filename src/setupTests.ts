// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { Movie } from './models';
import { WebVitalsGlobal } from 'web-vitals/src/types';

declare global {
  interface Window {
    MOVIE: Movie;
  }
}

window.MOVIE = {
  id: 123,
  vote_average: 5.6,
  overview: 'Some description',
  title: 'Some title',
  poster_path: '/poster/path.png',
  backdrop_path: null,
  adult: false,
  genre_ids: [],
  original_language: 'en',
  original_title: 'Some title',
  popularity: 100,
  release_date: '2020-02-10T00:00',
  video: true,
  vote_count: 1000,
};
