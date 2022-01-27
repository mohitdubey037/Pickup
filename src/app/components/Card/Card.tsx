import React from "react";
import { arrowUp } from "app/assets/Icons";
import { CardDiv } from "./style";
import { Box } from "@material-ui/core";
import { ListLabel, Smalltext } from "../Typography/Typography";
interface CardProps {
	title: string;
	numberValue: any;
	label: string;
  onClick?:()=>void;
	type?: string;
  isOrangeBox?: boolean;
}


const Card: React.FC<CardProps> = ({title, numberValue, label, onClick, isOrangeBox}) => {
  return (
    <CardDiv isOrangeBox={isOrangeBox}>
       <ListLabel text={title} className="heading"/>
      <p className="count">{numberValue}</p>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src={arrowUp} alt="" className="icon"  />
         <Smalltext text={label} className="label" />
        </Box>
        {/* <Smalltext onClick={onClick} text="View All" className="viewall" /> */}
      </Box>
    </CardDiv>
  );
};

export default Card;
