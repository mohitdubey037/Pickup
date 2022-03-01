import { Box, Grid, Skeleton } from "@mui/material";

import { FlexBox, FullCard } from "app/components/CommonCss/CommonCss";
import { H3, Para } from "app/components/Typography/Typography";
import { FlexGrid } from "./style";

const CompanyDetailsSkeleton = () => {
  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
        <H3 text="Company Details" />
      </Box>

      <FlexBox display="flex" justifyContent="space-between">
        <Box mr={4}>
          <Skeleton variant="circular" width={86} height={86} />
        </Box>

        <FlexGrid>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Company Name" />
              <Skeleton width="70%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Business Number" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Industry" />
              <Skeleton width="60%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Employee Strength" />
              <Skeleton width="40%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Address Line 1" />
              <Skeleton width="80%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Address Line 2" />
              <Skeleton width="70%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="City" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Pincode" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Province" />
              <Skeleton width="60%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Country" />
              <Skeleton width="40%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="HST Number" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
          </Grid>
        </FlexGrid>
      </FlexBox>
    </FullCard>
  );
};

export default CompanyDetailsSkeleton;
