import React, { useEffect, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  Button,
} from "@mui/material";
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
import { getLocation, getTrackStatus } from "../../../../../services/SearchItemService";
import moment from "moment";
import { DisplayMapFC } from "./HereMapComponent";

function TrackingDetailsPage(props: any) {
  const [activeStep, setActiveStep] = useState(0);
  const [trackData, setTrackData] = useState<any>([]);
  let { singleOrderData } = props;

  const getLongLat = async () => {
    if (!singleOrderData?.shippingId) return;
    const res = (await getLocation(singleOrderData.shippingId)) as any;
    if (res.success) {
      const location = res.response.data;
      console.log("Longitude & Latitude", location);
      setTrackData(location);
    }
  };
  useEffect(() => {
    getLongLat();
  }, []);
  useEffect(() => {
    (async () => {
      if (!singleOrderData?.shippingId) return;
      const res = (await getTrackStatus(singleOrderData.shippingId)) as any;
      if (res.success) {
        const trackDetails = res.response.data;
        console.log("TrackingdetailsRes", trackDetails);
        setTrackData(trackDetails);
      }
    })();
  }, []);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const getStepContent = (step: any, index: number) => {
    return (
      <StepContent>
        {index === 1 && trackData?.driverDetails && (
          <SecondStepBlock details={trackData} />
        )}
        {step?.timestamp ? (
          <div>{moment(step?.timestamp).format("lll")}</div>
        ) : (
          ""
        )}

        {/* <Box sx={{ mb: 2 }}>
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
        </Box> */}
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
          <DisplayMapFC/>
        </HeadSpanBlock>
      </SubTitleDiv>
      <MapDiv>
        <img src={TorontoMap} alt="" />
      </MapDiv>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {trackData?.logs?.map((step, index) => {
            // if(!step.timestamp){
            //   if(index >= 1 && trackData[index-1]){
            //     setActiveStep(index-1);
            //   }
            // }
            if (index === 0 && !step.timestamp) {
              setActiveStep(index);
            } else if (!step.timestamp) {
              if (trackData[index - 1]?.timestamp) {
                setActiveStep(index);
              }
            }
            return (
              <Step
                key={index}
                // active={index === activeStep - 1 || index === activeStep}
                expanded={true}
                completed={step.timestamp ? true : false}
              >
                <StepLabel
                  // icon={<img className= "imageStyle" src={StepperCircleIcon} />}
                  style={{ color: "#FECE3E" }}
                >
                  {step.statusName}
                </StepLabel>
                {getStepContent(step, index)}
              </Step>
            );
          })}
        </Stepper>
        {activeStep === trackData?.logs?.length && (
          <Paper square elevation={0} sx={{ p: 7 }}>
            <Typography>Shiment Delivered Successfully !</Typography>
            {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button> */}
          </Paper>
        )}
      </Box>
    </PaperBlock>
  );
}

export default TrackingDetailsPage;
