import React from 'react';
import styles from './nav-bar.module.scss';
import { ReactComponent as MenuIcon } from './menu.svg';
import { SearchInput } from './search-input';

const NavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.menuBtn}>
          <MenuIcon/>
        </button>
        <SearchInput/>
      </div>
    </nav>
  );
};

export {
  NavBar,
}
