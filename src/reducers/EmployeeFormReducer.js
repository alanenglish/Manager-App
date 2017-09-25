import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Thursday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name, value: 'Jane }
      // below is not array, it is key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
