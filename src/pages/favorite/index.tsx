import React, { useCallback, useEffect, useState } from 'react';
import styles from './favorite.module.scss';
import { restoreData, STORE_KEYS } from '../../helpers';
import { MoviesList } from '../../components/movies-list';
import { Movie } from '../../models';
import { useHistory } from 'react-router-dom';

const FavoritePage = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = restoreData(STORE_KEYS.favoriteMovies, []);
    setMovies(movies);
  }, []);

  const handleSelectMovie = useCallback((movie: Movie) => {
    history.push(`/movie/${movie.id}`, {
      movie,
    });
  }, [history]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Favorite</h1>
      <MoviesList onMovieSelected={handleSelectMovie} movies={movies}/>
    </div>
  );
};

export {
  FavoritePage,
}
