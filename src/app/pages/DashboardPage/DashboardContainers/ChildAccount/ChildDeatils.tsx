import { Avatar, Box, Grid } from "@material-ui/core";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import { Drawer } from "app/components/Drawer";
import EditIcon from "app/components/EditIcon";
import { FullCard } from "app/components/Input/style";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { useState } from "react";
import { FlexGrid } from "../CompanyProfileContainer/style";
import EditChildDetailsForm from "./EditChildDetailsForm";

export default function ChildDetails() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text="Child Details" />
          <EditIcon onClick={() => setDrawerOpen(true)} />
        </Box>
        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar src="" style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Company Name" />
                <H4 text="Torinit" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Business Number" />
                <H4 text="212421" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Industry" />
                <H4 text="Retail" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Employee Strength" />
                <H4 text="32" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 1" />
                <H4 text="100 Broadview Avenue" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Address Line 2" />
                <H4 text="Address Line 2" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="City" />
                <H4 text="Toronto" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Pincode" />
                <H4 text="123421" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Province" />
                <H4 text="Province" className="value" />
              </Grid>

              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Country" />
                <H4 text="Canada" className="value" />
              </Grid>
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
