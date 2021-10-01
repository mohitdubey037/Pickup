 import React from "react";
import { Input } from "app/components/Input";
import { Grid, Typography } from "@material-ui/core";
import { FormWrapper } from "app/components/Input/style";
import { Block, Flex, FullCard } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";

function SingleShipmentDetails() {
  return(
    <FormWrapper style={{ width: "100%", margin: "0 auto" }}>
      <Typography className="typography" variant="h1" component="h3">
         Parent Shipment
      </Typography>
      <Flex direction={"column"}>
          <Flex style={{marginTop:20}} >
            <CustomInput
            
              label={"Category"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              
              label={"Customer Reference Number"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />

           
          </Flex>
          <Flex style={{marginTop:20}} >
            <CustomInput
            
              label={"Shipment Weight"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <Grid item xs={2}>
                  <div className="div_select" style={{ lineHeight: "25px" }}>
                    <label htmlFor="cars">Unit</label>
                    <br />
                    <div>
                      <Select
                       id={"locationType"}
                       name={"locationType"}
                      
                        style={{ width: "90px" }}                     
                      ></Select>
                    </div>
                  </div>
                </Grid>
              
            <CustomInput
              
              label={"Length"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              
              label={"Width"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              
              label={"Height"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />


<Grid item xs={2}>
                  <div className="div_select" style={{ lineHeight: "25px" }}>
                    <label htmlFor="cars">Unit</label>
                    <br />
                    <div>
                      <Select
                       id={"locationType"}
                       name={"locationType"}
                      
                        style={{ width: "90px" }}                     
                      ></Select>
                    </div>
                  </div>
                </Grid>
               
          </Flex>
          <Flex style={{marginTop:20}} >
            <CustomInput
            
              label={"Pieces"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
            <CustomInput
              
              label={"Shipment Cost"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />

           
          </Flex>
          <Flex style={{marginTop:20}} >
            <CustomInput
            
              label={"Pieces"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
          </Flex>
          <Flex style={{marginTop:20}} >
            <CustomInput
              
              label={"Shipment Description"}
              placeholder={"Start typing"}
              style={{ flex: 1, marginRight: 30 }}
            />
          </Flex>
          </Flex>
    </FormWrapper>
  )
}
// import { Input } from "app/components/Input";
// import { Grid, Typography } from "@material-ui/core";
// import { FormWrapper } from "app/components/Input/style";
// import { Block, Flex, FullCard } from "app/components/Input/style";

// import Select from "app/components/Select";
// import {WEIGHTDIMENSION, DIMENSION2} from "../../../../../constants"
// function SingleShipmentDetails() {
//   return (
//     <FormWrapper style={{ width: "100%", margin: "0 auto" }}>
//       <Typography className="typography" variant="h1" component="h3">
//         Parent Shipment
//       </Typography>
//       <form className="form">
//         <Grid container spacing={3}>
//           <Grid
//             item
//             xs={12}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div className="div_select">
//               <label htmlFor="cars">Category</label>
//               <br />
//               <div>
//                 <select
//                   className="select Category_select"
//                   name="cars"
//                   id="cars"
//                 ></select>
//               </div>
//             </div>
//             <div className="div_select">
//               <label htmlFor="cars">Customer Reference Number</label>
//               <br />

//               <div>
//                 <select
//                   className="select Customer-refrence-no"
//                   name="cars"
//                   id="cars"
//                 ></select>
//               </div>
//               <Flex
//                 direction={"row"}
//                 style={{ justifyContent: "space-around" }}
//               >
//                 <Grid item xs={2}>
//                   <Input label={"Length"} placeholder={"Start typing"} />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Input label={"Width"} placeholder={"Start typing"} />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Input label={"Height"} placeholder={"Start typing"} />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <div className="div_select" style={{ lineHeight: "27px" }}>
//                     <label htmlFor="cars">Unit</label>
//                     <br />
//                     <div>
//                       <Select
//                        id={"locationType"}
//                        name={"locationType"}
//                        options={DIMENSION2}
//                         style={{ width: "90px" }}
                        
//                       ></Select>
//                     </div>
//                   </div>
//                 </Grid>
//               </Flex>
//             </div>
//           </Grid>

//           <Grid container spacing={2}>
//             <Grid item xs={7}>
//               <Grid item xs={3}>
//                 <Input label={"Shipment Weight"} placeholder={"Start typing"} />
//               </Grid>
//               <Flex
//                 direction={"row"}
//                 style={{ justifyContent: "space-around" }}
//               >
//                 <Grid item xs={2}>
//                   <div className="div_select" style={{ lineHeight: "27px" }}>

//                     <label htmlFor="cars">unit</label>
//                     <br />
//                     <div>
//                        <Select
//                        id={"locationType"}
//                        name={"locationType"}
//                        options={WEIGHTDIMENSION}
//                         style={{ width: "90px" }}
                        
//                       ></Select>
//                     </div>
//                   </div>
//                 </Grid>
//               </Flex>
//             </Grid>
//             <Flex direction={"row"} style={{ justifyContent: "space-between" }}>
//               <Grid item xs={8}>
//                 <Input
//                   id={"Pieces"}
//                   name={"Pieces"}
//                   label={"Pieces"}
//                   placeholder={"Start typing"}
//                 />
//               </Grid>
//               <Grid item xs={8}>
//                 <Input
//                   id={"Shipment Cost"}
//                   name={"Shipment Cost"}
//                   label={"Shipment Cost"}
//                   placeholder={"Start typing"}
//                 />
//               </Grid>
//             </Flex>
//             <Grid item xs={8}>
//                 <Input
//                   id={"Delivery options"}
//                   name={"Delivery options"}
//                   label={"Delivery options"}
//                   placeholder={"Start typing"}
//                 />
//               </Grid>
//               <Flex direction="column">
//               <Grid item xs={5}>
//                 <Input
//                   id={"Shipment Description"}
//                   name={"Shipment Description"}
//                   label={"Shipment Description"}
//                   placeholder={"Start typing"}
//                 />
//               </Grid>
// </Flex>
//           </Grid>
//         </Grid>
//       </form>
//     </FormWrapper>
//   );
// }
 export default SingleShipmentDetails;
