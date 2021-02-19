import React, { useRef } from 'react';
import styles from './trailer-popup.module.scss';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../close-icon';

type Props = {
  videoId: string;
  onClose: () => void;
};

const TrailerPopup = (props: Props) => {
  const { videoId, onClose } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(contentRef, onClose);

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.content} ref={contentRef}>
        <button className={styles.closeBtn} onClick={onClose}><CloseIcon/></button>
        <iframe
          className={styles.frame}
          id="ytplayer"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
        />
      </div>
    </div>,
    document.getElementById('root') as HTMLDivElement,
  );
};

export {
  TrailerPopup,
}
