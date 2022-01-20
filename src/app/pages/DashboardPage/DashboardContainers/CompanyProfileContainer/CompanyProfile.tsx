import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import AdminDetails from "./AdminDetails";
import NewColleague from "./NewColleague";

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

  const companyDetails = useSelector((state:any) => state?.auth?.user?.companyDetails?.[0]);
  console.log(companyDetails)
  return (
    <ModuleContainer>
      <ContainerTitle title="Company Profile" />

      <CompanyDetails
        setCompanyDrawerOpen={setCompanyDrawerOpen}
        companyDetails={ companyDetails}
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
      <AdminDetails />

      <NewColleague />

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
