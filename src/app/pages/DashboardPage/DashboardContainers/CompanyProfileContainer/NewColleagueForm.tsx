import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { FormikValues } from "formik";
import { CustomInput } from "./style";
import {PERMISSION_TYPES} from '../../../../../constants'
import Select from "app/components/Select";
function NewColleagueForm(props: { formik: FormikValues }) {
  const { handleChange, errors,title, touched,values, handleBlur, handleSubmit } =
    props.formik;
  return (
    <FullCard>
      <Flex direction={"column"}>
        <Typography className="typography" variant="h1" component="h3">
          <FormContainerTitle>New Colleague</FormContainerTitle>
        </Typography>
        <Flex direction={"column"}>
          <Flex style={{marginTop:20}} >
            <CustomInput
              id="firstName"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.firstName && errors.firstName}
              label={"First Name"}
              placeholder={"John"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              id="lastName"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
              label={"Last Name"}
              placeholder={"Doe"}
              style={{ flex: 1, marginRight: 30 }}
            />

            <CustomInput
              id="phoneNumber"
              name="phoneNumber"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.phoneNumber && errors.phoneNumber}
              label={"Phone Number"}
              placeholder={"(999)-999-9999"}
              style={{ flex: 1, marginRight: 30 }}
            />
          </Flex>
          <Flex style={{marginTop:20}} >
            <CustomInput
              id="Role"
              name="Role"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.Role && errors.Role}
              label={"Role/Designation"}
              placeholder={"eg. Manager"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && errors.email}
              label={"Email id"}
              placeholder={"johndoe@pickups.com"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              id="notificationFrequency"
              name="notificationFrequency"
              onBlur={handleBlur}
              onChange={handleChange}
              error={
                touched.notificationFrequency && errors.notificationFrequency
              }
              label={"Notification Frequency"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
          </Flex>
          <Flex style={{marginTop:20}} >
          <Grid item xs={11}>
            <Select
              id="Permission"
              name="Permission"
              options={PERMISSION_TYPES}
              label={"Permission"}
              value={values[title+"Permission"]}
              
            />
            </Grid>
          </Flex>
          <Flex direction={"row-reverse"} style={{marginTop:20}}  >
            <div style={{ marginRight: 30,width:148}}>
              <Button label="Save" onClick={handleSubmit} />

            </div>
            
          </Flex>
          <div style={{marginLeft:5,width:130}} >
            <Button label="Add Colleague" onClick={handleSubmit} style={{marginTop:100,width:150}}/>
          </div>
        </Flex>
      </Flex>
      
    </FullCard>
  );
}

export default NewColleagueForm;
