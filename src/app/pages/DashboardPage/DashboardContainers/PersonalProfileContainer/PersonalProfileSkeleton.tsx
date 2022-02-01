import { Box, Grid } from "@material-ui/core";
import { H3, Para } from "app/components/Typography/Typography";
import { FullCard } from "app/components/Input/style";
import { FlexTable } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { FlexBox } from "app/components/CommonCss/CommonCss";

export default function PersonalProfileSkeleton() {
  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
      <H3 text="Personal Details" />
      </Box>

      <FlexBox alignItems="center">
        <Box mr={4}>
          <Skeleton variant="circle" width={86} height={86} />
        </Box>

        <FlexTable mr={3}>
          <Grid container spacing={2}>
          <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="First Name" />
              <Skeleton width="60%" height={28}  className="value" />
            </Grid>

            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Last Name" />
              <Skeleton width="70%" height={28}  className="value" />
            </Grid>

            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Phone Number" />
              <Skeleton width="50%" height={28}  className="value" />
            </Grid>

            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Role/Designation" />
              <Skeleton width="80%" height={28}  className="value" />
            </Grid>

            <Grid item lg={5} xl={4} sm={8} xs={12}>
              <Para text="Email Id" />
              <Skeleton width="70%" height={28}  className="value" />
            </Grid>
          </Grid>
        </FlexTable>

        <Skeleton variant="rect" width={150} height={40} />
      </FlexBox>
    </FullCard>
  );
}
