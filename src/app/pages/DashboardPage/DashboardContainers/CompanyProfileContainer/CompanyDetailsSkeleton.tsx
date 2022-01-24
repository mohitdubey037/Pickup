import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";

export default function CompanyDetailsSkeleton() {
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <ListLabel text="Company Details" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box mr={4}>
          <Skeleton variant="circle" width={86} height={86} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={3}>
                <Para text="Company Name" />
                <Skeleton width="70%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Business Number" />
                <Skeleton width="50%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Industry" />
                <Skeleton width="60%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Employee Strength" />
                <Skeleton width="40%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Address Line 1" />
                <Skeleton width="80%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Address Line 2" />
                <Skeleton width="70%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="City" />
                <Skeleton width="50%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Pincode" />
                <Skeleton width="50%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Province" />
                <Skeleton width="60%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="Country" />
                <Skeleton width="40%" height={28}  className="value" />
              </Grid>

              <Grid item lg={2} sm={3}>
                <Para text="HST Number" />
                <Skeleton width="50%" height={28}  className="value" />
              </Grid>
            </Grid>
          </FlexGrid>
        </Box>
      </FullCard>
    </>
  );
}
