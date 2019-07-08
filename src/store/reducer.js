const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "INC_BY_5":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "DEC_BY_5":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case "DELETE_RESULT":
      const updatedArr = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArr
      };
  }
  return state;
};

export default reducer;
