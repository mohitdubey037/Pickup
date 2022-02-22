

import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { StepperBox, StepperInnerBox } from './style';
import { Avatar, Box } from '@material-ui/core';
import { H4, H5 } from '../Typography/Typography';
import { Button } from '../Buttons';



function getSteps() {
  return [
  'Looking for Driver', 
  'Driver Assigned ', 
  'Driver En Route To Pick Up',
  'Order Picked Up', 
  'Driver En Route To Delivery', 
  'Driver Arrived At Delivery Location',
  'Order Delivered'
];
}

// function getStepContent(step: number) {
//   switch (step) {
//         case 0:
//         return `Aug 12, 2021  1:31 PM`;
//         case 1:
//         return 'Aug 12, 2021  1:31 PM';
//         case 2:
//         return `Aug 12, 2021  1:31 PM`;
//         case 3:
//         return `Aug 12, 2021  1:31 PM`;
//         case 4:
//         return `Aug 12, 2021  1:31 PM`;
//         case 5:
//         return `Aug 12, 2021  1:31 PM`;
//         case 6:
//         return `Aug 12, 2021  1:31 PM`;
//     default:
//       return 'Unknown step';
//   }
// }

export default function TrackingSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  return (
    <StepperBox>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
                <H4 text={label} />
                <H5 text="Aug 12, 2021  1:31 PM" />
           </StepLabel>
            <StepContent>
              {/* <H4 text={getStepContent(index)} /> */}
              <Box>
                <StepperInnerBox>
                <Avatar
            alt="profile picture"
            src=""
            className="avatar"
          />
          <Box ml={2} mr={2}>
              <H4 text="John Doe" className="drivername" />
              <H5 text="BYNO 342 " />
              <H5 text="2020 Ford Ecosport" />
          </Box>
                  <Button size="small" label="Call Driver" onClick={handleNext} />
                </StepperInnerBox>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    
    </StepperBox>
  );
}







