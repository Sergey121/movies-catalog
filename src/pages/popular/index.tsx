import React, { useCallback, useEffect, useState } from 'react';
import styles from './popular.module.scss';
import { MoviesList } from '../../components/movies-list';
import { API } from '../../api';
import { Movie } from '../../models';
import { useHistory } from 'react-router-dom';
import { WatchLaterBtn } from '../../components/watch-later-btn';

const PopularPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await API.getList(page);
        setList(list.concat(res.results));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page]);

  const handleSelectMovie = useCallback((movie: Movie) => {
    history.push(`/movie/${movie.id}`, {
      movie,
    });
  }, [history]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

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
