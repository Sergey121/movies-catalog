import React, { useCallback } from 'react';
import styles from './bookmark.module.scss';
import { ReactComponent as TurnedIcon } from './turned_in.svg';

type Props = {
  selected?: boolean;
  className?: string;
}

const Bookmark = (props: Props) => {
  const { selected, className = '' } = props;

  const handleRemove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleAdd = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div className={`${styles.wrapper} ${className} ${selected ? styles.selected : ''}`}
         title={`${selected ? 'Remove from favorite' : 'Add to favorite'}`}
         onClick={selected ? handleRemove : handleAdd}
    >
      <TurnedIcon/>
    </div>
  );
};

export {
  Bookmark,
}
