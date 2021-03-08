import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes/index";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
