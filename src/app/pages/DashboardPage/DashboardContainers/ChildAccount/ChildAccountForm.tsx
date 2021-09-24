import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";

export default function ChildAccountForm() {
  return (
    <>
      <FormWrapper>
        <form>
          <Typography
            className="typography"
            variant="h1"
            component="h3"
          ></Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <Input label={"Company Name"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Business Number"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Industry"} placeholder={"Retail"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Employee"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Address Line 1"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Address Line 2"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Pincode"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Province"} placeholder={"Start typing"} />
            </Grid>

            <Grid item xs={3}>
              <Input label={"City"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Country"} placeholder={"Start typing"} />
            </Grid>
          </Grid>
        </form>
      </FormWrapper>
      
    </>
  );
}
