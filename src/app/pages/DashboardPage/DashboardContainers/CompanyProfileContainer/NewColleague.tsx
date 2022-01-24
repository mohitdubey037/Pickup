import { Avatar, Box, Grid } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";
import { PERMISSION_TYPES } from "../../../../../constants";
import { ColleagueDetailsType } from "./types";

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
    inviteId,
    emailId,
    firstName,
    lastName,
    notification,
    notificationFrequency,
    phoneNo,
    role,
    roleDesignation,
    type,
  } = props?.colleagueDetails;
  const {
    setColleagueDrawerOpen,
    index,
    setSelectedColleague,
    selectedColleague,
  } = props;
  return (
    <>
      <FullCard>
        <Box mb={4} display="flex" justifyContent="space-between">
          <ListLabel text={`Colleague ${index + 1}`} />
          <EditIcon
            onClick={() => {
              setSelectedColleague(inviteId);
              setColleagueDrawerOpen(true);
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box mr={4}>
            <Avatar style={{ width: 86, height: 86 }}>
              <img src={`https://i.pravatar.cc/${inviteId}`} width={86} />
            </Avatar>
          </Box>
          <FlexGrid>
            <Grid container spacing={2}>
              <Grid item lg={2} sm={3}>
                <Para text="First Name" />
                <SmallLabel
                  text={firstName ? firstName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={3}>
                <Para text="Last Name" />
                <SmallLabel
                  text={lastName ? lastName : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={2} sm={3}>
                <Para text="Phone Number" />
                <SmallLabel text={phoneNo ? phoneNo : "-"} className="value" />
              </Grid>
              <Grid item lg={3} sm={3}>
                <Para text="Role/Designation" />
                <SmallLabel
                  text={roleDesignation ? roleDesignation : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={3} sm={3}>
                <Para text="Email Id" />
                <SmallLabel text={emailId ? emailId : "-"} className="value" />
              </Grid>
              <Grid item lg={2} sm={3}>
                <Para text="Notification Frequency" />
                <SmallLabel
                  text={notificationFrequency ? notificationFrequency : "-"}
                  className="value"
                />
              </Grid>
              <Grid item lg={6} sm={6}>
                <Para text="Permission" />
                <SmallLabel
                  text={role ? getPermission(role) : "-"}
                  className="value"
                />
              </Grid>
            </Grid>
          </FlexGrid>
        </Box>
      </FullCard>
    </>
  );
}
