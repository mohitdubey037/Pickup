import React, { useState } from "react";
import { Input } from "app/components/Input";
import { H3 } from "app/components/Typography/Typography";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box, Grid } from "@mui/material";
import { CustomLink } from "app/components/Typography/Links";
import { Drawer } from "app/components/Drawer";
import CardList from "./CardList";

export default function Cards({formik}:{formik: any}){
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { handleChange, values, errors, touched, handleBlur } = formik;

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
            onClick={() => setDrawerOpen(true)}
          />
        </Box>
        <GridContainer container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              id="cardNumber"
              name="number"
              onBlur={handleBlur}
              initValue={values.number}
              onChange={handleChange}
              error={touched.number && errors.number}
              label={"Card Number"}
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
              initValue={values.expiryDate}
              onChange={handleChange}
              error={touched.expiryDate && errors.expiryDate}
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
              initValue={values.cvd}
              // onChange={handleChange}
              onChange={handleChange}
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
              initValue={values.name}
              onChange={handleChange}
              error={touched.name && errors.name}
              label={"Name on Card"}
              placeholder={"John Doe"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="nickName"
              name="nickname"
              onBlur={handleBlur}
              onChange={handleChange}
              initValue={values.nickname}
              error={touched.nickname && errors.nickname}
              label={"Nick name (optional)"}
              placeholder={"Nickname"}
            />
          </Grid>
        </GridContainer>
      </form>


      <Drawer
        open={drawerOpen}
        title="Share Cards"
        setDrawerOpen={setDrawerOpen}
        closeIcon
      >
        <CardList />
      
      </Drawer>

    </Box>
  );
}
