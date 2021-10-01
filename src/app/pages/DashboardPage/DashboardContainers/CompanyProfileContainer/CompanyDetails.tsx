import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { Block, Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { CompanyDetailsType } from "./types";

interface DetailInterface {
  details: CompanyDetailsType;
}

export default function CompanyDetails(props: DetailInterface) {
  const { avatar, CompanyName } = props.details;

  return (
    <FullCard>
      <Flex direction={"column"} style={{ paddingRight: 20 }}>
        <Flex>
          <FormContainerTitle style={{ flex: 1, textAlign: "left" }}>
            Company Details
          </FormContainerTitle>
          <EditIcon />
        </Flex>

        <Flex style={{ marginTop: 15 }}>
          <Avatar style={{ width: 86, height: 86 }}>
            <img src={avatar} width={86} />
          </Avatar>
          <Flex direction={"column"} style={{ marginLeft: 20 }}>
            <Flex>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
            </Flex>
            <Flex style={{ marginTop: 10 }}>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> City</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Company Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {CompanyName}
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
