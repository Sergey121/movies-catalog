import React, { useCallback, useEffect, useState } from 'react';
import styles from './popular.module.scss';
import { MoviesList } from '../../components/movies-list';
import { API } from '../../api';
import { Movie } from '../../models';
import { useHistory } from 'react-router-dom';
import { WatchLaterBtn } from '../../components/watch-later-btn';

const SessionKeys = {
  movies: 'movies',
  page: 'page',
}

const getItem = (key: string, defaultValue: any) => {
  const d = window.sessionStorage.getItem(key);
  if (d) {
    return JSON.parse(d);
  }
  return defaultValue;
}

const setItem = (key: string, data: any) => {
  const d = JSON.stringify(data);
  window.sessionStorage.setItem(key, d);
}

const PopularPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Movie[]>(getItem(SessionKeys.movies, []));
  const [page, setPage] = useState(getItem(SessionKeys.page, 1));

  const getData = async (p: number) => {
    try {
      setLoading(true);
      const res = await API.getList(p);
      const l = list.concat(res.results);
      setList(l);
      setItem(SessionKeys.movies, l);
      setItem(SessionKeys.page, p);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!list.length) {
      getData(1);
    }
  }, [])

  const handleSelectMovie = useCallback((movie: Movie) => {
    history.push(`/movie/${movie.id}`, {
      movie,
    });
  }, [history]);

  const handleLoadMore = () => {
    setPage(page + 1);
    getData(page + 1);
  };

  const handleRenderWatchLaterBtn = useCallback((movie: Movie) => {
    return (
      <WatchLaterBtn movie={movie}/>
    );
  }, []);

  if (loading && list.length === 0) {
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
      <h1 className={styles.title}>Popular</h1>
      <MoviesList
        onMovieSelected={handleSelectMovie}
        movies={list}
        movieExtraContent={handleRenderWatchLaterBtn}
      />
      <div className={styles.btnWrapper}>
        <button className={styles.btn} disabled={loading} onClick={handleLoadMore}>Load more</button>
      </div>
    </div>
  );
}

export {
  PopularPage,
}
