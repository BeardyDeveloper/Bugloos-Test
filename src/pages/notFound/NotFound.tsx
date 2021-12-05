import NotFoundImg from 'assets/images/notfound.jpg';
import { PageTemplate } from 'layout/PageTemplate';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound: FC = () => (
  <PageTemplate>
    <div className={styles.container}>
      <img src={NotFoundImg} alt="notfound" className={styles.image} />
      <Link to="/" className={styles.link}>
        Go Home
      </Link>
    </div>
  </PageTemplate>
);
