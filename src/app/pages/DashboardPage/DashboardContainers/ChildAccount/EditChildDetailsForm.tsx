import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";

export default function EditChildAccountForm() {
  return (
    <>
      <form>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <Input
              id="CompanyName"
              name="CompanyName"
              label={"Company Name"}
              placeholder={"Example Company"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="BusinessNumber"
              name="BusinessNumber"
              label={"Business Number"}
              placeholder="eg. 123456"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Industry"
              name="Industry"
              label={"Industry"}
              placeholder={"eg. Retail"}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="Employee"
              name="Employee"
              label={"Employee"}
              placeholder={"eg. John Doe"}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="AddressLine1"
              name="AddressLine1"
              label={"Address Line 1"}
              placeholder={"123 Address Street"}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="AddressLine2"
              name="AddressLine2"
              label={"Address Line 2"}
              placeholder={"123 Address Street"}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              id="City"
              name="City"
              label={"City"}
              placeholder={"eg. Toronto"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Pincode"
              name="Pincode"
              label={"Pincode"}
              placeholder={"1234"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Province"
              name="Province"
              label={"Province"}
              placeholder={"eg. Ontario"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="Country"
              name="Country"
              label={"Country"}
              placeholder={"eg. Canada"}
            />
          </Grid>
        </GridContainer>
        <DrawerFooter>
                <Button
                secondary
                label="Cancel"
                size="medium"
                />
                <Button
                label="Save"
                size="medium"
                />
      </DrawerFooter>
      </form>
    </>
  );
}
