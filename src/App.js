import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
// import UserItem from "./components/users/UserItem.js";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
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

  //search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, loading: false });
  };

  //clearUsers from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
