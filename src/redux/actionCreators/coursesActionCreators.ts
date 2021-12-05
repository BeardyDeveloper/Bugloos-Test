import { CourseAction } from 'redux/IRedux';

import * as actionTypes from '../actionTypes/actionTypes';

export const addCourses = (idsArray: string[]): CourseAction => {
  return {
    type: actionTypes.ADD_COURSE,
    idsArray,
  };
};

export const deleteCourses = () => {
  return {
    type: actionTypes.DELETE_COURSES,
  };
};
