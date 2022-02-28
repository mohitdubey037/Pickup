import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { H2 } from "app/components/Typography/Typography";
import { getPersonalProfileDetails } from "services/PersonalProfileServices";
import { getUserId } from "utils/commonUtils";
import PersonalProfile from "./PersonalProfile";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";
import PersonalProfileSkeleton from "./PersonalProfileSkeleton";

const DRAWER_TITLE = {
  changePassword: "Change Password",
  editDetails: "Edit Personal Details",
};

const PersonalProfileContainer = ({ path }) => {
  const dispatch = useDispatch();
  const userId = getUserId();

  const [loading, setLoading] = useState<boolean>(true);
  const [personalProfileDetails, setPersonalProfileDetails] =
    useState<any>(null);

  const [drawerType, setDrawerType] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const openDrawer = (type: any) => {
    setDrawerType(type);
    setDrawerOpen(true);
  };

  useEffect(() => {
    fetchPersonalProfile();
  }, []);

  const fetchPersonalProfile = async () => {
    setLoading(true);
    const res: any = await getPersonalProfileDetails(userId);
    if (res?.success) {
      setPersonalProfileDetails(res?.response?.data?.data);
      dispatch({
        type: "UPDATE_USER",
        user: res?.response?.data?.data,
      });
    }
    setLoading(false);
  };

  return (
    <ModuleContainer>
      <H2 title="Personal Profile" />

      {loading ? (
        <PersonalProfileSkeleton />
      ) : (
        <PersonalProfile
          data={personalProfileDetails}
          handleEditDetails={() => openDrawer("editDetails")}
          handleChangePassword={() => openDrawer("changePassword")}
        />
      )}

      <Drawer
        open={drawerOpen}
        title={DRAWER_TITLE?.[drawerType] || ""}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
      >
        {drawerType === "changePassword" ? (
          <ChangePasswordForm setDrawerOpen={setDrawerOpen} />
        ) : drawerType === "editDetails" ? (
          <EditPersonalDetailsForm
            data={personalProfileDetails}
            setDrawerOpen={setDrawerOpen}
            onEditSuccess={fetchPersonalProfile}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default PersonalProfileContainer;
