import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cart from './cartReducer';
import products from './productsReducer';

export default combineReducers({ cart, products, form: formReducer });
