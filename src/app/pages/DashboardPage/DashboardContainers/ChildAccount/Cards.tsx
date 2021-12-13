import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Flex } from "app/components/Input/style";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CardSchema from "./CardSchema";
import RadioGroup from "app/components/RadioGroup";

export default function Cards({ title }) {
  const dispatch = useDispatch();
  const Confirm = () => {};
  const {
    handleChange,
    values: { CreditCardNumber },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      CreditCardNumber: "",
      ExpirationDate: "",
      CVC: "",
      PinCode: "",
      Nickname: "",
      NameonCard: "",
    },
    validationSchema: CardSchema,
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
                id="CreditCardNumber"
                name="CreditCardNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.CreditCardNumber && errors.CreditCardNumber}
                label={"Credit Card Number"}
                placeholder={"**** **** **** ****"}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                id="ExpirationDate"
                name="ExpirationDate"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.ExpirationDate && errors.ExpirationDate}
                label={"Expiration Date"}
                placeholder={"MM/YY"}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                id="CVC"
                name="CVC"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.CVC && errors.CVC}
                label={"CVC"}
                placeholder={"CVC"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="NameonCard"
                name="NameonCard"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.NameonCard && errors.NameonCard}
                label={"Name on Card"}
                placeholder={"Start typing"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="PinCode"
                name="PinCode"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.PinCode && errors.PinCode}
                label={"Pin Code"}
                placeholder={"Start typing"}
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="Nickname"
                name="Nickname"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Nickname && errors.Nickname}
                label={"Nickname (optional)"}
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
