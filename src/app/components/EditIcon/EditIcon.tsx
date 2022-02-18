import React from "react";
import { edit } from "app/assets/Icons";

interface Props {
  onClick?: () => void;
  onKeyPress?: () => void;
  src?: string;
}

const EditIcon: React.FC<Props> = ({ onClick, onKeyPress, src }) => {
  return (
    <img
      src={src || edit}
      onClick={onClick}
      onKeyPress={onKeyPress}
      alt="edit"
      style={{ cursor: "pointer" }}
    />
  );
};

export default EditIcon;
