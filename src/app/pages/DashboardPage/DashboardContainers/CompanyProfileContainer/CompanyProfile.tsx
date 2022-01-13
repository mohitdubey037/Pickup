import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { FormWrapper, FullCard } from "app/components/Input/style";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { Button } from "../../../../components/Buttons";
import companyProfileSchema from "./CompanyProfileSchema";
import ModuleContainer from "app/components/ModuleContainer";
import CompanyDetails from "./CompanyDetails";
import NewColleagueForm from "./NewColleagueForm";
import PersonalProfile from "../PersonalProfileContainer/PersonalProfile";
import { Drawer } from "app/components/Drawer";
import EditCompanyDetailsForm from "./EditCompanyDetailsForm";

export default function CompanyProfile({ path: string }) {
  const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
  const [editDetailsDrawerOpen, setEditDetailsDrawerOpen] = useState(false);
  const [companyDrawerOpen, setCompanyDrawerOpen] = useState(false);
  const Save = () => {};
  const formik = useFormik({
    initialValues: {
      companyName: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      Role: "",
      email: "",
      notificationFrequency: "",
      Permission: "",
    },
    validationSchema: companyProfileSchema,
    onSubmit: Save,
  });
  return (
    <ModuleContainer>
      <ContainerTitle>Company Profile</ContainerTitle>
      <CompanyDetails
        setCompanyDrawerOpen={setCompanyDrawerOpen}
        details={{
          avatar: require("../../../../assets/Icons/logoImg.svg").default,
          CompanyName: "DDT",
          BusinessNumber: "212421",
          Industry: "Retail",
          EmployeeStrength: "32",
          AddressLine1: "100 Broadview Avenue",
          AddressLine2: "Address Line 2",
          City: "Toronto",
          Pincode: "123421",
          Province: "Province",
          Country: "Canada",
          HSTNumber: "123 456 789",
        }}
      />
      {/* <PersonalProfile
        setPasswordDrawerOpen={setPasswordDrawerOpen}
        setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
        profile={{
          avatar: "https://i.pravatar.cc/300",
          firstName: "John",
          lastName: "jeo",
          phoneNumber: "9876543215",
          role: "Manager",
          email: "johnjeo23@gmail.com",
        }}
      /> */}
      {/* personal profile  */}
      <NewColleagueForm formik={formik} />
      <Drawer
        open={companyDrawerOpen}
        title="Edit Company Details"
        setDrawerOpen={(flag) => setCompanyDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditCompanyDetailsForm
          setCompanyDrawerOpen={setCompanyDrawerOpen}
          saveAction={Save}
        />
      </Drawer>
    </ModuleContainer>
  );
}
