import { Box } from "@material-ui/core";
import { emailsent } from "app/assets/Icons";
import { H1, H4 } from "app/components/Typography/Typography";
import { EmailSentBox } from "./styles";

const EmailSentDrawer = () => {
  return (
    <>
      <EmailSentBox>
        <Box mb={4} mt={2}>
          <img src={emailsent} alt="" className="mailLogo" />
        </Box>

        <H1 title="EMAIL SENT" />
        <H4
          className="para"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi mollis tempus"
        />
      </EmailSentBox>
    </>
  );
};

export default EmailSentDrawer;
