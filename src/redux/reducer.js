

import {
  FETCH_NETWORK_DATA_REQUEST,
  FETCH_NETWORK_DATA_SUCCESS,
  FETCH_NETWORK_DATA_FAILURE,
  SET_NETWORK_FILTER,
} from './actionType.js';

const initialState = {
  data: [],
  filteredData: [],
  status: 'idle',
  error: null,
  filter: 'all', // Default filter
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NETWORK_DATA_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_NETWORK_DATA_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      };
    case FETCH_NETWORK_DATA_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
      case SET_NETWORK_FILTER:
      const filter = action.payload;
      let filteredData = state.data;

      if (filter !== 'all') {
        filteredData = state.data.filter((item) => item.type === filter);
      }
      return {
        ...state,
        filter,
        filteredData,
      };
    default:
      return state;
  }
};

export default networkReducer;
