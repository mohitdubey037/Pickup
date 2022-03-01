import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HPlatform, { HMap, HMapLayer } from "react-here-map";

import { ContentBox, Flex } from "app/components/CommonCss/CommonCss";
import { H4 } from "app/components/Typography/Typography";
import TrackingSteps from "app/components/Stepper/TrackingSteps";
import NullState from "app/components/NullState/NullState";
import { ShareIcon } from "../../../../assets/Icons/index";
import { MapDiv, ShareBlock } from "./style";
import {
  getLocation,
  getTrackStatus,
} from "../../../../../services/SearchItemService";

function TrackingDetailsPage(props: any) {
  let { singleOrderData } = props;

  const [trackingDetails, setTrackingDetails] = useState<any>(null);
  const [coordinates, setCoordinates] = useState<any>(null);

  const fetchTrackingDetails = async () => {
    const res = (await getTrackStatus(singleOrderData.shippingId)) as any;
    if (res.success) {
      const trackDetails = res.response.data;
      Object.keys(trackDetails.data).length > 0 &&
        setTrackingDetails(trackDetails.data);
    }
  };

  const fetchLocation = async () => {
    if (!singleOrderData?.shippingId) return;
    const res = (await getLocation(singleOrderData.shippingId)) as any;
    if (res.success) {
      const location = res.response.data;
      location?.data?.length > 0 && setCoordinates(location.data[0]);
    }
  };

  useEffect(() => {
    if (singleOrderData?.shippingId) {
      fetchTrackingDetails();
      fetchLocation();
    }
  }, []);

  return (
    <ContentBox>
      <Flex justifyContent="space-between" bottom={12}>
        <H4 text="Track Shipment" className="subtitle" />
        <ShareBlock>
          <img src={ShareIcon} alt="" />
          <H4 text="Share Tracking" className="ShareText" />
        </ShareBlock>
      </Flex>

      <MapDiv>
        {coordinates && (
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
              }}
              mapOptions={{
                center: {
                  lat: coordinates.latitude,
                  lng: coordinates.longitude,
                },
                zoom: 16,
                pixelRatio: window.devicePixelRatio || 1,
              }}
            >
              <HMapLayer mapLayerType="terrain.traffic" />
            </HMap>
          </HPlatform>
        )}
      </MapDiv>

      {trackingDetails ? (
        <Box mt={4}>
          <TrackingSteps data={trackingDetails} />
        </Box>
      ) : (
        <NullState />
      )}
    </ContentBox>
  );
}
export default TrackingDetailsPage;
