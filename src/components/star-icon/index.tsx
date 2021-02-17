import React, { SVGProps } from 'react';
import { ReactComponent as Star } from './star.svg';

type Props = SVGProps<SVGSVGElement>;

const StarIcon = (props: Props) => {
  return (
    <Star {...props}/>
  );
};

export {
  StarIcon,
}
