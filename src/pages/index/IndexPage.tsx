import { CoursesGrid } from 'components/CoursesGrid/CoursesGrid';
import { CoursesHeader } from 'components/CoursesHeader/CoursesHeader';
import { Instructor } from 'components/Instructor/Instructor';
import { PageTemplate } from 'layout/PageTemplate';
import { FC } from 'react';

import { courses, slides } from './data';

export const IndexPage: FC = () => {
  return (
    <PageTemplate>
      <CoursesHeader />
      <CoursesGrid slides={slides} courses={courses} />
      <Instructor />
    </PageTemplate>
  );
};
