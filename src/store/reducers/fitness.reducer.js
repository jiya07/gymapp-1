import {fitnessState as initialState} from './initialState';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utils";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BMI_RECORDS:
      return updateObject(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
