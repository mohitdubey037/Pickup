import { Avatar, Box, Grid } from "@material-ui/core";
import {
  H3,
  Para,
  H4,
} from "app/components/Typography/Typography";
import { Button } from "../../../../components/Buttons";
import { FullCard } from "app/components/Input/style";
import { FlexTable } from "./styles";
import { PersonalProfileType } from "./types";
import { FlexBox } from "app/components/CommonCss/CommonCss";
import EditIcon from "app/components/EditIcon/EditIcon";
interface CardInterface {
  personalProfileDetails: PersonalProfileType;
  setPasswordDrawerOpen: (value: boolean) => void;
  setEditDetailsDrawerOpen: (value: boolean) => void;
}

export default function PersonalProfile(props: CardInterface) {
  const {
    setPasswordDrawerOpen,
    setEditDetailsDrawerOpen,
    personalProfileDetails,
  } = props;

  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
        <H3 text="Personal Details" />
        <EditIcon onClick={() => setEditDetailsDrawerOpen(true)} />
      </Box>

      <FlexBox>
        <Box mr={4}>
          <Avatar
            style={{ width: 86, height: 86 }}
            src={personalProfileDetails?.profileImage}
          />
        </Box>

        <FlexTable>
          <Grid container spacing={2}>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="First Name" />
              <H4
                text={personalProfileDetails?.firstName || "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Last Name" />
              <H4
                text={personalProfileDetails?.lastName || "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Phone Number" />
              <H4
                text={personalProfileDetails?.userDetails?.phoneNo || "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Role/Designation" />
              <H4
                text={personalProfileDetails?.roleName || "-"}
                className="value"
              />
            </Grid>
            <Grid item lg={5} xl={4} sm={8} xs={12}>
              <Para text="Email Id" />
              <H4
                text={personalProfileDetails?.emailId || "-"}
                className="value"
              />
            </Grid>
          </Grid>
        </FlexTable>
      
        <Button
          label="Change Password"
          size="small"
          onClick={() => {
            setPasswordDrawerOpen(true);
          }}
        />
      </FlexBox>
    </FullCard>
  );
}
