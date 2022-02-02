import { Card, Grid } from "@mui/material";
import { H2 } from "app/components/Typography/Typography";

export const AddressDetails = ({ addressDetails, title, label }) => {
  return (
    <div>
      <Card style={{ marginTop: "20px", padding: "10px" }}>
        <H2 title={title} />
        
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Type</div>
            <div className="label-text">{label}</div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Company Name</div>
            <div className="label-text">
              {addressDetails.companyName ? addressDetails.companyName : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">First Name</div>
            <div className="label-text">
              {addressDetails.locationFirstName
                ? addressDetails.locationFirstName
                : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Last Name</div>
            <div className="label-text">
              {addressDetails.locationLastName
                ? addressDetails.locationLastName
                : "-"}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="label">Address Line 1</div>
            <div className="label-text">
              {addressDetails.locationAddressLine1
                ? addressDetails.locationAddressLine1
                : "-"}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Address Line 2</div>
            <div className="label-text">
              {addressDetails.locationAddressLine2
                ? addressDetails.locationAddressLine2
                : "-"}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">City</div>
            <div className="label-text">
              {addressDetails.locationCity ? addressDetails.locationCity : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Postal Code</div>
            <div className="label-text">
              {addressDetails.locationPinCode
                ? addressDetails.locationPinCode
                : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Province/State</div>
            <div className="label-text">
              {addressDetails.locationProvinceCode
                ? addressDetails.locationProvinceCode
                : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Country</div>
            <div className="label-text">
              {addressDetails.locationCountry
                ? addressDetails.locationCountry
                : "-"}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="label">Contact Number</div>
            <div className="label-text">
              {addressDetails.locationPhone
                ? addressDetails.locationPhone
                : "-"}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="label">Alternate Number</div>
            <div className="label-text">
              {addressDetails.locationAlternatePhone
                ? addressDetails.locationAlternatePhone
                : "-"}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Email Address</div>
            <div className="label-text">
              {addressDetails.locationEmail
                ? addressDetails.locationEmail
                : "-"}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="label">Additional Notes</div>
            <div className="label-text">
              {addressDetails.details ? addressDetails.details : "-"}
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
