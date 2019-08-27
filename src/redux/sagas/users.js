import axios from 'axios';
import { put } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';
import { baseUrl } from '../../service/API';

export function* getUsers() {
  const url = `${baseUrl}/users/list/all`;
  const users = yield axios.get(url);
  yield put(ActionCreators.getUsersSuccess(users.data));
}
