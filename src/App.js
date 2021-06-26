import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
// import UserItem from "./components/users/UserItem.js";
import Users from "./components/users/Users.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({ loading: true });

    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log("response", response.data);
    this.setState({ users: response.data, loading: false });
  }

  // ---> version w/out async/await <---
  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((response) => console.log("response", response.data));
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
