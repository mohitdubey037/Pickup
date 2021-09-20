import React from "react";
import { arrowUp, arrowUpWhite } from "app/assets/Icons";
import { CardProps } from "./helper";
import { CardDiv, CardNumber, CardTitle, CardFooter } from "./style";

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { title, numberValue, label, onClick, type = "primary" } = props;
  return (
    <CardDiv
      style={{ backgroundColor: type === "secondary" ? "#F99746" : "white" }}
    >
       <CardTitle  style={{color:type==='secondary'?'white':'black'}}>{title}</CardTitle>
      <CardNumber style={{color:type==='secondary'?'white':'black'}}>{numberValue}</CardNumber>
      <CardFooter>
        <div style={{color:type==='secondary'?'white':'black'}}>
          <img src={arrowUp} style={{ marginRight: "5px" }} />
          {label}
        </div>
        <p style={{color:type==='secondary'?'white':'black'}} onClick={onClick}>View All</p>
      </CardFooter>
    </CardDiv>
  );
};

export default Card;
