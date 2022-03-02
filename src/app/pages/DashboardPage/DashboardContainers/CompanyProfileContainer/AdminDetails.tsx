import { Avatar, Box, Grid } from "@mui/material";

import { FlexBox, FlexGrid, FullCard } from "app/components/CommonCss/CommonCss";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { formatPhoneNo } from "utils/commonUtils";
import { PERMISSION_TYPE_BY_ID } from "../../../../../constants";
import { AdminDetailsType } from "./types";

interface AdminDetailsInterface {
  data: AdminDetailsType;
}

const AdminDetails = ({ data }: AdminDetailsInterface) => {
  return (
    <FullCard>
      <Box mb={4}>
        <H3 text="Admin Details" />
      </Box>

      <FlexBox justifyContent="space-between">
        <Box mr={4}>
          <Avatar src={data?.profileImage} style={{ width: 86, height: 86 }} />
        </Box>

        <FlexGrid>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="First Name" />
              <H4 text={data?.firstName || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Last Name" />
              <H4 text={data?.lastName || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Phone Number" />
              <H4
                text={data?.phoneNo ? formatPhoneNo(data?.phoneNo) : "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Role/Designation" />
              <H4
                text={data?.role ? PERMISSION_TYPE_BY_ID[data.role] : "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={4} sm={8} xs={12}>
              <Para text="Email Id" />
              <H4 text={data?.emailId || "-"} className="value" />
            </Grid>
          </Grid>
        </FlexGrid>
      </FlexBox>
    </FullCard>
  );
};

export default AdminDetails;
