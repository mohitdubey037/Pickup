import { Box, Grid, Skeleton } from "@mui/material";

import { FlexBox } from "app/components/CommonCss/CommonCss";
import { FullCard } from "app/components/Input/style";
import { H3, Para } from "app/components/Typography/Typography";
import { FlexGrid } from "./style";

const AdminDetailsSkeleton = () => {
  return (
    <FullCard>
      <Box mb={4}>
        <H3 text="Admin Details" />
      </Box>

      <FlexBox justifyContent="space-between">
        <Box mr={4}>
          <Skeleton variant="circular" width={86} height={86} />
        </Box>

        <FlexGrid>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="First Name" />
              <Skeleton width="70%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Last Name" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
            <Grid item lg={2} sm={3} xs={12}>
              <Para text="Phone Number" />
              <Skeleton width="70%" height={28} className="value" />
            </Grid>
            <Grid item lg={3} sm={3} xs={12}>
              <Para text="Role/Designation" />
              <Skeleton width="50%" height={28} className="value" />
            </Grid>
            <Grid item lg={3} sm={3} xs={12}>
              <Para text="Email Id" />
              <Skeleton width="80%" height={28} className="value" />
            </Grid>
          </Grid>
        </FlexGrid>
      </FlexBox>
    </FullCard>
  );
};

export default AdminDetailsSkeleton;
