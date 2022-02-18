import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";

export default function EditSuperintendentDetailsForm() {
  
  return (
    <>
        <DrawerInnerContent>
        <GridContainer container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="FirstName"
                name="FirstName"
                label={"First Name"}
                placeholder={"John"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="LastName"
                name="LastName"
                label={"Last Name"}
                placeholder={"Doe"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="PhoneNumber"
                name="PhoneNumber"
                label={"Phone Number"}
                placeholder={"+1 (999)-999-9999"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Role"
                name="Role"
                label={"Role/Designation"}
                placeholder={"eg. Manager"}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="Email"
                name="Email"
                label={"Email id"}
                placeholder={"johndoe@gmail.com"}
              />
            </Grid>
          </GridContainer>
          </DrawerInnerContent>
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
    </>
  );
}
