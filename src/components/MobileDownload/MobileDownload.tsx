import AppleStore from 'assets/images/AppleStore.png';
import GooglePlaye from 'assets/images/GooglePlaye.png';
import Arrow from 'assets/images/white-arrow.png';
import { FC } from 'react';

import styles from './MobileDownload.module.scss';

export const MobileDownload: FC = () => {
  return (
    <div className={styles.mobileDownload}>
      <div className={styles.backgroundImage} />
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.content}>
          <span>Ready to start?</span>
          <h6>Download our mobile app. for easy to start your course.</h6>
        </div>
        <img src={Arrow} alt="" className={styles.arrow} />
        <div className={styles.links}>
          <a href="/#" className={styles.link}>
            <img
              src={GooglePlaye}
              alt="google play"
              className={styles.linkImage}
            />
          </a>
          <a href="/#" className={styles.link}>
            <img
              src={AppleStore}
              alt="apple store"
              className={styles.linkImage}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
