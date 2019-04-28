export const loadProducts = () => {
  return dispatch => {
    return fetch('https://student-example-api.herokuapp.com/v1/products.json', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'DATA_FETCH',
          payload: data,
        });
      });
  };
};

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
