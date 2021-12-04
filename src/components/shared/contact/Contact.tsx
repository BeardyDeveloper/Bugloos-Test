import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import styles from './Contact.module.scss';

export enum ContactType {
  Row,
  Column,
  ColumnHighlight,
}

export interface ContactProps {
  type: ContactType;
  hideArrows?: boolean;
  className?: string;
}

export const Contact: FC<ContactProps> = props => {
  const { type, hideArrows, className } = props;

  const rowContactClassName = () => {
    if (hideArrows) {
      return styles.rowContainerNoArrows;
    } else {
      return styles.rowContainer;
    }
  };

  return (
    <div
      className={
        type === ContactType.Row
          ? [rowContactClassName(), className].join(' ')
          : [styles.columnContainer, className].join(' ')
      }
    >
      <div className={styles.contactItem}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <FiPhoneCall />
          </div>
        </IconContext.Provider>
        <span
          className={
            type === ContactType.ColumnHighlight
              ? styles.labelHighlight
              : styles.label
          }
        >
          (970) 262-1413
        </span>
      </div>
      <div className={styles.contactItem}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <FiMail />
          </div>
        </IconContext.Provider>
        <span
          className={
            type === ContactType.ColumnHighlight
              ? styles.labelHighlight
              : styles.label
          }
        >
          address@gmail.com
        </span>
      </div>
    </div>
  );
};
