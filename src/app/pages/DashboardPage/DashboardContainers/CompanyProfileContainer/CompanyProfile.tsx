import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ContainerTitle } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import CompanyDetails from "./CompanyDetails";
import NewColleagueForm from "./NewColleagueForm";
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
// import ColleagueDetails from "./ColleagueDetails";
import { ColleagueDetailsType } from "./types";
import EditColleagueDetailsForm from "./EditColleagueDetailsForm";
import NewColleague from "./NewColleague";
import CompanyDetailsSkeleton from "./CompanyDetailsSkeleton";
import AdminDetailsSkeleton from "./AdminDetailsSkeleton";
import { AuthUser } from "types";

export default function CompanyProfile({ path: string }) {
  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });

  const { user } = auth;

  const [colleagueDetails, setColleagueDetails] = useState<any>(null);
  const [companyDrawerOpen, setCompanyDrawerOpen] = useState(false);
  const [colleagueDrawerOpen, setColleagueDrawerOpen] = useState(false);
  const [selectedColleague, setSelectedColleague] = useState<any>(null);
  const [companyDetails, setCompanyDetails] = useState<any>(null);
  const [adminDetails, setAdminDetails] = useState<any>(null);
  const [colleagueList, setColleagueList] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const saveColleague = async (values) => {
    values["companyId"] = companyDetails?.companyId;
    const res = await inviteColleague(values);
    if (res.success) {
      const colleagueResponse = await fetchColleagues();
      setColleagueList(colleagueResponse?.response?.data?.data);
    }
    return res.success;
  };

  const updateCompanyDetails = async (values) => {
    values["companyId"] = companyDetails?.companyId;
    const res = await updateCompanyProfile(values);
    setCompanyDrawerOpen(false);
    const companyResponse = await fetchCompanyDetails();
    setCompanyDetails(companyResponse?.response?.data?.data?.[0]);
  };

  const updateColleagueDetails = async (values) => {
    values["companyId"] = companyDetails?.companyId;
    const res = await updateColleague(values);
    setColleagueDrawerOpen(false);
    const colleagueResponse = await fetchColleagues();
    setColleagueList(colleagueResponse?.response?.data?.data);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const companyResponse = await fetchCompanyDetails();
      setCompanyDetails(companyResponse?.response?.data?.data?.[0]);
      const adminResponse = await fetchUserAdmin();
      setAdminDetails(adminResponse?.response?.data?.data?.[0]);
      const colleagueResponse = await fetchColleagues();
      setColleagueList(colleagueResponse?.response?.data?.data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (selectedColleague) {
      colleagueList?.length > 0 &&
        colleagueList?.map((data: ColleagueDetailsType) => {
          if (data?.inviteId === selectedColleague) {
            setColleagueDetails(data);
          }
        });
    }
  }, [colleagueDrawerOpen]);

  return (
    <ModuleContainer>
      <ContainerTitle title="Company Profile" />
      {loading ? (
        <CompanyDetailsSkeleton />
      ) : (
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
      )}

      {loading ? (
        <AdminDetailsSkeleton />
      ) : (
        <AdminDetails AdminDetails={adminDetails} user={user} />
      )}

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
