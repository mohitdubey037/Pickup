import { Box, Grid } from "@material-ui/core";
import { ListLabel, Para } from "app/components/Typography/Typography";
import { FullCard } from "app/components/Input/style";
import { FlexBox } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

export default function PersonalProfileSkeleton() {
  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
      <ListLabel text="Personal Details" />
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mr={4}>
          <Skeleton variant="circle" width={86} height={86} />
        </Box>

        <FlexBox>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={3}>
              <Para text="First Name" />
              <Skeleton width="60%" height={28}  className="value" />
            </Grid>

            <Grid item lg={2} sm={3}>
              <Para text="Last Name" />
              <Skeleton width="70%" height={28}  className="value" />
            </Grid>

            <Grid item lg={2} sm={3}>
              <Para text="Phone Number" />
              <Skeleton width="50%" height={28}  className="value" />
            </Grid>

            <Grid item xs={3}>
              <Para text="Role/Designation" />
              <Skeleton width="80%" height={28}  className="value" />
            </Grid>

            <Grid item xs={3}>
              <Para text="Email Id" />
              <Skeleton width="70%" height={28}  className="value" />
            </Grid>
          </Grid>
        </FlexBox>

        <Skeleton variant="rect" width={150} height={40} />
      </Box>
    </FullCard>
  );
}
