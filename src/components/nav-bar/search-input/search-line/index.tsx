import React from 'react';
import styles from './search-line.module.scss';
import { StarIcon } from '../../../star-icon';
import { Movie } from '../../../../models';
import { getFullImagePath } from '../../../../helpers';

type Props = {
  movie: Movie;
};

const SearchLine = (props: Props) => {
  const { movie } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster} style={{
        backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
      }} />
      <div className={styles.content}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.rating}>
          <StarIcon className={styles.ratingStar}/>
          <span>{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export {
  SearchLine,
}
