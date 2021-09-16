import { Checkbox } from "../Checkbox";
import {
  SubTotal,
  useStyles,
  Taxes,
  AddInsurance,
  Total,
  TearmsConditions,
} from "./style";

interface ShipmentSummaryProps {
  subTotal: number;
  taxes: number;
  addInsurance: string;
  total: number;
}

function ShipmentSummary(props: ShipmentSummaryProps) {
  const { subTotal, taxes, addInsurance, total } = props;
  const classes = useStyles();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
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
      </Total>
    </>
  );
}

export default ShipmentSummary;
