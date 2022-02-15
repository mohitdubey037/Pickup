import { Grid } from "@mui/material";
import { ContentBox } from "app/components/CommonCss/CommonCss";
import { H2, H4, Para } from "app/components/Typography/Typography";

export const AddressDetails = ({ addressDetails, title, label }) => {
  return (
    <ContentBox>
      <H2 title={title} className="title" />

      <Grid container spacing={2}>
        <Grid item sm={3} xs={6}>
          <Para text="Location Type" />
          <H4 className="value" text={label} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Company Name" />
          <H4
            className="value"
            text={
              addressDetails.companyName ? addressDetails.companyName : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="First Name" />
          <H4
            className="value"
            text={
              addressDetails.locationFirstName
                ? addressDetails.locationFirstName
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Last Name" />
          <H4
            className="value"
            text={
              addressDetails.locationLastName
                ? addressDetails.locationLastName
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Address Line 1" />
          <H4
            className="value"
            text={
              addressDetails.locationAddressLine1
                ? addressDetails.locationAddressLine1
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Address Line 2" />
          <H4
            className="value"
            text={
              addressDetails.locationAddressLine2
                ? addressDetails.locationAddressLine2
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="City" />
          <H4
            className="value"
            text={
              addressDetails.locationCity ? addressDetails.locationCity : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Postal Code" />
          <H4
            className="value"
            text={
              addressDetails.locationPinCode
                ? addressDetails.locationPinCode
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Province/State" />
          <H4
            className="value"
            text={
              addressDetails.locationProvinceCode
                ? addressDetails.locationProvinceCode
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Country" />
          <H4
            className="value"
            text={
              addressDetails.locationCountry
                ? addressDetails.locationCountry
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Contact Number" />
          <H4
            className="value"
            text={
              addressDetails.locationPhone ? addressDetails.locationPhone : "NA"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Alternate Number" />
          <H4
            className="value"
            text={
              addressDetails.locationAlternatePhone
                ? addressDetails.locationAlternatePhone
                : "NA"
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Email Address" />
          <H4
            className="value"
            text={
              addressDetails.locationEmail ? addressDetails.locationEmail : "NA"
            }
          />
        </Grid>
        <Grid item sm={6} xs={6}>
          <Para text="Additional Notes" />
          <H4
            className="value"
            text={addressDetails.details ? addressDetails.details : "NA"}
          />
        </Grid>
      </Grid>
    </ContentBox>
  );
};
