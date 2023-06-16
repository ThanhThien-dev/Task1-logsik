import React from "react";

import Title from "./components/Title";
import Search from "./components/Search";
import Table from "./components/Table";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false, // Trạng thái modal
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.getUsers()
      .then((data) => this.setState({ users: data.users }))
      .catch((err) => console.error(err));
  }

  getUsers() {
    return fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="content-wrap">
        <div className="content">
          {/* Title */}
          <Title openModal={this.openModal} />
          {/* Navbar-Search */}
          <Search />

          {/* Table */}
          <div className="panel">
            <Table users={users} />
          </div>

          {/* Modal */}
          {this.state.showModal && <Modal closeModal={this.closeModal} />}
        </div>
      </div>
    );
  }
}

export default App;
