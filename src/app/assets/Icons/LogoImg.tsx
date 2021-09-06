import React from "react";
import logoImg from "./logoImg.svg";

function LogoImg(props) {
  return (
    <div style={{width:props.width,margin:props.margin}}>
      <img src={logoImg} alt='' style={{width:'100%'}}/>
    </div>
  );
}

export default LogoImg;
