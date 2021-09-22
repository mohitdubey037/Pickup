import { Paper } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper } from "app/components/Input/style";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { Button } from "../../../../components/Buttons";
import companyProfileSchema from "./CompanyProfileSchema";
import ModuleContainer from "app/components/ModuleContainer";

export default function CompanyProfile({ path: string }) {
  const Save = () => {};
  const {
    handleChange,
    values: { email },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { companyName: "",
    firstName: "",
    lastName: "",
    phoneNumber:"",
    Role:"",
    email:"",
    notificationFrequency:"",
    Permission:""
},
    validationSchema: companyProfileSchema,
    onSubmit: Save,
  });
  return (
<ModuleContainer>
    <ContainerTitle>Personal Profile</ContainerTitle>
    <Paper 
    style={{padding:"10px"}}>
      <FormWrapper>
        <form>
          <Typography className="typography" variant="h1" component="h3">
            <FormContainerTitle>New Colleague</FormContainerTitle>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>

            <Grid item xs={4}>
              <Input id="firstName"
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.firstName && errors.firstName} 
            label={"First Name"} 
            placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={4}>
              <Input id="lastName"
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.lastName && errors.lastName} 
             label={"Last Name"}
              placeholder={"Start typing"} />
            </Grid>

            <Grid item xs={4}>
              <Input id="phoneNumber"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.phoneNumber && errors.phoneNumber} 
             label={"Phone Number"} 
             placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={4}>
              <Input id="Role"
            name="Role"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.Role && errors.Role} 
             label={"Role/Designation"} 
             placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={4}>
              <Input id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && errors.email} 
            label={"Email id"} placeholder={"Start typing"} />
            </Grid>
            <Grid item xs={4}>
              <Input id="notificationFrequency"
            name="notificationFrequency"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.notificationFrequency && errors.notificationFrequency} 
                label={"Notification Frequency"}
                placeholder={"Start typing"}
                
              />
              
            </Grid>
            <Grid item xs={4}>
              <Input id="Permission"
            name="Permission"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.Permission && errors.Permission}  
            label={"Permission"} placeholder={"Start typing"} />
             
            </Grid>
           
            <Grid>
                <Button 
      
      label="Save" onClick={handleSubmit}/></Grid>
           
          </Grid>
        </form>
      </FormWrapper>
      
    </Paper>
    
         
    </ModuleContainer>
  );
}
