import React from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { Flex } from "app/components/Input/style";
import { useFormik } from "formik";
import RadioGroup from "app/components/RadioGroup";
import { cardSchema } from "../PaymentsContainer/cardSchema";
import { H3, H4 } from "app/components/Typography/Typography";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/material";
import { CustomLink } from "app/components/Typography/Links";

export default function Cards() {
  const Confirm = () => {};
  const { handleChange, errors, touched, handleBlur, handleSubmit } = useFormik(
    {
      initialValues: {
        cardType: "1",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        nameOnCard: "",
        pinCode: "",
        nickName: "",
      },
      validationSchema: cardSchema,
      onSubmit: Confirm,
    }
  );
  return (
    <Box mb={2}>
      <form>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <H3 text="Cards" />
          <CustomLink
            label={`Share Current Cards With Child`}
            style={{ color: "#1B8AF0" }}
          />
        </Box>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup
              label="Method of Payment"
              options={[
                { label: "Credit Card", value: "1" },
                { label: "Debit Card", value: "0" },
              ]}
              name={"Radio Options"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <Input
              id="pinCode"
              name="pinCode"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.pinCode && errors.pinCode}
              label={"Pin Code"}
              placeholder={"Pin Code"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="nickName"
              name="nickName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.nickName && errors.nickName}
              label={"Nick name (optional)"}
              placeholder={"Nickname"}
            />
            <Button label="+ Add New Card" size="medium" />
          </Grid>
        </GridContainer>
      </form>
    </Box>
  );
}
