import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";

export default function AdminDetails() {
    return (
        <> 
        <FormWrapper>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>
              <Input label={"First Name"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Last Name"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Phone Number"} placeholder={"Retail"} />
            </Grid>
            <Grid item xs={3}>
              <Input label={"Role/Designation"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Email id"} placeholder={"Start typing"} />
            </Grid>
          </Grid>
        </form>
      </FormWrapper>
        </>
    );
}
