import React, { useEffect, useState } from 'react';
import styles from './movie-details.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { Movie } from '../../models';
import { API } from '../../api';
import { getFullImagePath } from '../../helpers';
import { Rating } from '../../components/rating';
import { Bookmark } from '../../components/bookmark';

type StateParams = {
  movie?: Movie;
}

type Params = {
  id: string;
};
const MovieDetailsPage = () => {
  const { state } = useLocation<StateParams>();
  const params = useParams<Params>();

  const [loadingMovie, setLoadingMovie] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    if (state && state.movie) {
      setMovie(state.movie)
    } else {
      const getMovie = async (id: number) => {
        try {
          setLoadingMovie(true);

          const m = await API.getMovie(id);
          setMovie(m);
          setLoadingMovie(false);
        } catch (e) {
          console.log(e);
          setLoadingMovie(false);
        }
      };

      getMovie(+params.id);
    }
  }, [state]);

  if (loadingMovie || !movie) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.loading}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.poster} style={{
          backgroundImage: `url(${getFullImagePath(movie.poster_path)})`
        }}>
          <Bookmark className={styles.bookmark} movie={movie}/>
        </div>
        <div className={styles.aboutMovie}>
          <h1>{movie.title}</h1>
          <div className={styles.subtitle}>{movie.overview}</div>
          <Rating voteAverage={movie.vote_average}/>
        </div>
      </div>
    </div>
  );
};

export {
  MovieDetailsPage,
}
