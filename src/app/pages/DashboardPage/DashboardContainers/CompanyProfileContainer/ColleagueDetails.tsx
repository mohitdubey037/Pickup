import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { Block, Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { PERMISSION_TYPES } from "../../../../../constants";
import { ColleagueDetailsType } from "./types";

interface DetailInterface {
  setColleagueDrawerOpen: any;
  selectedColleague: boolean;
  setSelectedColleague: (value: number) => void;
  colleagueDetails: ColleagueDetailsType;
  index: number;
}

const getPermission = (role: number) => {
  return PERMISSION_TYPES?.map((permission: any) => {
    if (permission?.value === role) {
      return permission?.label;
    }
  });
};

export default function ColleagueDetails(props: DetailInterface) {
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
  // console.log(colleagueDetailsType);
  // const handleClick = () => {
  //   setColleagueDrawerOpen;
  //   setSelectedColleague(inviteId);
  // };
  return (
    <FullCard style={{ marginLeft: 0 }}>
      <Flex direction={"column"} style={{ paddingRight: 20 }}>
        <Flex>
          <FormContainerTitle style={{ flex: 1, textAlign: "left" }}>
            Colleague {index + 1}
          </FormContainerTitle>
          <EditIcon
            onClick={() => {
              setSelectedColleague(inviteId);
              setColleagueDrawerOpen(true);
            }}
          />
        </Flex>

        <Flex style={{ marginTop: 15 }}>
          <Avatar style={{ width: 86, height: 86 }}>
            <img src={`https://i.pravatar.cc/${inviteId}`} width={86} />
          </Avatar>
          <Flex direction={"column"} style={{ marginLeft: 20 }}>
            <Flex>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> First Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {firstName ? firstName : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Last Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {lastName ? lastName : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Email Id</span>
                <Typography className="typography" variant="h1" component="h3">
                  {emailId ? emailId : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Phone Number</span>
                <Typography className="typography" variant="h1" component="h3">
                  {phoneNo ? phoneNo : "-"}
                </Typography>
              </Block>
            </Flex>
            <Flex style={{ marginTop: 10 }}>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Role/Designation</span>
                <Typography className="typography" variant="h1" component="h3">
                  {roleDesignation ? roleDesignation : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Notification Frequency</span>
                <Typography className="typography" variant="h1" component="h3">
                  {notificationFrequency ? notificationFrequency : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Permission</span>
                <Typography className="typography" variant="h1" component="h3">
                  {role ? getPermission(role) : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}></Block>
              <Block></Block>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </FullCard>
  );
}
