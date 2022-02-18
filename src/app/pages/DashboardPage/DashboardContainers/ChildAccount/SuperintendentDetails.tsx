import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import { Drawer } from "app/components/Drawer";
import EditIcon from "app/components/EditIcon/EditIcon";
import { FullCard } from "app/components/Input/style";
import {
  H3,
  Para,
  H4,
} from "app/components/Typography/Typography";
import { useState } from "react";
import { FlexGrid } from "../CompanyProfileContainer/style";
import EditSuperintendentDetailsForm from "./EditSuperintendentDetailsForm";
import { companyDetails } from "./type";


export default function SuperintendentDetails({singleCompanyDetails}: companyDetails) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const companyFormDatails={
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNo: "Phone Number",
    type : "Role",
    emailId: 'Email Id'
  }
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Superintendent Details" />
          <EditIcon onClick={() => setDrawerOpen(true)} />
        </Box>
        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar src="" style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              {Object.keys(companyFormDatails).map(key=> 
                <Grid item lg={2} sm={4} xs={12}>
                  <Para text={companyFormDatails[key]} />
                  <H4
                    text={singleCompanyDetails[key]}
                    className="value"
                  />
                </Grid>
                )}
              {/* <Grid item lg={2} sm={4} xs={12}>
                <Para text="First Name" />
                <H4
                  text="John"
                  className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Last Name" />
                <H4
                   text="Doe"
                   className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Phone Number" />
                <H4
                    text="+1 (321) 321 123"
                    className="value"
                />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Role/Designation" />
                <H4
                   text="Manager"
                   className="value"
                />
              </Grid>

              <Grid item lg={4} sm={4} xs={12}>
                <Para text="Email id" />
                <H4
                  text="johndoe@gmail.com"
                  className="value"
                />
              </Grid> */}

              
            </Grid>
          </FlexGrid>
        </FlexBox>
      </FullCard>

      <Drawer
        open={drawerOpen}
        title="Edit Superintendent Details"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditSuperintendentDetailsForm />
      </Drawer>

    </>
  );
}
