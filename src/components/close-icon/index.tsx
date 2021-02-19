import React, { SVGProps } from 'react';
import { ReactComponent as Close } from './close.svg';

type Props = SVGProps<SVGSVGElement>;

const CloseIcon = (props: Props) => {
  return (
    <Close {...props}/>
  );
};

export {
  CloseIcon,
}
