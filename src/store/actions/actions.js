export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INC_BY_5 = "INC_BY_5";
export const DEC_BY_5 = "DEC_BY_5";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const incBy5 = value => {
  return {
    type: INC_BY_5,
    value: value
  };
};

export const decBy5 = value => {
  return {
    type: DEC_BY_5,
    value: value
  };
};

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
