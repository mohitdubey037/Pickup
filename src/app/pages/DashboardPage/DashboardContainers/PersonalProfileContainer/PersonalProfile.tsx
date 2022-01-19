import { Avatar, Box } from "@material-ui/core";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import EditIcon from "app/components/EditIcon";
import { Button } from "../../../../components/Buttons";
import { Flex, FlexBox, FullCard } from "app/components/Input/style";
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
      <Flex bottom={24} justifyContent="space-between">
        <ListLabel text="Personal Details" />
        <EditIcon onClick={setEditDetailsDrawerOpen} />
      </Flex>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Avatar style={{ width: 86, height: 86 }} src={user?.profileImage} />
        </Box>

        <FlexBox>
          <Box>
            <Para text="First Name" />
            <SmallLabel text={user?.firstName || "-"} className="value" />
          </Box>
          <Box>
            <Para text="Last Name" />
            <SmallLabel text={user?.lastName || "-"} className="value" />
          </Box>
          <Box>
            <Para text="Phone Number" />
            <SmallLabel text={user?.phoneNo || "-"} className="value" />
          </Box>
          <Box>
            <Para text="Role/Designation" />
            <SmallLabel text={user?.roleDesignation || "-"} className="value" />
          </Box>
          <Box>
            <Para text="Email Id" />
            <SmallLabel text={user?.emailId || "-"} className="value" />
          </Box>
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
