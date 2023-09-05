const initialState = {
  counter: 1,
  specifications: [],
};

const testRedux = (state = initialState, action) => {
  switch (action.type) {
    case "testTrue":
      return { counter: state.counter + 1 };
    case "testFalse":
      return { counter: state.counter - 1 };
    case "SAVE_SPECIFICATIONS":
      return {
        counter: 3, ...state,
        arr: state.specifications.push(action.payload)
      };
    default:
      return state;
  }
};

export default testRedux;