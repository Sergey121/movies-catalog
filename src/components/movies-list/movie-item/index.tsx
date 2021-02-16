import React from 'react';
import styles from './movie-item.module.scss';
import { Movie } from '../../../models';
import { getFullImagePath } from '../../../helpers';

type Props = {
  movie: Movie;
};

const MovieItem = (props: Props) => {
  const { movie } = props;

  return (
    <div className={styles.wrapper} style={{
      backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
    }}>

    </div>
  );
};

export {
  MovieItem,
}
