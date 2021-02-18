import React, { useCallback, useMemo, useState } from 'react';
import styles from './bookmark.module.scss';
import { ReactComponent as TurnedIcon } from './turned_in.svg';
import { restoreData, STORE_KEYS, storeData } from '../../helpers';
import { Movie } from '../../models';

type Props = {
  className?: string;
  movie: Movie;
}

const Bookmark = (props: Props) => {
  const { movie, className = '' } = props;

  const [movies, setMovies] = useState<Movie[]>(restoreData(STORE_KEYS.favoriteMovies, []));

  const selected = useMemo(() => {
    return !!movies.find(m => m.id === movie.id);
  }, [movie, movies]);

  const handleRemove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const data: Movie[] = restoreData(STORE_KEYS.favoriteMovies, []);
    const index = data.findIndex(m => m.id === movie.id);

    if (index !== -1) {
      data.splice(index, 1);
      setMovies(data);
      storeData(STORE_KEYS.favoriteMovies, data);
    }
  }, [movie]);

  const handleAdd = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = restoreData(STORE_KEYS.favoriteMovies, []);
    data.push(movie);
    setMovies(data);
    storeData(STORE_KEYS.favoriteMovies, data);
  }, [movie]);

  return (
    <div className={`${styles.wrapper} ${className} ${selected ? styles.selected : ''}`}
         title={`${selected ? 'Remove from favorite' : 'Add to favorite'}`}
         onClick={selected ? handleRemove : handleAdd}
    >
      <TurnedIcon/>
    </div>
  );
};

export {
  Bookmark,
}
