import { Grid, Skeleton, Tab, Tabs } from "@mui/material";

import { ContentBox } from "app/components/CommonCss/CommonCss";
import { Para } from "app/components/Typography/Typography";
import { TabWrapper } from "./style";

export const AddressDetailsSkeleton = () => {
  return (
    <>
      <TabWrapper>
        <Tabs className="tabs">
          <Tab
            value="orderDetails"
            label="Order Details"
            className="Mui-selected"
          />
          <Tab value="itemDetails" label="Item Details" />
          <Tab value="trackingDetails" label="Tracking Details" />
        </Tabs>
      </TabWrapper>
      <ContentBox>
        <Skeleton width="30%" height={40} className="value" />

        <Grid container spacing={2} mt={2}>
          <Grid item sm={3} xs={6}>
            <Para text="Type" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Company Name" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="First Name" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Last Name" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Para text="Address Line 1" />
            <Skeleton width="50%" height={28} className="value" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Para text="Address Line 2" />
            <Skeleton width="20%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="City" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Postal Code" />
            <Skeleton width="20%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Province/State" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Country" />
            <Skeleton width="20%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Contact Number" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Para text="Alternate Number" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Para text="Email Address" />
            <Skeleton width="50%" height={28} className="value" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Para text="Additional Notes" />
            <Skeleton width="30%" height={28} className="value" />
          </Grid>
        </Grid>
      </ContentBox>
    </>
  );
};
