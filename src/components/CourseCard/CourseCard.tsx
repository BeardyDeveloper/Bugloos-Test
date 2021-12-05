import { Button, ButtonType } from 'components/shared/buttons/Button';
import { FC } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineRead } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import StarRatings from 'react-star-ratings';

import styles from './CourseCard.module.scss';

interface Author {
  imageUrl: string;
  name: string;
}

export interface Course {
  bannerUrl: string;
  author: Author;
  label: string;
  title: string;
  time: string;
  lectures: number;
  price: string;
  discount?: string;
  rate: number;
  selected?: boolean;
}

interface CourseCardProps extends Course {
  className?: string;
  onClick?: (args?: any) => void;
  onLabelClick?: (args?: any) => void;
}

export const CourseCard: FC<CourseCardProps> = props => {
  const {
    bannerUrl,
    author,
    label,
    title,
    time,
    lectures,
    price,
    discount,
    rate,
    selected,
    className,
    onClick,
    onLabelClick,
  } = props;

  const cardClassName = () => {
    if (selected) {
      return styles.selectedCard;
    } else {
      return styles.unSelectedCard;
    }
  };

  return (
    <div className={[cardClassName(), className].join(' ')} onClick={onClick}>
      <div className={styles.container}>
        <div
          style={{ backgroundImage: `url(${bannerUrl})` }}
          className={styles.banner}
        />
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div
                style={{ backgroundImage: `url(${author?.imageUrl})` }}
                className={styles.authorImage}
              />
              <span className={styles.authorName}>{author?.name}</span>
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                type={ButtonType.Info}
                label={label}
                onClick={onLabelClick}
              />
            </div>
          </div>
          <p className={styles.title}>{title}</p>
          <div className={styles.row}>
            <div className={styles.column}>
              <IconContext.Provider value={{ className: styles.icon }}>
                <div>
                  <FiClock />
                </div>
              </IconContext.Provider>
              <span className={styles.columnValue}>{time}</span>
            </div>
            <div className={styles.column}>
              <IconContext.Provider value={{ className: styles.icon }}>
                <div>
                  <AiOutlineRead />
                </div>
              </IconContext.Provider>
              <span
                className={styles.columnValue}
              >{`${lectures} Lectures`}</span>
            </div>
          </div>
          <div className={styles.highlightRow}>
            <div className={styles.priceBox}>
              <span className={styles.price}>{price}</span>
              {discount && <span className={styles.discount}>{discount}</span>}
            </div>
            <div className={styles.column}>
              <span className={styles.rateValue}>{rate}</span>
              <StarRatings
                rating={rate}
                starDimension="15px"
                starSpacing="0"
                starRatedColor="#ffa200"
                starEmptyColor="#d0d0d0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
