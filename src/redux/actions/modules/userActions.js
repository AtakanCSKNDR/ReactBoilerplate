import * as actionTypes from "../actionTypes";
import axios from "axios";

export function getUserList() {
  return function (dispatch) {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
      dispatch({
        type: actionTypes.GET_USER_LIST,
        payload: response.data,
      });
    });
  };
}
