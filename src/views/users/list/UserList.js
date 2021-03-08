import React, { Component } from "react";
import "./UserList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../redux/actions/modules/userActions";

class UserList extends Component {
  componentDidMount() {
    this.props.actions.getUserList();
  }
  state = {
    newUser: {
      email: "atakan@example.biz",
      name: "Atakan",
      phone: "5352226655",
      username: "ACC",
      website: "github.com",
    },
    updateUser: {
      email: "atakan@example.biz",
      name: "Atakan",
      phone: "5352226655",
      username: "ACC",
      website: "github.com",
      id: 1,
    },
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.actions.insertUser(this.state.newUser)}
        >
          Ekle
        </button>
        <button
          onClick={() => this.props.actions.updateUser(this.state.updateUser)}
        >
          Güncelle
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.username}</th>
                <th>{user.email}</th>
                <th>{user.phone}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserList: bindActionCreators(userActions.getUserList, dispatch),
      deleteUser: bindActionCreators(userActions.deleteUser, dispatch),
      insertUser: bindActionCreators(userActions.insertUser, dispatch),
      updateUser: bindActionCreators(userActions.updateUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
