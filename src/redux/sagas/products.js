import axios from 'axios';
import { put } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';
import { baseUrl } from '../../service/API';

export function* getProducts() {
  const url = `${baseUrl}/products`;
  const products = yield axios.get(url);
  yield put(ActionCreators.getProductsSuccess(products.data));
}
