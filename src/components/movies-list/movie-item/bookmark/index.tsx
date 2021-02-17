import React from 'react';
import styles from './bookmark.module.scss';
import { ReactComponent as TurnedIcon } from './turned_in.svg';

type Props = {
  selected?: boolean;
  className?: string;
}

const Bookmark = (props: Props) => {
  const { selected, className = '' } = props;
  return (
    <div className={`${styles.wrapper} ${className} ${selected ? styles.selected : ''}`}
         title={`${selected ? 'Remove from favorite' : 'Add to favorite'}`}>
      <TurnedIcon/>
    </div>
  );
};

export {
  Bookmark,
}
