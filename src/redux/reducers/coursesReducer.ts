/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable no-case-declarations */
import * as coursesActionTypes from '../actionTypes/actionTypes';
import { CourseAction } from '../IRedux';

// interface InitialState {
//   selectedCourses: string[] | any;
// }

const initialState = {
  selectedCourses: [],
};

const coursesReducer = (state = initialState, action: CourseAction) => {
  switch (action?.type) {
    case coursesActionTypes.ADD_COURSE:
      const updateStateInstance = { ...state };
      return {
        ...state,
        selectedCourses: [...updateStateInstance.selectedCourses, action?.id],
      };

    case coursesActionTypes.DELETE_COURSE:
      const deleteStateInstance = { ...state };
      const filteredArray = deleteStateInstance.selectedCourses.filter(
        (item: string) => item !== action?.id,
      );
      return {
        ...state,
        selectedCourses: filteredArray,
      };

    case coursesActionTypes.DELETE_ALL_COURSES:
      console.log(action);
      return { ...state, selectedCourses: [] };

    default:
      return state;
  }
};

export default coursesReducer;
