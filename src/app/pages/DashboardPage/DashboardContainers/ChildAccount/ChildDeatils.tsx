import { Avatar, Box, Grid } from "@material-ui/core";
import { edit } from "app/assets/Icons";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import { Drawer } from "app/components/Drawer";
import { FullCard } from "app/components/Input/style";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { useState } from "react";
import { FlexGrid } from "../CompanyProfileContainer/style";
import EditChildDetailsForm from "./EditChildDetailsForm";
import {companyDetails } from "./type";



export default function ChildDetails({ singleCompanyDetails }: companyDetails) {
  console.log(singleCompanyDetails);
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
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Child Details" />
          <img src={edit} onClick={() => setDrawerOpen(true)} alt="" />
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
                <H4 text={singleCompanyDetails[key] || "NA"}  className="value" />
              </Grid>)}
              {/* <Grid item lg={2} sm={4} xs={12}>
                <Para text="Company Name" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["companyName"]} className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Business Number" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["businessNumber"]}  className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Industry" />
                <H4 text="Retail" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Employee Strength" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["employeeStrength2"]}  className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 1" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["addressLine2"]}  className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 2" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["addressLine1"]}  className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="City" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["city"]}  className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Pincode" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["pincode"]} className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Province" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["province"]} className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Country" />
                <H4 text={singleCompanyDetails&&singleCompanyDetails["country"]}  className="value" />
              </Grid> */}
            </Grid>
          </FlexGrid>
        </FlexBox>
      </FullCard>

      <Drawer
        open={drawerOpen}
        title="Edit Child Details"
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditChildDetailsForm />
      </Drawer>
    </>
  );
}
