import { navigate } from "@reach/router";
import { Accordion } from "app/components/Accordion";
import {
  AccordionNoBorderOuterBox,
  FullCard,
} from "app/components/CommonCss/CommonCss";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import React from "react";
import { useSelector } from "react-redux";
import HelpContact from "./HelpContact";

export default function HelpContainer({ path: string }) {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
    navigate(" /non-authorized-page");
  }
  return (
    <ModuleContainer>
      <H2 title="Help" />
      <FullCard>
        <H3 text="Frequently Asked Questions" />
        <AccordionNoBorderOuterBox>
          <Accordion
            title="Lorem non deserunt ullamco est sit aliqua dolor do amet sint."
            defaultExpanded
          >
            Test
          </Accordion>
          <Accordion title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.">
            Test
          </Accordion>
          <Accordion title="Non deserunt ullamco est sit aliqua dolor do amet sint.">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Exercitation veniam consequat
            sunt nostrud amet.
          </Accordion>
        </AccordionNoBorderOuterBox>
        <HelpContact />
      </FullCard>
    </ModuleContainer>
  );
}
