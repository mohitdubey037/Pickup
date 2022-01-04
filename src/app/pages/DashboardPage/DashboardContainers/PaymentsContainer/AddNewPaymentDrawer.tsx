import { Typography } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import { Illustration } from "../../../../assets/Images/index"

function AddNewPaymentDrawer() {
    return (
        <div style={{ width: 540 }}>
            <img style={{ position: "absolute", paddingLeft: 200 }} className="imageStyle" src={Illustration} alt="" />
            <Typography style={{ fontWeight: 700, paddingTop: 155, paddingLeft: 200 }}>Paid Sucessfully</Typography>
            <Typography style={{ textAlign: "center", display: 'flex', fontWeight: 400 }}> Vestibulum pretium porttitor nunc, vitae dapibus augue porttitor vel. Integer a ornare nisi.</Typography>
            <hr />
            <div style={{ paddingTop: 20, justifyContent: "space-between" }}>
                <Button
                    label="Download Invoice Details"
                    secondary />
                <div style={{ paddingTop: 20 }} />
                <Button
                    label="Download Shipping Label"
                    secondary />
            </div>
            <div style={{ paddingTop: 30, display: "flex", flexDirection: "row" }}>
                <Typography style={{ fontWeight: 500 }}>Bill to</Typography> <Typography style={{ paddingLeft: 20 }}>Torinit</Typography>
                <Typography style={{ paddingLeft: 240 }}>Invoice Date</Typography> <Typography style={{ paddingLeft: 20 }}>06/06/21</Typography>
            </div>
            <div style={{ paddingTop: 20, display: "flex", flexDirection: "row" }}>
                <Typography>Invoice Number</Typography><Typography style={{ paddingLeft: 20 }}>32132</Typography>
            </div>
            <hr />
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                <Typography>Shipment Count</Typography><Typography style={{ paddingLeft: 350 }}>32</Typography>
            </div>
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                <Typography>Category</Typography><Typography style={{ paddingLeft: 350 }}>Electronics</Typography>
            </div>
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                <Typography>Destination count</Typography><Typography style={{ paddingLeft: 350 }}>32</Typography>
            </div>
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                <Typography>Invoice Amount</Typography><Typography style={{ paddingLeft: 350 }}>$32</Typography>
            </div>
            <hr />
            <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                <Typography>Payment Detail</Typography><Typography style={{ paddingLeft: 250 }}>**** **** **** 1734</Typography>
            </div>
        </div>
    );
}

export default AddNewPaymentDrawer;
