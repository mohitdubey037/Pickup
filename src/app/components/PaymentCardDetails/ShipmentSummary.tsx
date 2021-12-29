import { Typography } from "@material-ui/core";
import { Checkbox } from "../Checkbox";
import {
  SubTotal,
  useStyles,
  Taxes,
  AddInsurance,
  Total,
  TearmsConditions,
} from "./style";
import {Grouppaymentsummary} from '../../assets/Icons'
interface ShipmentSummaryProps {
  subTotal: number;
  taxes: number;
  addInsurance: string;
  total: number;
}

function ShipmentSummary( {path: string},props: ShipmentSummaryProps ) {
  const { subTotal, taxes, addInsurance, total } = props;
  const classes = useStyles();
  return (
    <>
    <div style={{position:"absolute",fontWeight:500}}>
    <Typography component="h2">Shipment Summary</Typography>
    <SubTotal>
    <div style={{justifyContent:"space-evenly",display:"flex"}}>
    <Typography>Subtotal</Typography><Typography style={{paddingLeft:1000}}>$320.42</Typography>
  </div>
        </SubTotal>
        <Taxes>
          <span style={{paddingTop:10}}>Taxes(HST)</span>
          <span>{taxes}</span>
        </Taxes>
        <AddInsurance>
          <span >
            <Checkbox label="Add Insurance" />
            {/* <img style={{position:"absolute",paddingLeft:50,paddingBottom:10}} src={Grouppaymentsummary} /> */}
          </span>
          <span>{addInsurance}</span>
        </AddInsurance>
        <TearmsConditions>Check our Terms and Conditions</TearmsConditions>
        <Total>
        <span style={{fontWeight:700}}>Total</span>
        <span className={classes.totalCount}>{total}</span>
      </Total> 
     
    </div>
    
    {/* <div style={{paddingLeft:10}}>
        <h4>Shipment Summary</h4>
        <SubTotal>
          <span className={classes.subTotal}>Subtotal</span>
          <span>{subTotal}</span>
        </SubTotal>
        <Taxes>
          <span className={classes.taxes}>Taxes(HST)</span>
          <span>{taxes}</span>
        </Taxes>
        <AddInsurance>
          <span className={classes.subTotal}>
            <Checkbox label="Add Insurance" />
          </span>
          <span>{addInsurance}</span>
        </AddInsurance>
        <TearmsConditions>Check our Terms and Conditions</TearmsConditions>
      </div>
      <Total>
        <span className={classes.total}>Total</span>
        <span className={classes.totalCount}>{total}</span>
      </Total> */}
    </>
  );
}

export default ShipmentSummary;
