import React from 'react';
import styles from './movies-list.module.scss';
import { Movie } from '../../models';
import { MovieItem } from './movie-item';

type Props = {
  movies: Movie[];
}

const MoviesList = (props: Props) => {
  const { movies } = props;
  return (
    <div className={styles.wrapper}>
      {movies.map(m => {
        return (
          <MovieItem key={m.id} movie={m}/>
        );
      })}
    </div>
  );
};

export {
  MoviesList,
}
