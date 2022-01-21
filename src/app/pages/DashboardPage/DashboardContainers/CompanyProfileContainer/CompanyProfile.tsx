import { Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
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
import {
  fetchColleagues,
  fetchCompanyDetails,
  fetchUserAdmin,
  inviteColleague,
  updateColleague,
  updateCompanyProfile,
} from "services/CompanyService";
import AdminDetails from "./AdminDetails";
import ColleagueDetails from "./ColleagueDetails";
import { ColleagueDetailsType } from "./types";
import EditColleagueDetailsForm from "./EditColleagueDetailsForm";
import NewColleague from "./NewColleague";

export default function CompanyProfile({ path: string }) {
  const [colleagueDetails, setColleagueDetails] = useState<any>(null);
  const [companyDrawerOpen, setCompanyDrawerOpen] = useState(false);
  const [colleagueDrawerOpen, setColleagueDrawerOpen] = useState(false);
  const [selectedColleague, setSelectedColleague] = useState<any>(null);
  const [companyDetails, setCompanyDetails] = useState<any>(null);
  const [adminDetails, setAdminDetails] = useState<any>(null);
  const [colleagueList, setColleagueList] = useState<any>(null);

  const saveColleague = async (values) => {
    // console.log(values);
    // console.log(companyDetails?.companyId);
    values["companyId"] = companyDetails?.companyId;
    console.log(values);
    // const res = await inviteColleague(values);
    // console.log(res);
    const colleagueResponse = await fetchColleagues();
    // console.log("colleagueResponse", colleagueResponse);
    setColleagueList(colleagueResponse?.response?.data?.data);
  };
  const updateCompanyDetails = async (values) => {
    // console.log(companyDetails?.companyId);
    values["companyId"] = companyDetails?.companyId;
    // console.log(values);
    const res = await updateCompanyProfile(values);
    // console.log(res);
    setCompanyDrawerOpen(false);
    const companyResponse = await fetchCompanyDetails();
    setCompanyDetails(companyResponse?.response?.data?.data?.[0]);
  };
  const updateColleagueDetails = async (values) => {
    // console.log(companyDetails?.companyId);
    values["companyId"] = companyDetails?.companyId;
    // console.log(values);
    const res = await updateColleague(values);
    // console.log(res);
    setColleagueDrawerOpen(false);
    const colleagueResponse = await fetchColleagues();
    // console.log(colleagueResponse);
    setColleagueList(colleagueResponse?.response?.data?.data);
  };

  useEffect(() => {
    (async () => {
      const companyResponse = await fetchCompanyDetails();
      setCompanyDetails(companyResponse?.response?.data?.data?.[0]);
      const adminResponse = await fetchUserAdmin();
      setAdminDetails(adminResponse?.response?.data?.data?.[0]);
      const colleagueResponse = await fetchColleagues();
      // console.log(colleagueResponse);
      setColleagueList(colleagueResponse?.response?.data?.data);
    })();
  }, []);

  useEffect(() => {
    if (selectedColleague) {
      colleagueList?.length > 0 &&
        colleagueList?.map((data: ColleagueDetailsType) => {
          console.log(data);
          if (data?.inviteId === selectedColleague) {
            console.log(data);
            setColleagueDetails(data);
          }
        });
    }
  }, [colleagueDrawerOpen]);

  return (
    <ModuleContainer>
      <ContainerTitle title="Company Profile" />

      <CompanyDetails
        setCompanyDrawerOpen={setCompanyDrawerOpen}
        companyDetails={companyDetails}
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
      <AdminDetails AdminDetails={adminDetails} />
      {colleagueList?.length > 0 &&
        colleagueList?.map((data: ColleagueDetailsType, index: number) => (
          <NewColleague
            setColleagueDrawerOpen={setColleagueDrawerOpen}
            colleagueDetails={data}
            key={data?.inviteId}
            index={index}
            setSelectedColleague={setSelectedColleague}
            selectedColleague={selectedColleague}
          />
          // <ColleagueDetails
          //   setColleagueDrawerOpen={setColleagueDrawerOpen}
          //   colleagueDetails={data}
          //   key={data?.inviteId}
          //   index={index}
          //   setSelectedColleague={setSelectedColleague}
          //   selectedColleague={selectedColleague}
          // />
        ))}
      <NewColleagueForm saveAction={saveColleague} />
      <Drawer
        open={colleagueDrawerOpen}
        title="Edit Colleague Details"
        setDrawerOpen={(flag) => setColleagueDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditColleagueDetailsForm
          colleagueDetails={colleagueDetails}
          setColleagueDrawerOpen={setColleagueDrawerOpen}
          saveAction={updateColleagueDetails}
        />
      </Drawer>
      <Drawer
        open={companyDrawerOpen}
        title="Edit Company Details"
        setDrawerOpen={(flag) => setCompanyDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditCompanyDetailsForm
          companyDetails={companyDetails}
          setCompanyDrawerOpen={setCompanyDrawerOpen}
          saveAction={updateCompanyDetails}
        />
      </Drawer>
    </ModuleContainer>
  );
}
