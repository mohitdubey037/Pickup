import { emailsent } from "app/assets/Icons";
import { H1, H4 } from "app/components/Typography/Typography";
import { EmailSentBox } from "../../pages/DashboardPage/DashboardContainers/PersonalProfileContainer/styles";
import { DrawerFooter, DrawerInnerContent } from "../Drawer/style";
import { Button } from "app/components/Buttons";
import { Box } from "@mui/material";

interface props {
  handleCloseDrawer?: () => void
  handleSubmit?: () => void,
}

const EmailSentDrawer = ({handleCloseDrawer,handleSubmit}: props) => {
  return (
    <>
    <DrawerInnerContent>
      <EmailSentBox>
        <Box mb={4} mt={2}>
          <img src={emailsent} alt="" className="mailLogo" />
        </Box>

        <H1 title="Invite Email Sent" mb={24} />
        <H4
          className="para"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel. Integer a ornare nisi. Phasellus fringilla lectus eget mi mollis tempus"
        />

      </EmailSentBox>
    </DrawerInnerContent>
      <DrawerFooter>
        <Button
        secondary
        onClick={handleCloseDrawer}
        label="Create Another"
        size="medium"
        />
        <Button
          label={"Finish"}
          onClick={handleSubmit}
          size="medium"
        />
      </DrawerFooter>
    </>
  );
};

export default EmailSentDrawer;
