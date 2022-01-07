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

interface DetailsProps {
    details?: any;
}

function SecondStepBlock(props: DetailsProps) {
  return (
    <SecondStepContent
      elevation={0}
      style={{ backgroundColor: "rgba(254, 206, 62, 0.2)", borderRadius: 8 }}
    >
      <div style={{ display: "flex" }}>
        <AvatarDiv>
          <Avatar src={DriverAvatar} alt="" />
        </AvatarDiv>
        <NameAndCarDiv>
          <span className="NameSpan">John Doe</span>
          <span className="NumberSpan">BYNO 342</span>
          <span className="NumberSpan">2020 Ford Ecosport</span>
        </NameAndCarDiv>
      </div>
      <CallButtonDiv>
        <Button label="Call Driver" />
      </CallButtonDiv>
    </SecondStepContent>
  );
}

export default SecondStepBlock;
