import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import { Drawer } from "app/components/Drawer";
import EditIcon from "app/components/EditIcon";
import { FullCard } from "app/components/Input/style";
import {
  H3,
  Para,
  H4,
} from "app/components/Typography/Typography";
import { companyDetailsSchema } from "app/pages/AuthScreens/SignUpScreens/signUpSchemas";
import { useState } from "react";
import { FlexGrid } from "../CompanyProfileContainer/style";
import EditSuperintendentDetailsForm from "./EditSuperintendentDetailsForm";


export default function SuperintendentDetails({ singleCompanyDetails, saveAction }) {
  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const companyFormDatails={
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNo: "Phone Number",
    type : "Role",
    emailId: 'Email Id'
  }

  const handleCloseDrawer = () => {
    saveAction();
    setDrawerOpen(false);
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
              {Object.keys(companyFormDatails).map(key=> {
                return (
                <Grid item lg={2} sm={4} xs={12}>
                  <Para text={companyFormDatails[key]} />
                  <H4
                    text={
                      singleCompanyDetails[key] === 1 ? "Executive" 
                      : 
                      singleCompanyDetails[key] === 2 ? "SuperIndendent" 
                      :
                      singleCompanyDetails[key] === 3 ? "Manager" 
                      : 
                      singleCompanyDetails[key] === 4 ? "Admin" 
                      :
                      singleCompanyDetails[key]
                    }
                    className="value"
                  />
                </Grid>
                )
              }
                )}              
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
        <EditSuperintendentDetailsForm 
          saveAction = {() => saveAction()} 
          singleCompanyDetails={singleCompanyDetails}
          handleCloseDrawer = {handleCloseDrawer}
        />
      </Drawer>

    </>
  );
}
