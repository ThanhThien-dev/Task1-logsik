import React from "react";
import { ImParagraphJustify } from "react-icons/im";

function Title() {
  return (
    <div className="title">
      <h4 className="title-h4">
        <ImParagraphJustify />
        <span className="title-text">Danh sách Nhà Cung Cấp</span>
      </h4>
      <button className="btn button-add">Thêm Mới</button>
    </div>
  );
}

export default Title;
