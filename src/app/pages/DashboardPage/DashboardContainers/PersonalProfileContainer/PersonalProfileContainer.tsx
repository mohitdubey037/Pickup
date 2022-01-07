import { useState, useEffect } from "react";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";
import { useSelector } from "react-redux";
import PersonalProfile from "./PersonalProfile";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";
import { getPersonalProfileDetails } from "services/PersonalProfileServices";
import { AuthUser } from "types";
import { ProfileState } from "./types";

export default function PersonalProfileContainer({ path: string }) {
  const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
  const [editDetailsDrawerOpen, setEditDetailsDrawerOpen] = useState(false);
  const [profileData, setProfileData] = useState<ProfileState | null>(null);
  const saveCard = () => {
    console.log("Save card called");
  };
  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });
  const { user } = auth;
  useEffect(() => {
    (async () => {
      const res = (await getPersonalProfileDetails(user?.userId)) as any;
      console.log(res);
      if (res.success) {
        const profileDetails = res?.response?.data?.data;
        console.log("profileDetailsRes", profileDetails);
        setProfileData(profileDetails);
      }
    })();
  }, []);
  return (
    <ModuleContainer>
      <ContainerTitle>Personal Profile</ContainerTitle>
      <PersonalProfile
        profile={{
          avatar: "https://i.pravatar.cc/300",
          firstName: "John",
          lastName: "jeo",
          phoneNumber: "9876543215",
          role: "Manager",
          email: "johnjeo@gmail.com",
        }}
        setPasswordDrawerOpen={setPasswordDrawerOpen}
        setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
        profileData={profileData}
      />
      <Drawer
        open={passwordDrawerOpen}
        title="Change Password"
        setDrawerOpen={(flag) => setPasswordDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <ChangePasswordForm
          setPasswordDrawerOpen={setPasswordDrawerOpen}
          saveAction={saveCard}
        />
      </Drawer>
      <Drawer
        open={editDetailsDrawerOpen}
        title="Edit Personal Details"
        setDrawerOpen={(flag) => setEditDetailsDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        <EditPersonalDetailsForm
          setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
          saveAction={saveCard}
          profileData={profileData}
        />
      </Drawer>
    </ModuleContainer>
  );
}
