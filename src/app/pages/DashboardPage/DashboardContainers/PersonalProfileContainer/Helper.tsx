import ModuleContainer from "app/components/ModuleContainer";
import React from "react";

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
      <h3 style={{ margin: 0 }}>Personal Profile</h3>
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
