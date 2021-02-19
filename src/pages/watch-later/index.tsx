import React, { useCallback, useEffect, useState } from 'react';
import styles from './watch-later.module.scss';
import { restoreData, STORE_KEYS } from '../../helpers';
import { MoviesList } from '../../components/movies-list';
import { Movie } from '../../models';
import { useHistory } from 'react-router-dom';

const WatchLaterPage = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = restoreData(STORE_KEYS.watchLaterMovies, []);
    setMovies(movies);
  }, []);

  const handleSelectMovie = useCallback((movie: Movie) => {
    history.push(`/movie/${movie.id}`, {
      movie,
    });
  }, [history]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Watch later</h1>
      <MoviesList onMovieSelected={handleSelectMovie} movies={movies}/>
    </div>
  );
};

export {
  WatchLaterPage,
}
