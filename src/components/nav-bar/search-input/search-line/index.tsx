import React, { useCallback } from 'react';
import styles from './search-line.module.scss';
import { Movie } from '../../../../models';
import { getFullImagePath } from '../../../../helpers';
import { Rating } from '../../../rating';

type Props = {
  movie: Movie;
  onSelected: (movie: Movie) => void;
};

const SearchLine = (props: Props) => {
  const { movie, onSelected } = props;

  const handleClick = useCallback(() => {
    onSelected(movie);
  }, [movie, onSelected]);

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.poster} style={{
        backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
      }} />
      <div className={styles.content}>
        <div className={styles.title}>{movie.title}</div>
        <Rating voteAverage={movie.vote_average}/>
      </div>
    </div>
  );
};

export {
  SearchLine,
}
