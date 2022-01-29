import { Avatar, Box, Grid } from "@material-ui/core";

import { FlexBox } from "app/components/CommonCss/CommonCss";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { ADMIN_DETAILS_PERMISSION_TYPES } from "../../../../../constants";

export default function AdminDetails(props: any) {
  const { AdminDetails, user } = props;

  return (
    <>
      <FullCard>
        <Box mb={4}>
          <ListLabel text="Admin Details" />
        </Box>

        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar
              src={user?.profileImage}
              style={{ width: 86, height: 86 }}
            />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="First Name" />
                <SmallLabel
                  text={AdminDetails?.firstName ? AdminDetails?.firstName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Last Name" />
                <SmallLabel
                  text={AdminDetails?.lastName ? AdminDetails?.lastName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Phone Number" />
                <SmallLabel
                  text={AdminDetails?.phoneNo ? AdminDetails?.phoneNo : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Role/Designation" />
                <SmallLabel
                  text={
                    AdminDetails?.role
                      ? ADMIN_DETAILS_PERMISSION_TYPES[AdminDetails.role]
                      : "-"
                  }
                  className="value"
                />
              </Grid>
              <Grid item lg={4} sm={8} xs={12}>
                <Para text="Email Id" />
                <SmallLabel
                  text={AdminDetails?.emailId ? AdminDetails?.emailId : "-"}
                  className="value"
                />
              </Grid>
            </Grid>
          </FlexGrid>
        </FlexBox>
      </FullCard>
    </>
  );
}
