import Avatar from 'assets/images/Author-2.png';
import Badge from 'assets/images/badge.png';
import ShapeLeft from 'assets/images/Shape (20).png';
import ShapeRight from 'assets/images/Shape (21).png';
import ArrowRight from 'assets/images/Shape-yellow (1).png';
import ShapeYellowLeft from 'assets/images/Shape-yellow (3).png';
import { BreadCrumb } from 'components/shared/breadCrumb/BreadCrumb';
import { FC } from 'react';

import styles from './RegistrationHeader.module.scss';

export const RegistrationHeader: FC = () => {
  return (
    <div className={styles.registration}>
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.content}>
          <BreadCrumb prevPathes="Home // " currentPath="Register" />
          <h6 className={styles.title}>
            Registration
            <p className={styles.titleInside}>Form</p>
          </h6>
        </div>
        <div className={styles.images}>
          <img src={ArrowRight} alt="" className={styles.arrowRight} />
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <img src={Badge} alt="badge" />
            </div>
          </div>
          <div className={styles.avatar}>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <img src={ShapeLeft} alt="" className={styles.shapeLeft} />
      <img src={ShapeYellowLeft} alt="" className={styles.shapeYellowLeft} />
      <img src={ShapeRight} alt="" className={styles.shapeRight} />
    </div>
  );
};
