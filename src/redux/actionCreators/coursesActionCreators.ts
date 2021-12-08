import { CourseAction } from 'redux/IRedux';

import * as actionTypes from '../actionTypes/actionTypes';

export const addCourse = (id: string): CourseAction => {
  console.log('id in action', id);
  return {
    type: actionTypes.ADD_COURSE,
    id,
  };
};

export const deleteCourse = (id: string): CourseAction => {
  return {
    type: actionTypes.DELETE_COURSE,
    id,
  };
};

export const deleteAllCourses = () => {
  return {
    type: actionTypes.DELETE_ALL_COURSES,
  };
};
