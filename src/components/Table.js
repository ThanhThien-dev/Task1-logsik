import React, { Component } from "react";
import Loading from "./Loading";
import OptionsTable from "./OptionsTable";
import { ImMenu3 } from "react-icons/im";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false, // Trạng thái của bảng lựa chọn
    };
  }

  handleToggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions,
    }));
  };

  render() {
    const { users } = this.props;
    const { showOptions } = this.state;

    return users.length === 0 ? (
      <Loading />
    ) : (
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Nhà Cung Cấp</th>
            <th>Sản Phẩm Cung Cấp</th>
            <th>Địa Chỉ</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Số Tài Khoản</th>
            <th>Ghi Chú</th>
            <th>
              <MdOutlineKeyboardDoubleArrowDown />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address.address}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.bank.cardNumber}</td>
                <td>{user.macAddress}</td>
                <td>
                  <ImMenu3
                    className="optionBtn"
                    onClick={this.handleToggleOptions}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        {showOptions && <OptionsTable />}
      </table>
    );
  }
}

export default Table;
