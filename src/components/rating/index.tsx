import React from 'react';
import styles from './rating.module.scss';
import { StarIcon } from '../star-icon';

type Props = {
  voteAverage: number;
}

const Rating = (props: Props) => {
  const { voteAverage } = props;
  return (
    <div className={styles.rating}>
      <StarIcon className={styles.ratingStar}/>
      <span>{voteAverage}</span>
    </div>
  );
}

export {
  Rating,
}
