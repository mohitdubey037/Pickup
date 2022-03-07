import { RouteComponentProps } from "@reach/router";
import {
  FormWrapper,
  LogoImage,
  SignUpWrapper,
  FormContent,
  SignUpBackgroundWrapper,
} from "../style";
import { H1, H4 } from "app/components/Typography/Typography";
import { congrats } from "app/assets/Icons";
import { CustomLink } from "app/components/Typography/Links";
import { Box } from "@mui/material";

const Congratulations = ({ navigate }: RouteComponentProps) => {
  return (
    <SignUpWrapper>
      <SignUpBackgroundWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent className="CenterContent">
            <img src={congrats} alt="" className="mailLogo" />
            <Box mt={3} mb={2}>
            <H1 title="CONGRATULATIONS" mb={24} />
            <H4 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor
              vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi
              mollis tempus" />
              </Box>

              <CustomLink
                label="Back to Login"
                onClick={() => navigate?.("/dashboard/charter-shipment/single-shipment/order-summary")}
                redlink
              />
        </FormContent>
      </FormWrapper>
      </SignUpBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default Congratulations;
