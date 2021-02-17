import React, { useCallback } from 'react';
import styles from './movie-item.module.scss';
import { Movie } from '../../../models';
import { getFullImagePath } from '../../../helpers';
import { StarIcon } from '../../star-icon';
import { Bookmark } from './bookmark';

type Props = {
  movie: Movie;
  onMovieSelected: (movie: Movie) => void;
};

const MovieItem = (props: Props) => {
  const { movie, onMovieSelected } = props;

  const handleSelect = useCallback(() => {
    onMovieSelected(movie);
  }, [onMovieSelected, movie])

  return (
    <div className={styles.wrapper} style={{}} onClick={handleSelect}>
      <div className={styles.poster} style={{
        backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
      }}>
        <Bookmark className={styles.bookmark} selected={false}/>
      </div>
      <div className={styles.content}>
        <div className={styles.ratingWrapper}>
          <StarIcon className={styles.ratingStar}/>
          <span>{movie.vote_average}</span>
        </div>
        <div className={styles.title}>
          {movie.title}
        </div>
      </div>
    </div>
  );
};

export {
  MovieItem,
}
