import { Avatar } from "@mui/material";
import React from "react";
import {
  SecondStepContent,
  AvatarDiv,
  NameAndCarDiv,
  CallButtonDiv,
} from "./style";
import { DriverAvatar } from "../../../../assets/Images/index";
import { Button } from "app/components/Buttons";

function SecondStepBlock(props: any) {
  let { details } = props;
  
  console.log("Driver: ", details);
  return (
    <SecondStepContent
      elevation={0}
      style={{ backgroundColor: "rgba(254, 206, 62, 0.2)", borderRadius: 8 }}
    >
      <div style={{ display: "flex" }}>
        <AvatarDiv>
          <Avatar src={details.driverDetails.profileImg} alt="" />
        </AvatarDiv>
        <NameAndCarDiv>
          <span className="NameSpan">
            {details.driverDetails.firstName + details.driverDetails.lastName
              ? details.driverDetails.firstName +" "+ details.driverDetails.lastName
              : "-"}
          </span>
          <span className="NumberSpan">{details.driverDetails.licensePlate}</span>
          <span className="NumberSpan">{details.driverDetails.make + " " + details.driverDetails.model}</span>
        </NameAndCarDiv>
      </div>
      <CallButtonDiv>
        <Button label="Call Driver" />
      </CallButtonDiv>
    </SecondStepContent>
  );
}

export default SecondStepBlock;
