import { Avatar, Box, Grid } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { FullCard } from "app/components/Input/style";
import {
  H3,
  Para,
  H4,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { PERMISSION_TYPES } from "../../../../../constants";
import { ColleagueDetailsType } from "./types";
import { FlexBox } from "app/components/CommonCss/CommonCss";

interface DetailInterface {
  setColleagueDrawerOpen: any;
  selectedColleague: boolean;
  setSelectedColleague: (value: number) => void;
  colleagueDetails: ColleagueDetailsType;
  index: number;
}

const getPermission = (role: number): any => {
  return PERMISSION_TYPES?.map((permission: any) => {
    if (permission?.value === role) {
      return permission?.label;
    }
  });
};

export default function NewColleague(props: DetailInterface) {
  const {
    profileImage,
    inviteId,
    emailId,
    firstName,
    lastName,
    // notification,
    notificationFrequency,
    phoneNo,
    role,
    // roleDesignation,
    // type,
  } = props?.colleagueDetails;
  const {
    setColleagueDrawerOpen,
    index,
    setSelectedColleague,
    // selectedColleague,
  } = props;

  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <H3 text={`Colleague ${index + 1}`} />
          <EditIcon
            onClick={() => {
              setSelectedColleague(inviteId);
              setColleagueDrawerOpen(true);
            }}
          />
        </Box>

        <FlexBox justifyContent="space-between">
          <Box mr={4}>
            <Avatar src={profileImage} style={{ width: 86, height: 86 }} />
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="First Name" />
                <H4
                  text={firstName ? firstName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Last Name" />
                <H4
                  text={lastName ? lastName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Phone Number" />
                <H4 text={phoneNo ? phoneNo : "-"} className="value" />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Role/Designation" />
                <H4
                  // text={roleDesignation ? roleDesignation : "-"}
                  text={role ? getPermission(role) : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={4} sm={8} xs={12}>
                <Para text="Email Id" />
                <H4 text={emailId ? emailId : "-"} className="value" />
              </Grid>
              <Grid item lg={2} sm={4} xs={12}>
                <Para text="Notification Frequency" />
                <H4
                  text={notificationFrequency ? notificationFrequency : "-"}
                  className="value"
                />
              </Grid>
            </Grid>
          </FlexGrid>
        </FlexBox>
      </FullCard>
    </>
  );
}
