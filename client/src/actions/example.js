/* eslint import/prefer-default-export: 0 */
import axios from 'axios';
import * as types from './actionTypes';

export const count = () => ({
  type: types.COUNT,
});

export const apiRequest = () => dispatch => {
  dispatch({
    type: types.API_REQUEST,
  });
  axios
    .get('/api/reserve')
    .then(() =>
      dispatch({
        type: types.API_SUCCESS,
      }),
    )
    .catch(error =>
      dispatch({
        type: types.API_FAILURE,
        error,
      }),
    );
};
