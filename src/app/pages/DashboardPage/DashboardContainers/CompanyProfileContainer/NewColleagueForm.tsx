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
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              id="lastName"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
              label={"Last Name"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />

            <CustomInput
              id="phoneNumber"
              name="phoneNumber"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.phoneNumber && errors.phoneNumber}
              label={"Phone Number"}
              placeholder={"Start typing"}
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
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && errors.email}
              label={"Email id"}
              placeholder={"Start typing"}
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
            <Select
              id="Permission"
              name="Permission"
              options={PERMISSION_TYPES}
              label={"Permission"}
              value={values[title+"Permission"]}
              style={{ width:1000 }}
            />
          </Flex>
          <Flex direction={"row-reverse"} style={{marginTop:20}}  >
            <div style={{ marginRight: 30,width:148}}>
              <Button label="Save" onClick={handleSubmit} />
            </div>
          </Flex>
        </Flex>
      </Flex>
    </FullCard>
  );
}

export default NewColleagueForm;
