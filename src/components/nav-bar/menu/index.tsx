import React from 'react';
import styles from './menu.module.scss';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from './close.svg';
import { Link } from 'react-router-dom';

type Props = {
  opened: boolean;
  onClose: () => void;
};

const Menu = (props: Props) => {
  const { onClose, opened } = props;

  return createPortal(
    <div className={`${styles.wrapper} ${opened ? styles.opened : ''}`}>
      <div className={styles.content}>
        <button className={styles.closeWrapper} onClick={onClose}>
          <CloseIcon className={styles.close}/>
        </button>
        <nav className={styles.nav}>
          <div className={styles.navItemWrapper}>
            <Link onClick={onClose} className={styles.navItem} to={'/'}>
              Popular
            </Link>
          </div>
          <div className={styles.navItemWrapper}>
            <Link onClick={onClose} className={styles.navItem} to={'/favorite'}>
              Favorite
            </Link>
          </div>
          <div className={styles.navItemWrapper}>
            <Link onClick={onClose} className={styles.navItem} to={'/watch-later'}>
              Watch later
            </Link>
          </div>
        </nav>
      </div>
    </div>,
    document.querySelector('#root') as HTMLDivElement,
  );
};

export {
  Menu,
}
