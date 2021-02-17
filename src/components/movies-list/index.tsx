import React, { useCallback } from 'react';
import styles from './movies-list.module.scss';
import { Movie } from '../../models';
import { MovieItem } from './movie-item';

type Props = {
  movies: Movie[];
  onMovieSelected?: (movie: Movie) => void;
}

const MoviesList = (props: Props) => {
  const { movies, onMovieSelected = () => {} } = props;

  const handleSelectMovie = useCallback((movie: Movie) => {
    onMovieSelected(movie);
  }, [onMovieSelected]);

  return (
    <div className={styles.wrapper}>
      {movies.map(m => {
        return (
          <MovieItem onMovieSelected={handleSelectMovie} key={m.id} movie={m}/>
        );
      })}
    </div>
  );
};

export {
  MoviesList,
}
