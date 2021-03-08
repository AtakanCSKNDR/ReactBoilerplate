import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/modules/userActions";

class App extends Component {
  componentDidMount() {
    this.props.actions.getUserList();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.userListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserList: bindActionCreators(userActions.getUserList, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
