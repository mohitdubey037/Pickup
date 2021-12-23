import React from "react";
import { alertOctagon } from "../../../../assets/Icons";
function OrderHoldingComponent() {
  return (
    <div style={{ backgroundColor: "#FFDB6E", width:650,height:100}}>
      <div style={{ display: "flex", paddingLeft: 30, paddingTop: 20 }}>
        <img className="imageStyle" src={alertOctagon} />
        <div
          style={{
            fontWeight: 700,
            display: "flex",
            paddingLeft: 30,
            paddingBottom: 20,
            color: "#8C6D0F",
          }}
        >
          3 orders added to orders holding zone.
        </div>
        <br />
      </div>
      <div style={{paddingLeft:30,color:"#8C6D0F",fontWeight:400}}>
        Once they are ready to ship you can schedule them from the holding zone
      </div>
    </div>
  );
}

export default OrderHoldingComponent;
