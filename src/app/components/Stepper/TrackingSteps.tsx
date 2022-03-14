import { useEffect, useState } from "react";
import moment from "moment";
import { StepperBox, StepperInnerBox } from "./style";
import { H4, H5 } from "../Typography/Typography";
import { Button } from "../Buttons";
import { Avatar, Box, Step, StepContent, StepLabel, Stepper } from "@mui/material";

export default function TrackingSteps({ data }: any) {
  const [activeStep, setActiveStep] = useState(-1);

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
        <Avatar src={obj.profileImg} className="avatar" />
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
            <Step
              key={idx}
              expanded={activeStep > 1 && activeStep < 8 && idx === 1}
            >
              <StepLabel>
                <H4 text={item.statusName} />
                {item.timestamp && (
                  <H5 text={moment(item.timestamp).format("lll")} mt={5} />
                )}
              </StepLabel>
              <StepContent>
                {idx === 1 &&
                  data?.driverDetails &&
                  DriverDetails(data.driverDetails)}
              </StepContent>
            </Step>
          ))}
      </Stepper>
    </StepperBox>
  );
}
