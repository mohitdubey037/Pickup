import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import EditIcon from "app/components/EditIcon";
import { Flex, FullCard } from "app/components/Input/style";
import {
  H3,
  Para,
  H4,
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
          <H3 text="Company Details" />
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
                <H4
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
                <H4
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
                <H4
                  text={
                    companyDetails?.industry ? companyDetails?.industry : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Employee Strength" />
                <H4
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
                <H4
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
                <H4
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
                <H4
                  text={companyDetails?.city ? companyDetails?.city : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Pincode" />
                <H4
                  text={companyDetails?.pincode ? companyDetails?.pincode : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Province" />
                <H4
                  text={
                    companyDetails?.province ? companyDetails?.province : "-"
                  }
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Country" />
                <H4
                  text={companyDetails?.country ? companyDetails?.country : "-"}
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="HST Number" />
                <H4
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
