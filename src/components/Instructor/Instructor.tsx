import Arrow from 'assets/images/Shape.png';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { FC } from 'react';

import styles from './Instructor.module.scss';

export const Instructor: FC = () => {
  return (
    <div className={styles.instructor}>
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.content}>
          <span>Become A Instructor</span>
          <h6 className={styles.title}>
            You can join with Edule as
            <p className={styles.titleInside}>a instructor?</p>
          </h6>
        </div>
        <img src={Arrow} alt="" className={styles.arrow} />
        <div className={styles.buttonWrapper}>
          <Button type={ButtonType.Success} label="Drop Information" />
        </div>
      </div>
    </div>
  );
};
