import React, { useEffect } from "react";
import { H2 } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import ChildDetails from "./ChildDeatils";
import SuperintendentDetails from "./SuperintendentDetails";
import CardsDetails from "./CardDetails";
import { useDispatch } from "react-redux";

export default function ChildAccountDetails({ path: string }) {

 
  return (
    <ModuleContainer>
      <H2 title="Company Profile" />
          <ChildDetails />
          <SuperintendentDetails />
          <CardsDetails />
    </ModuleContainer>
  );
}
