import { ADD_REQUEST, SET_FILTER, SET_SELECTED_REQUEST, SET_URL } from "./actionType";


const initialState = {
  requests: [],
  selectedRequest: null,
  filter: 'all',
  url: '',
};

export const reducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, payload],
      };
    case SET_SELECTED_REQUEST:
      return {
        ...state,
        selectedRequest: payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
      case SET_URL:
      return {
        ...state,
        url: payload,
      };
    default:
      return state;
  }
};
