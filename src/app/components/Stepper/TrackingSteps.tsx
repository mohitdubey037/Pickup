import React, { useEffect } from "react";
import moment from "moment";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Avatar,
  Box,
} from "@material-ui/core";

import { StepperBox, StepperInnerBox } from "./style";
import { H4, H5 } from "../Typography/Typography";
import { Button } from "../Buttons";

export default function TrackingSteps({ data }: any) {
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    if (data?.logs && data?.logs.length > 0) {
      let active = -1;
      data.logs.forEach((item, idx) => {
        if (item.timestamp) {
          active = idx + 1;
        }
      });
      setActiveStep(active);
    }
  }, []);

  const DriverDetails = (obj) => (
    <Box>
      <StepperInnerBox>
        <Avatar alt="profile picture" src={obj.profileImg} className="avatar" />
        <Box ml={2} mr={2}>
          <H4
            text={
              obj.firstName + obj.lastName
                ? obj.firstName + " " + obj.lastName
                : "N/A"
            }
            className="drivername"
          />
          <H5 text={obj.licensePlate} />
          <H5 text={obj.make + " " + obj.model} />
        </Box>
        <Button size="small" label="Call Driver" />
      </StepperInnerBox>
    </Box>
  );

  return (
    <StepperBox>
      <Stepper activeStep={activeStep} orientation="vertical">
        {data?.logs &&
          data?.logs.length > 0 &&
          data.logs.map((item, idx) => (
            <Step key={idx}>
              <StepLabel>
                <H4 text={item.statusName} />
                {item.timestamp && (
                  <H5 text={moment(item.timestamp).format("lll")} />
                )}
              </StepLabel>
              <StepContent>
                {activeStep > 1 &&
                  activeStep < 8 &&
                  idx === 1 &&
                  data?.driverDetails &&
                  DriverDetails(data.driverDetails)}
              </StepContent>
            </Step>
          ))}
      </Stepper>
    </StepperBox>
  );
}
