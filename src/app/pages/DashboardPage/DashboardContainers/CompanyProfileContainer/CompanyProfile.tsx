import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";

import { H2 } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import { Drawer } from "app/components/Drawer";
import {
  fetchColleagues,
  fetchCompanyDetails,
  fetchUserAdmin,
} from "services/CompanyService";
import CompanyDetails from "./CompanyDetails";
import NewColleagueForm from "./NewColleagueForm";
import EditCompanyDetailsForm from "./EditCompanyDetailsForm";
import AdminDetails from "./AdminDetails";
import { ColleagueDetailsType } from "./types";
import EditColleagueDetailsForm from "./EditColleagueDetailsForm";
import ColleagueDetails from "./ColleagueDetails";
import CompanyDetailsSkeleton from "./CompanyDetailsSkeleton";
import AdminDetailsSkeleton from "./AdminDetailsSkeleton";

const DRAWER_TITLE = {
  editCompany: "Edit Company Details",
  editColleague: "Edit Colleague Details",
};

const CompanyProfile = ({ path }) => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  const [loading, setLoading] = useState({
    company: false,
    admin: false,
  });
  const [companyDetails, setCompanyDetails] = useState<any>(null);
  const [adminDetails, setAdminDetails] = useState<any>(null);
  const [colleagueList, setColleagueList] = useState<any>(null);

  const [drawerType, setDrawerType] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedColleague, setSelectedColleague] = useState<
    ColleagueDetailsType | undefined
  >();

  const openDrawer = (type: string, data?: ColleagueDetailsType) => {
    if (type === "editColleague") {
      setSelectedColleague(data);
    }
    setDrawerType(type);
    setDrawerOpen(true);
  };

  useEffect(() => {
    fetchCompanyProfile();
    fetchUserAdminDetails();
    fetchColleagueDetails();
  }, []);

  const showLoader = (type: string, value: boolean) => {
    setLoading((state) => ({
      ...state,
      [type]: value,
    }));
  };

  const fetchCompanyProfile = async () => {
    showLoader("company", true);
    const res: any = await fetchCompanyDetails();
    if (res?.success) {
      setCompanyDetails(res?.response?.data?.data?.[0]);
    }
    showLoader("company", false);
  };

  const fetchUserAdminDetails = async () => {
    showLoader("admin", true);
    const res: any = await fetchUserAdmin();
    if (res?.success) {
      setAdminDetails(res?.response?.data?.data?.[0]);
    }
    showLoader("admin", false);
  };

  const fetchColleagueDetails = async () => {
    const res: any = await fetchColleagues();
    if (res?.success) {
      setColleagueList(res?.response?.data?.data);
    }
  };

  if ([4].indexOf(authUser?.roleId)) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <H2 title="Company Profile" />

      {loading.company ? (
        <CompanyDetailsSkeleton />
      ) : (
        <CompanyDetails
          data={companyDetails}
          handleEditDetails={() => openDrawer("editCompany")}
        />
      )}

      {loading.admin ? (
        <AdminDetailsSkeleton />
      ) : (
        <AdminDetails data={adminDetails} />
      )}

      {colleagueList?.length > 0 &&
        colleagueList?.map((data: ColleagueDetailsType, index: number) => (
          <ColleagueDetails
            key={data?.inviteId}
            index={index}
            data={data}
            handleEditDetails={() => openDrawer("editColleague", data)}
          />
        ))}

      <NewColleagueForm
        companyId={companyDetails?.companyId}
        onAddSuccess={fetchColleagueDetails}
      />

      <Drawer
        open={drawerOpen}
        title={DRAWER_TITLE?.[drawerType] || ""}
        setDrawerOpen={setDrawerOpen}
        closeIcon={true}
      >
        {drawerType === "editCompany" ? (
          <EditCompanyDetailsForm
            data={companyDetails}
            setDrawerOpen={setDrawerOpen}
            onEditSuccess={fetchCompanyProfile}
          />
        ) : drawerType === "editColleague" ? (
          <EditColleagueDetailsForm
            data={selectedColleague}
            setDrawerOpen={setDrawerOpen}
            onEditSuccess={fetchColleagueDetails}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default CompanyProfile;
