import React, { Component } from "react";
import { ImParagraphJustify } from "react-icons/im";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h4 className="title-h4">
          <ImParagraphJustify />
          <span className="title-text">Danh sách Nhà Cung Cấp</span>
        </h4>
        <button className="btn button-add" onClick={this.props.openModal}>
          Thêm Mới
        </button>
      </div>
    );
  }
}

export default Title;
