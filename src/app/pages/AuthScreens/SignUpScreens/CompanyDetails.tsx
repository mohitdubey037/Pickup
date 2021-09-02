import { RouteComponentProps } from "@reach/router";
import {
  SignUpWrapper,
  FormContent,
  FormWrapper,
  LogoImage,
  Row,
  Header,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";

const CompanyDetails = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>COMPANY DETAILS</Header>
          <Row>
            <Input label="Fist Name" placeholder="Start typing" />
            <Input label="Last Name" placeholder="Start typing" />
          </Row>
          <Input label="Company Name" placeholder="Start typing" />
          <Input label="Email address" placeholder="johndoe@pickups.com" />
          <Input label="Phone number" placeholder="Start typing" />
          <Button label="Next" onClick={() => navigate?.("/password")} />
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default CompanyDetails;
