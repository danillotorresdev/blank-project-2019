import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import { getProducts } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.GET_PRODUCTS_REQUEST, getProducts),
  ]);
}
