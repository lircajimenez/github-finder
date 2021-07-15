import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/user/:login" component={User} />
                <Route exact pact="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

// async componentDidMount() {
//   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
//   this.setState({ loading: true });

//   const response = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   console.log("response", response.data);
//   this.setState({ users: response.data, loading: false });
// }

// ---> version w/out async/await <---
// componentDidMount() {
//   axios
//     .get("https://api.github.com/users")
//     .then((response) => console.log("response", response.data));
// }
