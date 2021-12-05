import { CourseCard } from 'components/CourseCard/CourseCard';
import { CourseProps } from 'components/CoursesGrid/CoursesGrid';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { PageTemplate } from 'layout/PageTemplate';
import { courses } from 'pages/index/data';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { deleteCourses } from 'redux/actionCreators/coursesActionCreators';

import styles from './CoursesPage.module.scss';

export const CoursesPage: FC = () => {
  const selectedCoursesIds = useSelector(
    (state: any) => state.courses.selectedCourses,
  );

  const selectedCourses = courses.filter(course =>
    selectedCoursesIds?.includes(course.id),
  );

  return (
    <PageTemplate>
      <div className="container">
        {selectedCourses != null && selectedCoursesIds != null ? (
          <div className={styles.content}>
            <div className={styles.courses}>
              {Array.isArray(selectedCourses) ? (
                selectedCourses?.map((course: CourseProps) => (
                  <div className={styles.courseWrapper} key={course?.id}>
                    <CourseCard {...course} />
                  </div>
                ))
              ) : (
                <div className={styles.courseWrapper}>
                  <CourseCard {...selectedCourses} />
                </div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                type={ButtonType.Info}
                label="Delete Courses"
                onClick={() => deleteCourses()}
              />
            </div>
          </div>
        ) : (
          <div className={styles.notFound}>no selected course founded</div>
        )}
      </div>
    </PageTemplate>
  );
};
