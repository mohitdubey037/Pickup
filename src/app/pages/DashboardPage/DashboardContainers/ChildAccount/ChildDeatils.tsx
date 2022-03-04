import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox, FlexGrid, FullCard } from "app/components/CommonCss/CommonCss";
import { Drawer } from "app/components/Drawer";
import EditIcon from "app/components/EditIcon/EditIcon";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { useState } from "react";
import EditChildDetailsForm from "./EditChildDetailsForm";
import {inputProps } from "./type";

export default function ChildDetails({ singleCompanyDetails, saveAction }: inputProps){

  const [drawerOpen, setDrawerOpen] = useState(false);

  const companyFormDatails={
    companyName:"Company Name",
    businessNumber:"Business Number", 
    industry: "Industry", 
    employeeStrength: "Employee Strength",
    address1: 'Address Line 1',
    address2: 'Address Line 2',
    city: 'City',
    pincode: 'Pincode',
    province: 'Province',
    country: 'Country'
  }

  const handleCloseDrawer = () => {
    saveAction();
    setDrawerOpen(false);
  }

  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Company Details" />
          <EditIcon onClick={() => setDrawerOpen(true)} />
        </Box>
        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar src={singleCompanyDetails?.companyProfileImage} style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
            {Object.keys(companyFormDatails).map(key=>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text={companyFormDatails[key]} />
                <H4 text={singleCompanyDetails[key] || "NA"}  className="value" />
              </Grid>)}
            </Grid>
          </FlexGrid>
        </FlexBox>
      </FullCard>
              
      <Drawer
        open={drawerOpen}
        title="Edit Child Details"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
      >
        <EditChildDetailsForm 
          saveAction = {() => saveAction()} 
          singleCompanyDetails={singleCompanyDetails}
          handleCloseDrawer = {handleCloseDrawer} />
      </Drawer>
    </>
  );
}
