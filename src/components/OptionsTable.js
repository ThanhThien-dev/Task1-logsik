import React, { Component } from "react";

class OptionsTable extends Component {
  render() {
    const { isOpen, editUser, deleteUser } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="options-table">
        <ul>
          <li>
            <button onClick={editUser}>Chỉnh sửa</button>
          </li>
          <li>
            <button onClick={deleteUser}>Xóa</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default OptionsTable;
