import { Paper,Avatar } from "@material-ui/core";
import ModuleContainer from "app/components/ModuleContainer";
import {
  FormContainerTitle,
} from "app/components/Typography/Typography";
import EditIcon from "app/components/EditIcon";
import {  Typography } from "@material-ui/core";
import { PersonalProfileType } from "./types";
import { Button } from "../../../../components/Buttons";
import { ComponentStyle } from "./styles";
import { Block, Flex, FullCard } from "app/components/Input/style";
import { CustomInput } from "../CompanyProfileContainer/style";

interface CardInterface {
  profile: PersonalProfileType;
}

export default function PersonalProfile(props: CardInterface) {
  const { avatar, firstName, lastName, phoneNumber, role, email } =
    props.profile;

  return (
    
    
    <FullCard>
      <Flex direction={"column"} style={{paddingRight:20}}>
        <Flex>
          <FormContainerTitle style={{ flex: 1, textAlign: "left" }}>
            Company Details
          </FormContainerTitle>
          <EditIcon/>
        </Flex>

        <Flex style={{marginTop:15}}>
          <Avatar style={{width:86,height:86}}>
            <img src={avatar} width={86}  />
          </Avatar>
          <Flex direction={"column"} style={{marginLeft:20}}>
            <Flex >
              <Block style={{flex:1,textAlign:'left'}}> 
                <span> First Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {firstName}
                </Typography>
              </Block >
              <Block style={{flex:1,textAlign:'left'}}>
                <span> Last Name</span>
                <Typography className="typography" variant="h1" component="h3">
                  {lastName}
                </Typography>
              </Block>
              <Block style={{flex:1,textAlign:'left'}}>
                <span> Phone Number</span>
                <Typography className="typography" variant="h1" component="h3">
                  {phoneNumber}
                </Typography>
              </Block>
              <Block style={{flex:1,textAlign:'left'}}>
                <span>Role/Designation</span>
                <Typography className="typography" variant="h1" component="h3">
                  {role}
                </Typography>
              </Block>
              <Block style={{flex:1,textAlign:'left'}}>
                <span> Email Id</span>
                <Typography className="typography" variant="h1" component="h3">
                  {email}
                </Typography>
              </Block>
              <Block style={{flex:1,textAlign:'left'}}>
                
                  
                
              </Block>
            
        </Flex>
      </Flex>
      </Flex>
      </Flex>
    </FullCard>
  );
}
