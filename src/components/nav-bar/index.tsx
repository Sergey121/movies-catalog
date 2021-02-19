import React, { useCallback, useState } from 'react';
import styles from './nav-bar.module.scss';
import { ReactComponent as MenuIcon } from './menu.svg';
import { SearchInput } from './search-input';
import { Menu } from './menu';

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setMenuOpened(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.menuBtn}>
          <MenuIcon onClick={handleOpenMenu}/>
        </button>
        <SearchInput/>
      </div>
      <Menu opened={menuOpened} onClose={handleCloseMenu}/>
    </nav>
  );
};

export {
  NavBar,
}
