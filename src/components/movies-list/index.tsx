import React, { useCallback } from 'react';
import styles from './movies-list.module.scss';
import { Movie } from '../../models';
import { MovieItem } from './movie-item';

type Props = {
  movies: Movie[];
  onMovieSelected?: (movie: Movie) => void;
  movieExtraContent?: (movie: Movie) => React.ReactNode;
}

const MoviesList = (props: Props) => {
  const { movies, onMovieSelected = () => {}, movieExtraContent = () => null } = props;

  const handleSelectMovie = useCallback((movie: Movie) => {
    onMovieSelected(movie);
  }, [onMovieSelected]);

  return (
    <div className={styles.wrapper}>
      {movies.map((m, index) => {
        return (
          <MovieItem extraContent={movieExtraContent} onMovieSelected={handleSelectMovie} key={index} movie={m}/>
        );
      })}
    </div>
  );
};

export {
  MoviesList,
}
