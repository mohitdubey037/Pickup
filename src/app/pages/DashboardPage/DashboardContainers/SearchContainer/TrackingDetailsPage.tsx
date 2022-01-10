import React, { useEffect, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@mui/material";
// import { data } from "./stepsHelper";
import { ShareIcon } from "../../../../assets/Icons/index";
import { TorontoMap } from "../../../../assets/Images/index";
import {
  SubTitleDiv,
  SubHeader,
  HeadSpanBlock,
  PaperBlock,
  MapDiv,
} from "./style";
import SecondStepBlock from "./SecondStepBlock";
import { getTrackStatus } from "../../../../../services/SearchItemService";

function TrackingDetailsPage(props: any) {
  const [activeStep, setActiveStep] = useState(0);
  const [trackData, setTrackData] = useState<any>([]);
  let { singleOrderData } = props;

  useEffect(() => {
    (async () => {
        if(!singleOrderData?.shippingId) return;
        const res = (await getTrackStatus(singleOrderData.shippingId)) as any;
        if (res.success) {
            const trackDetails = res.response.data;
            console.log("TrackingdetailsRes", trackDetails);
            // const data = trackDetails.logs.map(item => {
                // return {
                //     "status": item.status,
                //     "statusName": item.statusName,
                //     "timestamp": item.timestamp,
                // }
            // });
            setTrackData(trackDetails);
        }
    })()
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step: any, index: number) => {
    return (
      <StepContent>
        {index === 1 && 
        // trackData?.driverDetails && 
        (
          <SecondStepBlock details={trackData.driverDetails} />
        )}
        {step?.timestamp}
        <Box sx={{ mb: 2 }}>
          <div>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {index === trackData?.logs?.length - 1 ? "Finish" : "Continue"}
            </Button>
            <Button
              disabled={index === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
        </Box>
      </StepContent>
    );
  };

  return (
    <PaperBlock elevation={0}>
      <SubTitleDiv>
        <SubHeader>Track Shipment</SubHeader>
        <HeadSpanBlock>
          <img src={ShareIcon} alt="" className="ShareImageBlock" />
          <div className="ShareText">Share Tracking</div>
        </HeadSpanBlock>
      </SubTitleDiv>
      <MapDiv>
        <img src={TorontoMap} alt="" />
      </MapDiv>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {trackData?.logs?.map((step, index) => (
            <Step key={index}>
              <StepLabel
                // icon={<img className= "imageStyle" src={StepperCircleIcon} />}
                style={{ color: "#FECE3E" }}
              >
                {step.statusName}
              </StepLabel>
              {getStepContent(step, index)}
            </Step>
          ))}
        </Stepper>
        {activeStep === trackData?.logs?.length && (
          <Paper square elevation={0} sx={{ p: 7 }}>
            <Typography>Shiment Delivered Successfully !</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </PaperBlock>
  );
}

export default TrackingDetailsPage;
