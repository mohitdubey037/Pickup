import { Avatar, Box, Grid } from "@material-ui/core";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import EditIcon from "app/components/EditIcon";
import { Button } from "../../../../components/Buttons";
import { Flex, FullCard } from "app/components/Input/style";
import { FlexBox } from "./styles";
interface CardInterface {
  user: any;
  setPasswordDrawerOpen: (value: boolean) => void;
  setEditDetailsDrawerOpen: (value: boolean) => void;
}

export default function PersonalProfile(props: CardInterface) {
  const { setPasswordDrawerOpen, setEditDetailsDrawerOpen } = props;
  const { user } = props;
  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
        <ListLabel text="Personal Details" />
        <EditIcon onClick={setEditDetailsDrawerOpen} />
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mr={2}>
          <Avatar style={{ width: 86, height: 86 }} src={user?.profileImage} />
        </Box>

        <FlexBox>
          <Grid container spacing={2}>
            <Grid item lg={2} sm={3}>
              <Para text="First Name" />
              <SmallLabel text={user?.firstName || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={3}>
              <Para text="Last Name" />
              <SmallLabel text={user?.lastName || "-"} className="value" />
            </Grid>
            <Grid item lg={2} sm={3}>
              <Para text="Phone Number" />
              <SmallLabel text={user?.phoneNo || "-"} className="value" />
            </Grid>
            <Grid item xs={3}>
              <Para text="Role/Designation" />
              <SmallLabel
                text={user?.roleDesignation || "-"}
                className="value"
              />
            </Grid>
            <Grid item xs={3}>
              <Para text="Email Id" />
              <SmallLabel text={user?.emailId || "-"} className="value" />
            </Grid>
          </Grid>
        </FlexBox>

        <Button
          label="Change Password"
          size="small"
          onClick={() => {
            setPasswordDrawerOpen(true);
          }}
        />
      </Box>
    </FullCard>
  );
}
