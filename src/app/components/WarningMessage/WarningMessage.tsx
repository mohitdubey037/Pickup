import React from "react";
import { Heading, SubHeading, Container} from './Styles'
import {warningIcon} from '../../assets/Icons'
import { Box } from "@material-ui/core";

interface SelectOption {
  imgSrc: string;
  id: string;

}
export default function WarningMessage(props: SelectOption) {
  const { imgSrc, id } = props;
  return (
    <Container>
      
        <img className= "imageStyle" src={warningIcon} />

      <h5>
        <Heading> 3 Shipments added to shipments holding zone.</Heading>
        <SubHeading>Once they are ready to ship you can schedule them from the holding zone</SubHeading>

      </h5>
      
    </Container>
    
  );
}
