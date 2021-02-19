import React, { useEffect, useState } from 'react';
import styles from './favorite.module.scss';
import { restoreData, STORE_KEYS } from '../../helpers';
import { MoviesList } from '../../components/movies-list';

const FavoritePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = restoreData(STORE_KEYS.favoriteMovies, []);
    setMovies(movies);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Favorite</h1>
      <MoviesList movies={movies}/>
    </div>
  );
};

export {
  FavoritePage,
}
