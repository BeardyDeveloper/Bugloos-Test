import * as coursesActionTypes from '../actionTypes/actionTypes';
import { CourseAction } from '../IRedux';

interface InitialState {
  selectedCourses: string[] | null;
}

const initialState: InitialState = {
  selectedCourses: null,
};

const coursesReducer = (
  action: CourseAction,
  state: InitialState = initialState,
) => {
  switch (action?.type) {
    case coursesActionTypes.ADD_COURSE:
      return { ...state, selectedCourses: action?.idsArray };
    case coursesActionTypes.DELETE_COURSES:
      return { selectedCourses: null };

    default:
      return state;
  }
};

export default coursesReducer;
