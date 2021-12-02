import { FC } from 'react';

import styles from './BreadCrumb.module.scss';

export interface BreadCrumbProps {
  prevPathes: string;
  currentPath: string;
}

export const BreadCrumb: FC<BreadCrumbProps> = props => {
  const { prevPathes, currentPath } = props;

  return (
    <div className={styles.container}>
      <p className={styles.breadCrumb}>
        {prevPathes}
        <span>{currentPath}</span>
      </p>
    </div>
  );
};
