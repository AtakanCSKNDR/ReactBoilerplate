import * as actionTypes from "../actionTypes";
import ApiService from "../../../services/ApiService";

export function getUserList() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      let url = "https://jsonplaceholder.typicode.com/users";
      ApiService.get(url)
        .then((response) => {
          dispatch({
            type: actionTypes.GET_USER_LIST,
            payload: response.data,
          });
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function insertUser(params) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      let url = `https://jsonplaceholder.typicode.com/users`;
      ApiService.post(url, params)
        .then((response) => {
          dispatch({
            type: actionTypes.INSERT_USER,
            payload: params,
          });
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export function updateUser(params) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      let url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
      ApiService.put(url, params)
        .then((response) => {
          dispatch({
            type: actionTypes.UPDATE_USER,
            payload: params,
          });
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}


export function deleteUser(params) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      let url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
      ApiService.delete(url)
        .then((response) => {
          dispatch({
            type: actionTypes.DELETE_USER,
            payload: params,
          });
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
