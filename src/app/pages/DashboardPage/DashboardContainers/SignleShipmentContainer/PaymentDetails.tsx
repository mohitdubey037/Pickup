import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { Checkbox } from "app/components/Checkbox";
import { Button } from "../../../../components/Buttons/index";
function PaymentDetails() {
  return (
    <FormWrapper style={{ paddingLeft: 10 }}>
      <form>
        <RadioGroup
          defaultValue="0"
          label="Method of Payment"
          options={[
            { label: "Credit Card", value: "0" },
            { label: "Debit Card", value: "1" },
          ]}
          name={"Radio Options"}
        />
        <Grid style={{ paddingBottom: 20}}>

        <Grid item xs={11}>
          <Input
            id={"CreditCardNumber"}
            name={"CreditCardNumber"}
            label={"Credit Card Number"}
            placeholder={"**** **** **** ****"}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            id={"ExpirationDate"}
            name={"ExpirationDate"}
            label={"Expiration Date"}
            placeholder={"MM/YY"}
          />
          <Grid item xs={4} >
            <Input id={"CVC"} name={"CVC"} label={"CVC"} placeholder={"CVC"} />
          </Grid>
          
        </Grid>
        <Grid item xs={11}>
          <Input
            id={"NameonCard"}
            name={"NameonCard"}
            label={"Name on Card"}
            placeholder={"John Doe"}
          /></Grid>
          <Grid item xs={11}>
          <Input
            id={"PinCode"}
            name={"PinCode"}
            label={"PinCode"}
            placeholder={"Pin Code"}
          /></Grid>
          <Grid item xs={11}>
          <Input
            id={"Nickname"}
            name={"Nickname"}
            label={"Nickname (optional)"}
            placeholder={"Nickname"}
          /></Grid>
          </Grid>
          <div style={{ display: "flex" }}>
          <span style={{ padding: "0px 10px 0px 0px" }}>
            <Checkbox label="Save your Card" />
          </span>
          <span style={{ display: "flex" }}>
        
          </span>
        </div>
        <Flex
        style={{ marginBottom: 10, padding: "inherit" ,paddingTop:20}}
        direction={"row-reverse"}
      >
        <Button
          style={{ width: 190 }}
          label="Confirm Payment"
        />
        <Button
          style={{ width: 190, marginRight: 140 }}
          secondary
          label="Cancel"
          
        />
        </Flex>
      </form>
    </FormWrapper>
  );
}

export default PaymentDetails;
