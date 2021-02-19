import React, { useEffect, useState } from 'react';
import styles from './watch-later.module.scss';
import { restoreData, STORE_KEYS } from '../../helpers';
import { MoviesList } from '../../components/movies-list';

const WatchLaterPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = restoreData(STORE_KEYS.watchLaterMovies, []);
    setMovies(movies);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Watch later</h1>
      <MoviesList movies={movies}/>
    </div>
  );
};

export {
  WatchLaterPage,
}
