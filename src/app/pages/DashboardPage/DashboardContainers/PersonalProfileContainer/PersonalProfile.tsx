import { Paper } from "@material-ui/core";
import ModuleContainer from "app/components/ModuleContainer";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { PersonalProfileType } from "./types";

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
        <div style={{ display: "flex" }}>
          <img src={avatar} />
          <h4 style={{ margin: "0 0 1.5rem 0" }}>
            First Name <br />
          </h4>
          <h4 style={{ margin: "0 0 2.5rem 0" }}>
            Last Name <br />
          </h4>
        </div>
      </Paper>
    </ModuleContainer>
  );
}
