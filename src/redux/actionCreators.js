import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getUsersRequest: null,
  getUsersSuccess: ['users'],
  getUsersFailure: null,
});

export default Creators;
