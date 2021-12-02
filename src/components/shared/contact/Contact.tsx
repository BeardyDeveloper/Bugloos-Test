import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import styles from './Contact.module.scss';

export enum ContactType {
  Row,
  Column,
}

export interface ContactProps {
  type: ContactType;
}

export const Contact: FC<ContactProps> = props => {
  const { type } = props;

  return (
    <div
      className={
        type === ContactType.Row ? styles.rowContainer : styles.columnContainer
      }
    >
      <div className={styles.contactItem}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <FiPhoneCall />
          </div>
        </IconContext.Provider>
        <span className={styles.label}>(970) 262-1413</span>
      </div>
      <div className={styles.contactItem}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div>
            <FiMail />
          </div>
        </IconContext.Provider>
        <span className={styles.label}>address@gmail.com</span>
      </div>
    </div>
  );
};
