import React, { useCallback } from 'react';
import styles from './movie-item.module.scss';
import { Movie } from '../../../models';
import { getFullImagePath } from '../../../helpers';
import { Bookmark } from '../../bookmark';
import { Rating } from '../../rating';

type Props = {
  movie: Movie;
  onMovieSelected: (movie: Movie) => void;
  extraContent?: (movie: Movie) => React.ReactNode;
};

const MovieItem = (props: Props) => {
  const { movie, onMovieSelected, extraContent } = props;

  const handleSelect = useCallback(() => {
    onMovieSelected(movie);
  }, [onMovieSelected, movie])

  return (
    <div className={styles.wrapper} style={{}} onClick={handleSelect}>
      <div className={styles.poster} style={{
        backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
      }}>
        <Bookmark className={styles.bookmark} movie={movie}/>
      </div>
      <div className={styles.content}>
        <Rating voteAverage={movie.vote_average}/>
        <div className={styles.title}>
          {movie.title}
        </div>
        {extraContent && extraContent(movie)}
      </div>
    </div>
  );
};

export {
  MovieItem,
}
