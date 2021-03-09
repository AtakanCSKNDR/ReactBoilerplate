import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Home extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
       
          <Link to="/userlist">Go User</Link>
          <Button type="primary" onClick={() => this.nextPath('/userlist')}>Button</Button>
        
      </div>
    );
  }
}

export default Home;
