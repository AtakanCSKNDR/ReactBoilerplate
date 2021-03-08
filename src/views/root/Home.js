import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button>
          <Link to="/userlist">Go User</Link>
        </button>
      </div>
    );
  }
}

export default Home;
