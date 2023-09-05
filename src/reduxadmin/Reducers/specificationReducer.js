const initialSpecificationState = [];

const specificationReducer = (state = initialSpecificationState, action) => {
  switch (action.type) {
    case 'SAVE_SPECIFICATION_DATA':
      return [...state, action.payload];
    default:
      return state;
  }
}
export default specificationReducer;