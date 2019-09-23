import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  userSelected: '',
};

export const getProductsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

export const getProductsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  data: action.products,
});

export const getProductsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});


export const HANDLERS = {
  [Types.GET_PRODUCTS_REQUEST]: getProductsRequest,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILURE]: getProductsFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
