import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getProductsRequest: null,
  getProductsSuccess: ['products'],
  getProductsFailure: null,
});

export default Creators;
