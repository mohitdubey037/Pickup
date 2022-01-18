import { RouteComponentProps } from "@reach/router";
import {
  FormWrapper,
  LogoImage,
  SignUpWrapper,
  FormContent,
  SignUpBackgroundWrapper,
} from "../style";
import { PageTitle, RedLink, SmallLabel } from "app/components/Typography/Typography";
import { congrats } from "app/assets/Icons";
import { Box } from "@material-ui/core";

const Congratulations = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <SignUpBackgroundWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent className="CenterContent">
            <img src={congrats} alt="" className="mailLogo" />
            <Box mt={3} mb={2}>
            <PageTitle title="FORGOT PASSWORD" />
            <SmallLabel text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus" />
              </Box>

              <RedLink
                label="Back to Login"
                link={() => navigate?.("/dashboard/charter-shipment/single-shipment/order-summary")}
              />
        </FormContent>
      </FormWrapper>
      </SignUpBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default Congratulations;
