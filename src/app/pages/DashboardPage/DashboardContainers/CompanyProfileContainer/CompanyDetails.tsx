import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import EditIcon from "app/components/EditIcon";
import { Flex, FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { CompanyDetailsType } from "./types";

interface DetailInterface {
  details: CompanyDetailsType;
  setCompanyDrawerOpen: (value: boolean) => void;
  companyDetails: any;
}

export default function CompanyDetails(props: DetailInterface) {
  const { avatar, CompanyName } = props.details;
  const { setCompanyDrawerOpen, companyDetails } = props;
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <ListLabel text="Company Details" />
          <EditIcon onClick={setCompanyDrawerOpen} />
        </Box>
        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar src={companyDetails?.companyProfileImage} style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Company Name" />
                <SmallLabel
                  text={
                    companyDetails?.companyName
                      ? companyDetails?.companyName
                      : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Business Number" />
                <SmallLabel
                  text={
                    companyDetails?.businessNumber
                      ? companyDetails?.businessNumber
                      : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Industry" />
                <SmallLabel
                  text={
                    companyDetails?.industry ? companyDetails?.industry : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Employee Strength" />
                <SmallLabel
                  text={
                    companyDetails?.employeeStrength
                      ? companyDetails?.employeeStrength
                      : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 1" />
                <SmallLabel
                  text={
                    companyDetails?.addressLine1
                      ? companyDetails?.addressLine1
                      : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 2" />
                <SmallLabel
                  text={
                    companyDetails?.addressLine2
                      ? companyDetails?.addressLine2
                      : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="City" />
                <SmallLabel
                  text={companyDetails?.city ? companyDetails?.city : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Pincode" />
                <SmallLabel
                  text={companyDetails?.pincode ? companyDetails?.pincode : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Province" />
                <SmallLabel
                  text={
                    companyDetails?.province ? companyDetails?.province : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Country" />
                <SmallLabel
                  text={companyDetails?.country ? companyDetails?.country : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="HST Number" />
                <SmallLabel
                  text={
                    companyDetails?.hstNumber ? companyDetails?.hstNumber : "-"
                  }
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
