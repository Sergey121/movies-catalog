export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieCollection = {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
