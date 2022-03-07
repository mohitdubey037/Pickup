import React from "react";
import { arrowUp } from "app/assets/Icons";
import { CardDiv } from "./style";
import { H3, H5 } from "../Typography/Typography";
import { Box } from "@mui/material";
interface CardProps {
	title: string;
	numberValue: any;
	label: string;
  onClick?:()=>void;
	type?: string;
  isOrangeBox?: boolean;
}


const Card: React.FC<CardProps> = ({title, numberValue, label, isOrangeBox}) => {
  return (
    <CardDiv isOrangeBox={isOrangeBox}>
       <H3 text={title} className="heading"/>
      <p className="count">{numberValue}</p>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src={arrowUp} alt="" className="icon"  />
         <H5 text={label} className="label" ml={5} />
        </Box>
        {/* <H5 onClick={onClick} text="View All" className="viewall" /> */}
      </Box>
    </CardDiv>
  );
};

export default Card;
