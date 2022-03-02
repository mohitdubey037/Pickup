import { Avatar, Box, Grid } from "@mui/material";
import { H3, Para, H4 } from "app/components/Typography/Typography";
import { FlexBox, FullCard } from "app/components/CommonCss/CommonCss";
import EditIcon from "app/components/EditIcon/EditIcon";
import { formatPhoneNo } from "utils/commonUtils";
import { Button } from "../../../../components/Buttons";
import { FlexTable } from "./styles";
import { PersonalProfileType } from "./types";

interface PersonalProfileInterface {
  data: PersonalProfileType;
  handleChangePassword: () => void;
  handleEditDetails: () => void;
}

const PersonalProfile = (props: PersonalProfileInterface) => {
  const { handleChangePassword, handleEditDetails, data } = props;

  return (
    <FullCard>
      <Box mb={4} display="flex" justifyContent="space-between">
        <H3 text="Personal Details" />
        <EditIcon onClick={handleEditDetails} />
      </Box>

      <FlexBox>
        <Box mr={4}>
          <Avatar src={data?.profileImage} style={{ width: 86, height: 86 }} />
        </Box>

        <FlexTable>
          <Grid container spacing={2}>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="First Name" />
              <H4 text={data?.firstName || "-"} className="value" />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Last Name" />
              <H4 text={data?.lastName || "-"} className="value" />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Phone Number" />
              <H4
                text={
                  data?.userDetails?.phoneNo
                    ? formatPhoneNo(data?.userDetails?.phoneNo)
                    : "-"
                }
                className="value"
              />
            </Grid>
            <Grid item lg={3} xl={2} sm={4} xs={12}>
              <Para text="Role/Designation" />
              <H4 text={data?.roleName || "-"} className="value" />
            </Grid>
            <Grid item lg={5} xl={4} sm={8} xs={12}>
              <Para text="Email Id" />
              <H4 text={data?.emailId || "-"} className="value" />
            </Grid>
          </Grid>
        </FlexTable>

        <Button
          label="Change Password"
          size="small"
          onClick={handleChangePassword}
        />
      </FlexBox>
    </FullCard>
  );
};

export default PersonalProfile;
