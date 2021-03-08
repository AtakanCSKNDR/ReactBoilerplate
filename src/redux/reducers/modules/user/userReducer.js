import * as actionTypes from "../../../actions/actionTypes";
import initialState from "../../initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return action.payload;

    case actionTypes.INSERT_USER:
      state.push(action.payload);
      let insertedUsersList = state;
      return [...insertedUsersList];

    case actionTypes.UPDATE_USER:
      let updatedUserList = state.map(
        (user) => (user = user.id === action.payload.id ? action.payload : user)
      );
      return [...updatedUserList];

    case actionTypes.DELETE_USER:
      let deletedUserList = state.filter(
        (user) => user.id !== action.payload.id
      );
      return deletedUserList;

    default:
      return state;
  }
}
