import React, { useCallback, useMemo, useState } from 'react';
import styles from './watch-later-btn.module.scss';
import { Movie } from '../../models';
import { ReactComponent as AddIcon } from './add.svg';
import { ReactComponent as RemoveIcon } from './remove.svg';
import { restoreData, STORE_KEYS, storeData } from '../../helpers';

type Props = {
  movie: Movie;
}

const WatchLaterBtn = (props: Props) => {
  const { movie } = props;

  const getMovies: () => Movie[] = useCallback(() => restoreData(STORE_KEYS.watchLaterMovies, []), []);

  const [movies, setMovies] = useState<Movie[]>(getMovies());

  const isExist = useMemo(() => {
    return !!movies.find(m => m.id === movie.id);
  }, [movie, movies]);

  const handleRemove = useCallback((e) => {
    e.stopPropagation();

    const index = getMovies().findIndex(m => m.id === movie.id);

    if (index !== -1) {
      movies.splice(index, 1);
      setMovies([...movies]);
      storeData(STORE_KEYS.watchLaterMovies, movies);
    }
  }, [movie, movies]);

  const handleAdd = useCallback((e) => {
    e.stopPropagation();

    const d = getMovies().concat(movie);
    setMovies(d);
    storeData(STORE_KEYS.watchLaterMovies, d);
  }, [movie, movies]);

  return (
    <button className={styles.btn} onClick={isExist ? handleRemove : handleAdd}>
      {isExist ? <RemoveIcon/> : <AddIcon/>}
      <span className={styles.title}>Watchlist</span>
    </button>
  );
}

export {
  WatchLaterBtn,
}
