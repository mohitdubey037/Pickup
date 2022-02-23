import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Input } from "app/components/Input";
import { H3 } from "app/components/Typography/Typography";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box } from "@mui/material";
import { CustomLink } from "app/components/Typography/Links";
import { Drawer } from "app/components/Drawer";
import CardList from "./CardList";

export default function Cards({formik}:{formik: any}){
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { handleChange, values, errors, touched, handleBlur, setFieldValue } = formik;

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);
  };

  return (
    <Box mb={2}>
      <form>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <H3 text="Cards" />
          <CustomLink
            label={`Share Current Cards With Child`}
            style={{ color: "#1B8AF0" }}
            link={() => setDrawerOpen(true)}
          />
        </Box>
        <GridContainer container spacing={2}>
          {/* <Grid item xs={12}>
            <RadioGroup
              label="Method of Payment"
              options={[
                { label: "Credit Card", value: "creditCard" },
                { label: "Debit Card", value: "debitCard" },
              ]}
              name={"Radio Options"}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <Input
              id="cardNumber"
              name="number"
              onBlur={handleBlur}
              value={values.number}
              onChange={(e) => onChangeHandler(e, `number`)}
              error={touched.number && errors.number}
              label={"Credit Card Number"}
              placeholder={"**** **** **** ****"}
              type="mask"
              maskProps={{
                  mask: "9999 9999 9999 9999",
                  maskPlaceholder: null,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input
              id="expiryDate"
              name="expiryDate"
              onBlur={handleBlur}
              value={values.expiryYear}
              onChange={(e) => onChangeHandler(e, `expiryDate`)}
              error={touched.expiryYear && errors.expiryYear}
              label={"Expiration Date"}
              placeholder={"MM/YY"}
              type="mask"
              maskProps={{
                mask: "99/99",
                maskPlaceholder: null,
            }}
            required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input
              id="cvc"
              name="cvd"
              onBlur={handleBlur}
              value={values.cvd}
              // onChange={handleChange}
              onChange={(e) => onChangeHandler(e, `cvd`)}
              error={touched.cvd && errors.cvd}
              label={"CVC"}
              placeholder={"CVC"}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="nameOnCard"
              name="name"
              onBlur={handleBlur}
              value={values.name}
              onChange={(e) => onChangeHandler(e, `name`)}
              error={touched.name && errors.name}
              label={"Name on Card"}
              placeholder={"John Doe"}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Input
              id="pinCode"
              name="pincard"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.pincard}
              error={touched.pincard && errors.pincard}
              label={"Pin Code"}
              placeholder={"Pin Code"}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <Input
              id="nickName"
              name="nickname"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nickname}
              error={touched.nickname && errors.nickname}
              label={"Nick name (optional)"}
              placeholder={"Nickname"}
            />
            {/* <Button label="+ Add New Card" size="medium" /> */}
          </Grid>
        </GridContainer>
      </form>


      <Drawer
            open={drawerOpen}
            title="Share Cards"
            setDrawerOpen={(flag) => setDrawerOpen(flag)}
            closeIcon={true}
            actionButtons={true}
          >
           <CardList />
          
          </Drawer>

    </Box>
  );
}
