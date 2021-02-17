import React, { useCallback, useEffect, useState } from 'react';
import styles from './popular.module.scss';
import { MoviesList } from '../../components/movies-list';
import { API } from '../../api';
import { Movie } from '../../models';
import { useHistory } from 'react-router-dom';

const PopularPage = () => {
  const history = useHistory();
  const [list, setList] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.getList();
        setList(res.results);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const handleSelectMovie = useCallback((movie: Movie) => {
    history.push(`/movie/${movie.id}`, {
      movie,
    });
  }, [history]);

  return (
    <div className={styles.wrapper}>
      <MoviesList onMovieSelected={handleSelectMovie} movies={list}/>
    </div>
  );
}

export {
  PopularPage,
}
