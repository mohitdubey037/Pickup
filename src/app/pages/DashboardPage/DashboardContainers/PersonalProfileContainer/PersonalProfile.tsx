import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";

 
interface CardInterface {
  imgSrc: string;
  title: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: number;
  Role: string;
  emailid: string;
}

export default function PersonalProfile(props: CardInterface) {
  const { imgSrc, title, FirstName, LastName, PhoneNumber, Role, emailid } =
    props;
  return (
    <ModuleContainer>
      <ContainerTitle>Single Shipment</ContainerTitle>
      <img src={imgSrc} />
      <h4 style={{ margin: "0 0 1.5rem 0" }}>
        First Name <br />
      </h4>
      <h4 style={{ margin: "0 0 2.5rem 0" }}>
        Last Name <br />
      </h4>
    </ModuleContainer>
  );
}
