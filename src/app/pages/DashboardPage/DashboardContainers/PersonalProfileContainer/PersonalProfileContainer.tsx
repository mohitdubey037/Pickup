import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { H2 } from "app/components/Typography/Typography";
import PersonalProfile from "./PersonalProfile";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";
import {
  editPersonalProfileDetails,
  changeProfilePassword,
  getPersonalProfileDetails,
} from "services/PersonalProfileServices";
import PersonalProfileSkeleton from "./PersonalProfileSkeleton";
import { getUserId } from "utils/commonUtils";

const DRAWER_TITLE = {
  changePassword: "Change Password",
  editDetails: "Edit Personal Details",
};

export default function PersonalProfileContainer({ path: string }) {
  const dispatch = useDispatch();
  const userId = getUserId();

  const [drawerType, setDrawerType] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [personalProfileDetails, setPersonalProfileDetails] =
    useState<any>(null);

  const openDrawer = (type: any) => {
    setDrawerType(type);
    setDrawerOpen(true);
  };

  useEffect(() => {
    fetchPersonalProfile();
  }, []);

  const fetchPersonalProfile = async () => {
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

  const editDetails = async (values) => {
    const res: any = await editPersonalProfileDetails(values);
    if (res?.success) {
      fetchPersonalProfile();
      setDrawerOpen(false);
    }
  };

  const changePassword = async (values) => {
    const res = (await changeProfilePassword(values)) as any;
    if (res?.success) {
      setDrawerOpen(false);
    }
  };

  return (
    <ModuleContainer>
      <H2 title="Personal Profile" />

      {loading ? (
        <PersonalProfileSkeleton />
      ) : (
        <PersonalProfile
          data={personalProfileDetails}
          handleChangePassword={() => openDrawer("changePassword")}
          handleEditDetails={() => openDrawer("editDetails")}
        />
      )}

      <Drawer
        open={drawerOpen}
        title={DRAWER_TITLE?.[drawerType] || ""}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        {drawerType === "changePassword" ? (
          <ChangePasswordForm
            setDrawerOpen={setDrawerOpen}
            saveAction={changePassword}
          />
        ) : drawerType === "editDetails" ? (
          <EditPersonalDetailsForm
            data={personalProfileDetails}
            setDrawerOpen={setDrawerOpen}
            saveAction={editDetails}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
}
