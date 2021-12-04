import { FC } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHeart } from 'react-icons/ai';

import styles from './CopyRight.module.scss';

export const CopyRight: FC = () => {
  return (
    <div className={styles.copyRight}>
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.links}>
          <a href="/#" className={styles.link}>
            Terms of Service
          </a>
          <a href="/#" className={styles.secondaryLink}>
            Privacy
          </a>
          <a href="/#" className={styles.secondaryLink}>
            Policy
          </a>
          <a href="/#" className={styles.secondaryLink}>
            Sitemap
          </a>
          <a href="/#" className={styles.secondaryLink}>
            Security
          </a>
        </div>
        <p className={styles.madeBy}>
          © 2021{' '}
          <a href="/#" className={styles.madeBuLink}>
            EDULE
          </a>{' '}
          Made with{' '}
          <IconContext.Provider value={{ className: styles.icon }}>
            <div>
              <AiFillHeart />
            </div>
          </IconContext.Provider>{' '}
          by{' '}
          <a href="/#" className={styles.madeBuLink}>
            Codecarniva
          </a>
        </p>
      </div>
    </div>
  );
};
