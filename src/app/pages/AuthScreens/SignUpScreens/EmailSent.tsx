import { RouteComponentProps } from "@reach/router";
import {
  LogoImage,
  FormContent,
  SignUpWrapper,
  FormWrapper,
  SignUpBackgroundWrapper,
} from "../style";
import { mailLogo } from "../../../assets/Icons";
import { PageTitle, RedLink, SmallLabel } from "../../../components/Typography/Typography";
import { Box } from "@material-ui/core";

const EmailSent = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <SignUpBackgroundWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent className="CenterContent">
            <img src={mailLogo} alt="" className="mailLogo" />
            <Box mt={3} mb={2}>
            <PageTitle title="EMAIL SENT" />
            <SmallLabel text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus" />
              </Box>
              <RedLink label="Back to Signup" link={() => navigate?.("/sign-up")} />
        </FormContent>
      </FormWrapper>
      </SignUpBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default EmailSent;
