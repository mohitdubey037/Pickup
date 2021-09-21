import { RouteComponentProps } from "@reach/router";
import {
  FormWrapper,
  LogoImage,
  SignUpWrapper,
  FormContent,
  CenterContent,
  Header,
} from "../style";
import { RedLink } from "app/components/Typography/Typography";
import { congrats } from "app/assets/Icons";
import { Center } from "app/components/Typography/style";

const Congratulations = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <CenterContent>
            <img src={congrats} alt="" className="mailLogo" />
            <Header>CONGRATULATIONS</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus
            </p>
            <Center>
              <RedLink
                label="Back to Login"
                link={() => navigate?.("/sign-in")}
              />
            </Center>
          </CenterContent>
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default Congratulations;
