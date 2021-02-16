import React from 'react';
import styles from './search-input.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text"/>
      <div className={styles.searchIconWrapper}>
        <SearchIcon className={styles.searchIcon}/>
      </div>
    </div>
  );
};

export {
  SearchInput,
}
