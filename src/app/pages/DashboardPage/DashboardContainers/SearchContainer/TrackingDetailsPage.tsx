import React, { useEffect, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
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
import {
  getLocation,
  getTrackStatus,
} from "../../../../../services/SearchItemService";
import moment from "moment";
// import HEREMap, { Marker } from 'here-maps-react';
import HPlatform, { HMap, HMapLayer, Marker } from "react-here-map";

function TrackingDetailsPage(props: any) {
  const [activeStep, setActiveStep] = useState(0);
  const [trackData, setTrackData] = useState<any>([]);
  const [coordinates, setCoordinates] = useState<any>([]);
  let { singleOrderData } = props;

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

  const getLongLat = async () => {
    if (!singleOrderData?.shippingId) return;
    const res = (await getLocation(singleOrderData.shippingId)) as any;
    if (res.success) {
      const location = res.response.data;
      console.log("Longitude & Latitude", location);
      setCoordinates(location);
    }
  };
  useEffect(() => {
    getLongLat();
  }, []);

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
      <MapDiv style={{ borderRadius: "8px"}}>
        {/* <img src={TorontoMap} alt="" /> */}
        <HPlatform
          app_id="YvqYrJu5S467BPHcFyMN"
          app_code="B4jlx7y6SDu-jf1Qmv_rHw"
          useCIT
          useHTTPS
          includeUI
          includePlaces
          interactive
        >
          <HMap
            style={{
              height: "200px",
              borderRadius: "8px",
            }}
            mapOptions={{
              center: { lat: 18.516726, lng: 73.856255 },
              // center: { lat: coordinates.latitude, lng: coordinates.longitude },
              zoom: 16,
              pixelRatio: window.devicePixelRatio || 1,
            }}
          >
            <HMapLayer mapLayerType="terrain.traffic" />
            {/* <HMapPolyLine points={points} /> */}
          </HMap>
        </HPlatform>
      </MapDiv>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {trackData?.logs?.map((step, index) => {
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
          </Paper>
        )}
      </Box>
    </PaperBlock>
  );
}
export default TrackingDetailsPage;
