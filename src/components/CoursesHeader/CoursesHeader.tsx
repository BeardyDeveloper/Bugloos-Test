import ShapeLeft from 'assets/images/Shape (4).png';
import CircleLeft from 'assets/images/Shape (5).png';
import ArrowYellowRight from 'assets/images/Shape-yellow (1).png';
import ShapeYellowLeft from 'assets/images/Shape-yellow (3).png';
import Avatar from 'assets/images/Slider.png';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { FC } from 'react';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import { BsPlay } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi';

import styles from './CoursesHeader.module.scss';

export const CoursesHeader: FC = () => {
  return (
    <div className={styles.coursesHeader}>
      <div className={['container', styles.container].join(' ')}>
        <div className={styles.content}>
          <span className={styles.miniTitle}>Start your favourite course</span>
          <h6 className={styles.title}>
            Now learning from anywhere, and build your
            <p className={styles.titleInside}>bright career.</p>
          </h6>
          <p className={styles.subTitle}>
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <div className={styles.buttonWrapper}>
            <Button
              type={ButtonType.Success}
              label="Start A Course"
              onClick={() => console.log('start a acourse clicked')}
            />
          </div>
        </div>

        <div className={styles.images}>
          <img src={Avatar} alt="avatar" className={styles.avatar} />
          <img src={ArrowYellowRight} alt="" className={styles.arrowRight} />
          <div className={styles.badge}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <div>
                <GiOpenBook />
              </div>
            </IconContext.Provider>
            <span className={styles.badgeCount}>1,235</span>
            <span className={styles.badgeValue}>Courses</span>
          </div>
        </div>
      </div>

      <div className={styles.rating}>
        <div className={styles.rate}>
          <span className={styles.rateCount}>4.8</span>
          <IconContext.Provider value={{ className: styles.star }}>
            <div>
              <AiFillStar />
            </div>
          </IconContext.Provider>
        </div>
        <span className={styles.ratingValue}>Rating (86K)</span>
      </div>

      <img src={ShapeYellowLeft} alt="" className={styles.shapeYellowLeft} />

      <div className={styles.circleLeft}>
        <img src={CircleLeft} alt="" />
        <IconContext.Provider value={{ className: styles.circleLeftIcon }}>
          <div>
            <BsPlay />
          </div>
        </IconContext.Provider>
      </div>

      <img src={ShapeLeft} alt="" className={styles.shapeLeft} />
    </div>
  );
};
