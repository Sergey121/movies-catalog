import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import styles from './search-input.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';
import { SearchLine } from './search-line';
import { Movie } from '../../../models';
import { API } from '../../../api';
import { useOnClickOutside } from '../../../hooks/useClickOutside';

const SearchInput = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useOnClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const handleChangeText = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const getMovies = useCallback(debounce(async (search) => {
    if (!search) {
      setMovies([]);
      return;
    }
    try {
      setLoading(true);
      const response = await API.searchMovie(search);
      setMovies(response.results);
      setLoading(false);
      setOpen(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setMovies([]);
    }
  }, 300), []);

  useEffect(() => {
    getMovies(search);
  }, [search]);

  const listContent = useMemo(() => {
    if (loading) {
      return (
        <div className={styles.listWrapper}>
          <div className={styles.loading}>
            Loading...
          </div>
        </div>
      );
    }

    if (movies.length) {
      return (
        <div className={styles.listWrapper}>
          {movies.map(m => {
            return (
              <SearchLine key={m.id} movie={m}/>
            );
          })}
        </div>
      );
    }

    return null;
  }, [loading, movies]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <input onFocus={() => setOpen(true)} value={search} onChange={handleChangeText}
             className={`${styles.input} ${open ? styles.opened : ''}`} type="text"/>
      <div className={styles.searchIconWrapper}>
        <SearchIcon className={styles.searchIcon}/>
      </div>
      {open && listContent}
    </div>
  );
};

export {
  SearchInput,
}
