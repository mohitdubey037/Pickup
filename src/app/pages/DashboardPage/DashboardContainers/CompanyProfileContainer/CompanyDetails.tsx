import { Paper } from "@material-ui/core";
import ModuleContainer from "app/components/ModuleContainer";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import { CompanyDetailsType } from "./types";

interface DetailInterface {
    details: CompanyDetailsType;
  }

  
export default function CompanyDetails(props: DetailInterface) {
    const { avatar, CompanyName, BusinessNumber, Industry, EmployeeStrength, AddressLine1,AddressLine2,City,Pincode,Province,Country,HSTNumber} =
      props.details;
  
    return (
      <ModuleContainer>
        <ContainerTitle>Company Details</ContainerTitle>
  
        <Paper
          style={{
            width: "100%",
            padding: 20,
            display:"flex",
           
            justifyContent:"flex-start",
            marginBottom:20
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1,textAlign:'left' ,marginBottom:20}}>
              <FormContainerTitle>Personal Details</FormContainerTitle>
            </div>
            <button>Edit</button>
          </div>
       
            <img src={avatar} />
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Company Name <br />
              {CompanyName}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Business Number <br />
              {BusinessNumber}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Industry <br />
              {Industry}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Employee Strength <br />
              {EmployeeStrength}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Address Line 1 <br />
              {AddressLine1}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Address Line 2 <br />
              {AddressLine2}
            </h4>
            
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            City <br />
              {City}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Pincode <br />
              {Pincode}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Province <br />
              {Province}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            Country <br />
              {Country}
            </h4>
            <h4 style={{ margin: "0 0 1.5rem 0" }}>
            HSTNumber <br />
              {HSTNumber}
            </h4>
        </Paper>
      </ModuleContainer>
    );
  }
  