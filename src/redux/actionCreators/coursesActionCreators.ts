import * as actionTypes from '../actionTypes/actionTypes';

interface Courses {
  type: string;
  [key: string]: string;
}

export const addCourse = (id: string): Courses => {
  return {
    type: actionTypes.ADD_COURSE,
    id,
  };
};
