export const addToCart = product => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE',
    payload: product,
  };
};

export const removeAllFromCart = product => {
  return {
    type: 'REMOVE_ALL',
    payload: product,
  };
};
