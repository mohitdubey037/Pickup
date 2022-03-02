import { Box } from "@mui/material";
import { ContactSvg, email, phone } from "app/assets/Icons";
import { H3, H4 } from "app/components/Typography/Typography";
import { ContactDetailsBox } from "./style";

export default function ContactDetails() {
  return (
    <ContactDetailsBox>
      <H3 text="Contact Information" />
      <img src={ContactSvg} alt="ContactSvg" />
      <div>
      <Box display="flex" alignItems="flex-start">
            <img src={phone} alt="phone" />
            <Box ml={2} mb={2}>
            <H4 text="Phone Number:" />
            <H4 text="416-123-4567" className="value" />
            </Box>
      </Box>
      <Box display="flex" alignItems="flex-start">
            <img src={email} alt="email" />
            <Box ml={2}>
            <H4 text="Email Address:" />
            <H4 text="help@pickups.com" className="value" />
            </Box>
    </Box>
    </div>
    </ContactDetailsBox>
  );
}
