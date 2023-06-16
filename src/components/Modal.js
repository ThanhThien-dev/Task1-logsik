import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (can send the data to the server or update the state)
    const { name, address, phoneNumber } = this.state;
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Phone Number:", phoneNumber);
    // Clear the form fields
    this.setState({ name: "", address: "", phoneNumber: "" });
  };

  render() {
    const { name, address, phoneNumber } = this.state;
    const { closeModal } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Địa chỉ:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Số điện thoại:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
