import { Paper } from "@material-ui/core";
import ModuleContainer from "app/components/ModuleContainer";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { PersonalProfileType } from "./types";
import { Button } from "../../../../components/Buttons";
import { ComponentStyle } from "./styles";

interface CardInterface {
  profile: PersonalProfileType;
}

export default function PersonalProfile(props: CardInterface) {
  const { avatar, firstName, lastName, phoneNumber, role, email } =
    props.profile;

  return (
    <ModuleContainer>
      <ContainerTitle>Personal Profile</ContainerTitle>

      <Paper
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1,textAlign:'left' ,marginBottom:20}}>
            <FormContainerTitle>Personal Details</FormContainerTitle>
          </div>
          <button>Edit</button>
        </div>
        <ComponentStyle>
          <img src={avatar} />
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
            First Name <br />
            {firstName}
          </h4>
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Last Name <br />
            {lastName}
          </h4>
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
          Phone Number <br />
            {phoneNumber}
          </h4>
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
          Role/Designation <br />
            {role}
          </h4>
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
          Email id <br />
            {email}
          </h4>
          <Button label="Change Password" />
        </ComponentStyle>
      </Paper>
    </ModuleContainer>
  );
}
