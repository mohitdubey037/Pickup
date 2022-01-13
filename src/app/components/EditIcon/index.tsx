import React from "react";

function EditIcon({ onClick }) {
  return (
    <img
      width={15}
      height={15}
      style={{ cursor: "pointer" }}
      src={require("../../assets/Icons/edit.png").default}
      onClick={() => onClick(true)}
    />
  );
}

export default EditIcon;
