import { ADD_REQUEST, SET_FILTER, SET_SELECTED_REQUEST, SET_URL } from "./actionType";

export const addRequest = (request) => ({
    type: ADD_REQUEST,
    payload: request,
  });
  
  export const setSelectedRequest = (request) => ({
    type: SET_SELECTED_REQUEST,
    payload: request,
  });
  
  export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
  });

  export const setUrl = (url) => ({
    type: SET_URL,
    payload: url,
  });