/* eslint-disable import/no-cycle */
import { Carousel, CarouselSlide } from 'components/Carousel/Carousel';
import { Course, CourseCard } from 'components/CourseCard/CourseCard';
import { Button, ButtonType } from 'components/shared/buttons/Button';
import { TextField } from 'components/shared/textField/TextField';
import { useFilterCourses } from 'hooks/useFilterCourses';
import { FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addCourse,
  deleteCourse,
} from 'redux/actionCreators/coursesActionCreators';

import styles from './CoursesGrid.module.scss';

export interface CourseProps extends Course {
  id: string;
}

export interface CoursesGridProps {
  slides: CarouselSlide[];
  courses: CourseProps[];
}

export const CoursesGrid: FC<CoursesGridProps> = props => {
  const { slides, courses } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCourseIds = useSelector(
    (state: any) => state.courses.selectedCourses,
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState('4');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [filteredCourses] = useFilterCourses({
    courses,
    slides,
    selectedCategoryId,
    searchKeyword,
  });

  const onSeve = () => {
    navigate('/Courses');
  };

  return (
    <div className={['container', styles.container].join(' ')}>
      <div className={styles.searchBox}>
        <h6 className={styles.title}>
          All<p className={styles.titleInside}>Courses</p> of Edule
        </h6>
        <div className={styles.textFieldWrapper}>
          <TextField
            type="text"
            highlightIcon={true}
            icon={<BiSearch />}
            value={searchKeyword}
            placeholder="Search your course"
            onChange={e => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>
      <Carousel
        slides={slides}
        onClick={slide => setSelectedCategoryId(slide.id)}
        selectedId={selectedCategoryId}
      />
      {filteredCourses != null && filteredCourses.length > 0 ? (
        <div className={styles.courses}>
          {Array.isArray(filteredCourses) ? (
            filteredCourses?.map((course: CourseProps) => (
              <div className={styles.courseWrapper} key={course.id}>
                <CourseCard
                  {...course}
                  selected={
                    selectedCourseIds &&
                    selectedCourseIds!.find((id: string) => id === course.id)
                  }
                  onClick={() =>
                    selectedCourseIds.find((id: any) => id === course?.id)
                      ? dispatch(deleteCourse(course?.id))
                      : dispatch(addCourse(course?.id))
                  }
                />
              </div>
            ))
          ) : (
            <CourseCard
              {...filteredCourses}
              selected={
                selectedCourseIds &&
                selectedCourseIds!.find(
                  (id: string) => id === filteredCourses.id,
                )
              }
              onClick={() =>
                selectedCourseIds.find((id: any) => id === filteredCourses?.id)
                  ? dispatch(deleteCourse(filteredCourses?.id))
                  : dispatch(addCourse(filteredCourses?.id))
              }
            />
          )}
        </div>
      ) : (
        <div className={styles.notFound}>noutFound</div>
      )}
      <div className={styles.buttonWrapper}>
        <Button
          type={ButtonType.Info}
          label="Save Courses"
          disabled={!selectedCourseIds}
          onClick={onSeve}
        />
      </div>
    </div>
  );
};
