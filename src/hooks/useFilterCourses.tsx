/* eslint-disable import/no-cycle */
import { CoursesGridProps } from 'components/CoursesGrid/CoursesGrid';
import { useEffect, useState } from 'react';

interface UseFilterCoursesProps extends CoursesGridProps {
  searchKeyword: string;
  selectedCategoryId: string;
  selectedCourseIds: string[];
}

export const useFilterCourses = (props: UseFilterCoursesProps) => {
  const { slides, courses, searchKeyword, selectedCategoryId } = props;

  const [filteredCourses, setFilteredCourses] = useState<any>([]);

  useEffect(() => {
    if (searchKeyword.length > 0) {
      const filtereds = courses.filter(course =>
        course.title.toLowerCase().includes(searchKeyword.toLowerCase()),
      );
      setFilteredCourses(filtereds);
    } else {
      setFilteredCourses(courses);
    }
  }, [searchKeyword]);

  useEffect(() => {
    if (selectedCategoryId === '4') {
      setFilteredCourses(courses);
    } else {
      const selectedCategory = slides.find(
        slide => slide.id === selectedCategoryId,
      );
      const filtereds = courses.filter(
        course => course.label === selectedCategory?.label,
      );
      setFilteredCourses(filtereds);
    }
  }, [selectedCategoryId]);

  return [filteredCourses];
};
