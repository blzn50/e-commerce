const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'DATA_FETCH':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productsReducer;
