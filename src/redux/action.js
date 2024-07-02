

  import axios from 'axios';
import {
  FETCH_NETWORK_DATA_REQUEST,
  FETCH_NETWORK_DATA_SUCCESS,
  FETCH_NETWORK_DATA_FAILURE,
  SET_NETWORK_FILTER,
} from './actionType.js';

export const fetchNetworkDataRequest = () => ({
  type: FETCH_NETWORK_DATA_REQUEST,
});

export const fetchNetworkDataSuccess = (data) => ({
  type: FETCH_NETWORK_DATA_SUCCESS,
  payload: data,
});

export const fetchNetworkDataFailure = (error) => ({
  type: FETCH_NETWORK_DATA_FAILURE,
  payload: error,
});

export const setNetworkFilter = (filter) => ({
  type: SET_NETWORK_FILTER,
  payload: filter,
});

export const fetchNetworkData = (url) => {
  return async (dispatch) => {
    dispatch(fetchNetworkDataRequest());

    try {
      const response = await axios.get(`/api/fetch-network-data?url=${encodeURIComponent(url)}`);
      dispatch(fetchNetworkDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchNetworkDataFailure(error.message));
    }
  };
};
