import { Grid } from "@mui/material";

import { ContentBox } from "app/components/CommonCss/CommonCss";
import { H2, H4, Para } from "app/components/Typography/Typography";
import { formatPhoneNo } from "utils/commonUtils";

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
              addressDetails.companyName ? addressDetails.companyName : "N/A"
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
                : "N/A"
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
                : "N/A"
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
                : "N/A"
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
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="City" />
          <H4
            className="value"
            text={
              addressDetails.locationCity ? addressDetails.locationCity : "N/A"
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
                : "N/A"
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
                : "N/A"
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
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Contact Number" />
          <H4
            className="value"
            text={
              addressDetails.locationPhone
                ? formatPhoneNo(addressDetails.locationPhone)
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Alternate Number" />
          <H4
            className="value"
            text={
              addressDetails.locationAlternatePhone
                ? formatPhoneNo(addressDetails.locationAlternatePhone)
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Email Address" />
          <H4
            className="value"
            text={
              addressDetails.locationEmail
                ? addressDetails.locationEmail
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={6} xs={6}>
          <Para text="Additional Notes" />
          <H4
            className="value"
            text={addressDetails.details ? addressDetails.details : "N/A"}
          />
        </Grid>
      </Grid>
    </ContentBox>
  );
};
