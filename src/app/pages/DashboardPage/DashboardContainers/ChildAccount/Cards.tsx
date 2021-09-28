import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { Button } from 'app/components/Buttons';
import { Flex } from "app/components/Input/style";
export default function Cards({title}) {
    
    return (
        <> 
        <FormWrapper>
        <form>
        <Typography className="typography" variant="h1" component="h3">
           {title}
            </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>
              <Input label={"Credit Card Number"} placeholder={"**** **** **** ****"} />
            </Grid>
            <Grid item xs={4}>
              <Input label={"Expiration Date"} placeholder={"MM/YY"} />
            </Grid>
            <Grid item xs={2}>
              <Input label={"CVC"} placeholder={"CVC"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Name on Card"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Pin Code"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={5}>
              <Input label={"Nickname (optional)"} placeholder={"Start typing"} />
            </Grid>
            <Flex direction={"row"} style={{marginTop:20}}  >
            <div style={{ marginRight: 30,width:148}}>
              <Button label="+ Add New Card" />
            </div>
          </Flex>
          </Grid>
        </form>
      </FormWrapper>
        </>
    )
}
