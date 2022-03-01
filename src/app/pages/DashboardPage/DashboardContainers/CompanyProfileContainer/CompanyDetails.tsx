import { Avatar, Box, Grid } from "@mui/material";

import { FlexBox } from "app/components/CommonCss/CommonCss";
import EditIcon from "app/components/EditIcon/EditIcon";
import { FullCard } from "app/components/Input/style";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { CompanyDetailsType } from "./types";

interface DetailInterface {
  data: CompanyDetailsType;
  handleEditDetails: () => void;
}

const CompanyDetails = (props: DetailInterface) => {
  const { data, handleEditDetails } = props;

  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
        <H3 text="Company Details" />
        <EditIcon onClick={handleEditDetails} />
      </Box>

      <FlexBox justifyContent="space-between">
        <Box mr={4}>
          <Avatar
            src={data?.companyProfileImage}
            style={{ width: 86, height: 86 }}
          />
        </Box>

        <FlexGrid>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Company Name" />
              <H4 text={data?.companyName || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Business Number" />
              <H4 text={data?.businessNumber || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Industry" />
              <H4 text={data?.industry || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Employee Strength" />
              <H4 text={data?.employeeStrength || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Address Line 1" />
              <H4 text={data?.addressLine1 || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Address Line 2" />
              <H4 text={data?.addressLine2 || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="City" />
              <H4 text={data?.city || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Pincode" />
              <H4 text={data?.pincode || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Province" />
              <H4 text={data?.province || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="Country" />
              <H4 text={data?.country || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={4} xs={12}>
              <Para text="HST Number" />
              <H4 text={data?.hstNumber || "-"} className="value" />
            </Grid>
          </Grid>
        </FlexGrid>
      </FlexBox>
    </FullCard>
  );
};

export default CompanyDetails;
