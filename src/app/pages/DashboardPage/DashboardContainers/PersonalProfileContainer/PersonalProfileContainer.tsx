import { useState } from "react";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";
import PersonalProfile from "./PersonalProfile";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";

export default function PersonalProfileContainer({ path: string }) {
  const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
  const [editDetailsDrawerOpen, setEditDetailsDrawerOpen] = useState(false);
  const saveCard = () => {
    console.log("Save card called");
  };
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
        />
      </Drawer>
    </ModuleContainer>
  );
}
