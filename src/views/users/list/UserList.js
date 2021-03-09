import React, { Component } from "react";
import "./UserList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../redux/actions/modules/userActions";
import { Button, Table, PageHeader } from "antd";

class UserList extends Component {
  state = {
    columns: [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Username", dataIndex: "username" , key: "name" },
      { title: "Email", dataIndex: "email" , key: "name"  },
      { title: "Phone", dataIndex: "phone" , key: "phone"  },
    ],
  };
  componentDidMount() {
    this.props.actions.getUserList();
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="User List"
          extra={[
            <Button type="primary" onClick={() => this.nextPath("/newuser")}>
              Add
            </Button>,
          ]}
        />
        <Table dataSource={this.props.users} columns={this.state.columns} />
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
