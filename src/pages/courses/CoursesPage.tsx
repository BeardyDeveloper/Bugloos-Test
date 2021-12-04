import { CoursesHeader } from 'components/CoursesHeader/CoursesHeader';
import { PageTemplate } from 'layout/PageTemplate';
import { FC } from 'react';

import styles from './CoursesPage.module.scss';

export const CoursesPage: FC = () => {
  return (
    <PageTemplate>
      <CoursesHeader />
    </PageTemplate>
  );
};
