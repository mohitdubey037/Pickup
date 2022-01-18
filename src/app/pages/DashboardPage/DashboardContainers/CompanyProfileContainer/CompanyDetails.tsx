import { Avatar, Button, Paper, Typography } from "@material-ui/core";
import EditIcon from "app/components/EditIcon";
import { Block, Flex, FullCard } from "app/components/Input/style";
import { FormContainerTitle } from "app/components/Typography/Typography";
import { CompanyDetailsType } from "./types";

interface DetailInterface {
  details: CompanyDetailsType;
  setCompanyDrawerOpen: (value: boolean) => void;
  companyDetails: any;
}

export default function CompanyDetails(props: DetailInterface) {
  const { avatar, CompanyName } = props.details;
  const { setCompanyDrawerOpen, companyDetails } = props;

  return (
    <FullCard style={{ marginLeft: 0 }}>
      <Flex direction={"column"} style={{ paddingRight: 20 }}>
        <Flex>
          <FormContainerTitle style={{ flex: 1, textAlign: "left" }}>
            Company Details
          </FormContainerTitle>
          <EditIcon onClick={setCompanyDrawerOpen} />
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
                  {companyDetails?.companyName ? companyDetails?.companyName : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Business Number</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.businessNumber ? companyDetails?.businessNumber : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Industry</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.industry ? companyDetails?.industry: "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Employee Strength</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.employeeStrength ? companyDetails?.employeeStrength : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Address Line 1</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.addressLine1 ? companyDetails?.addressLine1 : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Address Line 2</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.addressLine2 ? companyDetails?.addressLine2 : "-"}
                </Typography>
              </Block>
            </Flex>
            <Flex style={{ marginTop: 10 }}>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> City</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.city ? companyDetails?.city  : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Pincode</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.pincode ? companyDetails?.pincode : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Province</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.province ? companyDetails?.province : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> Country</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.country ? companyDetails?.country : "-"}
                </Typography>
              </Block>
              <Block style={{ flex: 1, textAlign: "left" }}>
                <span> HST Number</span>
                <Typography className="typography" variant="h1" component="h3">
                  {companyDetails?.hstNumber ? companyDetails?.hstNumber : "-"}
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
