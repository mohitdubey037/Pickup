import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Accordion } from "app/components/Accordion";
import {itempicture} from "../../../../assets/Images/index"
function OrderDetailsDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div >
      <Grid style={{ width: 540 ,}}>
        
        <Accordion  title="Order Items - TOR-0607-123">
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              
              <span style={{ flex: 1 }}>Category</span>
              <span style={{paddingLeft:200}}>Customer Ref. #</span>
            </div>
            <div>
              <span>Electronics</span>
              <span style={{paddingLeft:190}}>PO23451</span>
            </div>
            <div style={{ display: "flex",paddingTop:20 }}>
              
              <span style={{ flex: 1 }}>Delivery options</span>
              <span style={{paddingLeft:100}}>Fragile</span>
            </div>
            <div>
              <span>Door drop</span>
              <span style={{paddingLeft:190}}>Yes</span>
            </div>
          </div>
          <div style={{paddingTop:130,position:"absolute"}}>
          <span >Order Description</span>
          </div>
          <span style={{display:"flex",paddingTop:160,position:"absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero in nulla maximus consequat. Aliquam dapibus est velit.</span>
          <img style={{position:"absolute",paddingTop:220}} className= "imageStyle" src={itempicture} />
        </Accordion>

      </Grid>
      <Grid style={{ width: 540 ,}}>
        
        <Accordion  title="Order Items - TOR-0607-123A">
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              
              <span style={{ flex: 1 }}>Category</span>
              <span style={{paddingLeft:200}}>Customer Ref. #</span>
            </div>
            <div>
              <span>Electronics</span>
              <span style={{paddingLeft:190}}>PO23451</span>
            </div>
            <div style={{ display: "flex",paddingTop:20 }}>
              
              <span style={{ flex: 1 }}>Delivery options</span>
              <span style={{paddingLeft:100}}>Fragile</span>
            </div>
            <div>
              <span>Door drop</span>
              <span style={{paddingLeft:190}}>Yes</span>
            </div>
          </div>
          <div style={{paddingTop:130,position:"absolute"}}>
          <span >Order Description</span>
          </div>
          <span style={{display:"flex",paddingTop:160,position:"absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero in nulla maximus consequat. Aliquam dapibus est velit.</span>
          <img style={{position:"absolute",paddingTop:220}} className= "imageStyle" src={itempicture} />
        </Accordion>

      </Grid>
    </div>
  );
}

export default OrderDetailsDrawer;
