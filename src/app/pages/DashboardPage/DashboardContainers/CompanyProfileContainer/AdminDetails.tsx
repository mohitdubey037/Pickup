import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { Block, Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { AdminDetailsType } from "./types";

interface DetailInterface {
  AdminDetails: AdminDetailsType;
}

export default function AdminDetails(props: DetailInterface) {
  const { AdminDetails } = props;
  return (
    <FullCard style={{ marginLeft: 0 }}>
      <Flex direction={"column"} style={{ paddingRight: 20 }}>
        <Flex style={{ marginTop: 15 }}>
          <Avatar style={{ width: 86, height: 86 }}>
            <img
              src={require("../../../../assets/Icons/logoImg.svg").default}
              width={86}
            />
          </Avatar>
          <Flex direction={"column"} style={{ marginLeft: 20 }}>
            <Flex>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> First Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {AdminDetails?.firstName ? AdminDetails?.firstName : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Last Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {AdminDetails?.lastName ? AdminDetails?.lastName : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Phone Number</span>
                <Typography className="typography" variant="h1" component="h3">
                  {AdminDetails?.phone ? AdminDetails?.phone : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Role/Designation</span>
                <Typography className="typography" variant="h1" component="h3">
                  {AdminDetails?.role ? AdminDetails?.role : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Email Id</span>
                <Typography className="typography" variant="h1" component="h3">
                  {AdminDetails?.emailId ? AdminDetails?.emailId : "-"}
                </Typography>
              </Block>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </FullCard>
  );
}
