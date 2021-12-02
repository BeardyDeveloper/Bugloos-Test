import * as authActionTypes from '../actionTypes/actionTypes';
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
    case authActionTypes.ADD_COURSE:
      return {
        selectedCourses: state.selectedCourses?.push(action.id),
      };

    case authActionTypes.DELETE_COURSE:
      return {
        selectedCourses: state.selectedCourses?.filter(id => id === action.id),
      };

    default:
      return state;
  }
};

export default coursesReducer;
