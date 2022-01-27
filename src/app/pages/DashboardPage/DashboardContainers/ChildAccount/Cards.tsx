import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Flex } from "app/components/Input/style";
import { useFormik } from "formik";
import RadioGroup from "app/components/RadioGroup";
import { cardSchema } from "../PaymentsContainer/cardSchema";


export default function Cards({ title }) {
  const Confirm = () => {};
  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { cardType: "1", cardNumber: "", expiryDate: "", cvc: "", nameOnCard: "", pinCode: "", nickName: "" },
    validationSchema: cardSchema,
    onSubmit: Confirm,
  });
  return (
    <>
      <FormWrapper>
        <form>
          <Typography className="typography" variant="h1" component="h3">
            {title}
            
          </Typography>
          <RadioGroup
             
              options={[
                { label: "Credit Card", value: "1" },
                { label: "Debit Card", value: "0" },
              ]}
              name={"Radio Options"}
            />
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              <Input
                id="cardNumber"
                name="cardNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.cardNumber && errors.cardNumber}
                label={"Credit Card Number"}
                placeholder={"**** **** **** ****"}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="expiryDate"
                name="expiryDate"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.expiryDate && errors.expiryDate}
                label={"Expiration Date"}
                placeholder={"MM/YY"}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                id="cvc"
                name="cvc"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.cvc && errors.cvc}
                label={"CVC"}
                placeholder={"CVC"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="nameOnCard"
                name="nameOnCard"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.nameOnCard && errors.nameOnCard}
                label={"Name on Card"}
                placeholder={"John Doe"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="pinCode"
                name="pinCode"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.pinCode && errors.pinCode}
                label={"Pin Code"}
                placeholder={"Start typing"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="nickName"
                name="nickName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.nickName && errors.nickName}
                label={"Nick name (optional)"}
                placeholder={"Start typing"}
              />
              <div style={{ marginRight: 30, width: 140, justifyContent:'center'}}>
                <Button style={{marginTop:25,flexDirection:'inherit' }} label="+ Add New Card" />
              </div>
            </Grid>
            
              
            
          </Grid>
        </form>
        
            
      </FormWrapper>
      <Flex style={{justifyContent:'space-evenly'}}>
      <div style={{ width: 180,marginLeft:510,justifyContent:'space-between'}}>
                <Button secondary style={{marginTop:100 }} label="Invite and Create New" />
              </div>
              <div style={{ width: 170, justifyContent:'space-around'}}>
                <Button  style={{marginRight:'100',marginTop:100}} label="Invite Child" />
              </div>
              </Flex>
    </>
  );
}
