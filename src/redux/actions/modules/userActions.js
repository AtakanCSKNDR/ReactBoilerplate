import * as actionTypes from "../actionTypes";
import ApiService from "../../../services/ApiService";

export function getUserList() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      ApiService.get(`/users`)
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
      ApiService.post(`/users`, params)
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
      ApiService.put(`/users/${params.id}`, params)
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
      ApiService.delete(`/users/${params.id}`)
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
