
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { H2 } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { OnHoldTableTop } from "./style";
import { dots3 } from "app/assets/Icons";
import { Box } from "@material-ui/core";
import {checkSquare} from "app/assets/Icons"
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
const BulkSummary = ({ path: string }) => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  if([1,2,3,4].indexOf(authUser?.roleId) === -1) {
    navigate('/non-authorized-page')
  }
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
      <H2 title="On Hold Shipments" />
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
