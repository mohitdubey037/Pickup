import { Grid } from "@mui/material";
import { ContentBox } from "app/components/CommonCss/CommonCss";
import { H2, H4, Para } from "app/components/Typography/Typography";

export const AddressDetails = ({ addressDetails, title, label }) => {
  return (
    <ContentBox>
      <H2 title={title} className="title" />

      <Grid container spacing={1}>
        <Grid item md={3}>
          <Para text="Type" />
          <H4 className="value" text={label} />
        </Grid>
        <Grid item md={3}>
          <Para text="Company Name" />
          <H4 className="value"
            text={addressDetails.companyName ? addressDetails.companyName : "-"}
          />
        </Grid>
        <Grid item md={3}>
          <Para text="First Name" />
          <H4 className="value"
            text={
              addressDetails.locationFirstName
                ? addressDetails.locationFirstName
                : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Last Name" />
          <H4 className="value"
            text={
              addressDetails.locationLastName
                ? addressDetails.locationLastName
                : "-"
            }
          />
        </Grid>
        <Grid item md={6}>
          <Para text="Address Line 1" />
          <H4 className="value"
            text={
              addressDetails.locationAddressLine1
                ? addressDetails.locationAddressLine1
                : "-"
            }
          />
        </Grid>
        <Grid item md={6}>
          <Para text="Address Line 2" />
          <H4 className="value"
            text={
              addressDetails.locationAddressLine2
                ? addressDetails.locationAddressLine2
                : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="City" />
          <H4 className="value"
            text={
              addressDetails.locationCity ? addressDetails.locationCity : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Postal Code" />
          <H4 className="value"
            text={
              addressDetails.locationPinCode
                ? addressDetails.locationPinCode
                : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Province/State" />
          <H4 className="value"
            text={
              addressDetails.locationProvinceCode
                ? addressDetails.locationProvinceCode
                : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Country" />
          <H4 className="value"
            text={
              addressDetails.locationCountry
                ? addressDetails.locationCountry
                : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Contact Number" />
          <H4 className="value"
            text={
              addressDetails.locationPhone ? addressDetails.locationPhone : "-"
            }
          />
        </Grid>
        <Grid item md={3}>
          <Para text="Alternate Number" />
          <H4 className="value"
            text={
              addressDetails.locationAlternatePhone
                ? addressDetails.locationAlternatePhone
                : "-"
            }
          />
        </Grid>
        <Grid item md={6}>
          <Para text="Email Address" />
          <H4 className="value"
            text={
              addressDetails.locationEmail ? addressDetails.locationEmail : "-"
            }
          />
        </Grid>
        <Grid item md={6}>
          <Para text="Additional Notes" />
          <H4 className="value" text={addressDetails.details ? addressDetails.details : "-"} />
        </Grid>
      </Grid>
    </ContentBox>
  );
};
