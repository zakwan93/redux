import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const incBy5 = value => {
  return {
    type: actionTypes.INC_BY_5,
    value: value
  };
};

export const decBy5 = value => {
  return {
    type: actionTypes.DEC_BY_5,
    value: value
  };
};
