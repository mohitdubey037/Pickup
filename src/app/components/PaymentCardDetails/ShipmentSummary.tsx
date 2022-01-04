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

import { Drawer } from "app/components/Drawer";
import { useState } from "react";
import AddCardForm from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/AddCardForm";
import { addNewCardHelper, confirmPaymentHelper } from "./helper";
import AddNewPaymentDrawer from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/AddNewPaymentDrawer";

interface ShipmentSummaryProps {
  subTotal: number;
  taxes: number;
  addInsurance: string;
  total: number;
}

function ShipmentSummary( {path: string},props: ShipmentSummaryProps ) {
  const { subTotal, taxes, addInsurance, total } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showInvoiceDrawer, setShowInvoiceDrawer] = useState(false);
  const classes = useStyles();

    const addNewCardHandler = async (values) => {
        console.log("SavedCard", values);
        const body = {
            "name": values.nameOnCard,
            "number": values.cardNumber,
            "expiry_month": values.expiryDate.split("/")[0],
            "expiry_year": values.expiryDate.split("/")[1],
            "cvd": values.cvc
        }

        
        // const body = {
        //     "name": "jonh check",
        //     "number": "5100000010001004",
        //     "expiry_month": "08",
        //     "expiry_year": "2025",
        //     "cvd": "123"
        //   }
        const res: {response:any, error:any} = await addNewCardHelper(body);
        // if(!res.error){
            
        // }
    };

    const confirmPaymentHandler = async () => {
        const body = {
            "profileId" : "kkk",
            "cardId" : "pp",
            "amount" : 0
        }
        const res = await confirmPaymentHelper(body, 373);
        if(!res.error){
            setShowInvoiceDrawer(true);
        }
    }

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
        <button onClick={() => setDrawerOpen(true)} >Add payment</button>
        <button onClick={confirmPaymentHandler} >Confirm Payment</button>
            <Drawer
                open={drawerOpen}
                title="Add New Payment"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddCardForm 
                    title="Payment Details"
                    setDrawerOpen={setDrawerOpen} 
                    enableSave
                    submitButtonLabel="Add New Payment"
                    saveAction={addNewCardHandler}
                />
            </Drawer>
            <Drawer
                open={showInvoiceDrawer}
                title="Payments"
                setDrawerOpen={(flag) => setShowInvoiceDrawer(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <AddNewPaymentDrawer />
            </Drawer>
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
