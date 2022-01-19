import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { OnHoldFieldsWrapper, OnHoldTableTop } from "./style";
import { dots3, sliders } from "app/assets/Icons";
import Select from "app/components/Select";
import { Box } from "@material-ui/core";
import {checkSquare} from "app/assets/Icons"
const BulkSummary = ({ path: string }) => {
  const tableTop = () => {
    return (

        
      <OnHoldTableTop>
        <p></p>
        <div>
          
          <img src={dots3} alt="" />
        </div>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle title="On Hold Shipments" />
      <div style={{paddingTop:10,paddingBottom:20}}>
      <Box style={{ backgroundColor: "#CFFFE8",borderRadius:5,display:'flex'}}>
          <div style={{paddingTop:20}}>
      
        <div style={{color:"#1EAA67",fontWeight:700,paddingBottom:10,paddingLeft:300,paddingRight:330}}>
        <img src={checkSquare} alt="" />Success! 17 orders ready to go and 3 orders added to order holding zone.
        </div>
        
        <br />
      </div>
    </Box>
    </div>
      <Table 
        data={OnHoldTable}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
    </ModuleContainer>
  );
};

export default BulkSummary;
