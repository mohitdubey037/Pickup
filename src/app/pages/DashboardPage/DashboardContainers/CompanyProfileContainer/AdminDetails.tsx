import { Avatar, Box, Grid } from "@material-ui/core";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { AdminDetailsType } from "./types";

interface DetailInterface {
  AdminDetails: AdminDetailsType;
}

export default function AdminDetails(props: DetailInterface) {
  const { AdminDetails } = props;
  return (
    <>
      <FullCard>
        <Box mb={4}>
          <ListLabel text="Admin Details" />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box mr={4}>
            <Avatar style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={4}>
                <Para text="First Name" />
                <SmallLabel
                  text={AdminDetails?.firstName ? AdminDetails?.firstName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4}>
                <Para text="Last Name" />
                <SmallLabel
                  text={AdminDetails?.lastName ? AdminDetails?.lastName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4}>
                <Para text="Phone Number" />
                <SmallLabel
                  text={AdminDetails?.phoneNo ? AdminDetails?.phoneNo : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4}>
                <Para text="Role/Designation" />
                <SmallLabel
                  text={AdminDetails?.role ? AdminDetails?.role : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={4} sm={8}>
                <Para text="Email Id" />
                <SmallLabel
                  text={AdminDetails?.emailId ? AdminDetails?.emailId : "-"}
                  className="value"
                />
              </Grid>
            </Grid>
          </FlexGrid>
        </Box>
      </FullCard>
    </>
  );
}
