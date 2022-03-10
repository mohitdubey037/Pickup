import { Grid } from "@mui/material";

import { ContentBox } from "app/components/CommonCss/CommonCss";
import { H2, H4, Para } from "app/components/Typography/Typography";
import { formatPhoneNo } from "utils/commonUtils";
import { LOCATION_TYPE_BY_ID } from "../../../../../constants";

export const AddressDetails = ({ data, title }) => {
  return (
    <ContentBox>
      <H2 title={title} className="title" />

      <Grid container spacing={3}>
        <Grid item sm={3} xs={6}>
          <Para text="Location Type" />
          <H4
            className="value"
            text={LOCATION_TYPE_BY_ID?.[data?.addressType] || "N/A"}
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Company Name" />
          <H4 className="value" text={data?.companyName || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="First Name" />
          <H4 className="value" text={data?.locationFirstName || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Last Name" />
          <H4 className="value" text={data?.locationLastName || "N/A"} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Address Line 1" />
          <H4 className="value" text={data?.locationAddressLine1 || "N/A"} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Address Line 2" />
          <H4 className="value" text={data?.locationAddressLine2 || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="City" />
          <H4 className="value" text={data?.locationCity || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Postal Code" />
          <H4 className="value" text={data?.locationPinCode || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Province/State" />
          <H4 className="value" text={data?.locationProvinceCode || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Country" />
          <H4 className="value" text={data?.locationCountry || "N/A"} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Contact Number" />
          <H4
            className="value"
            text={
              data.locationPhone ? formatPhoneNo(data.locationPhone) : "N/A"
            }
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Para text="Alternate Number" />
          <H4
            className="value"
            text={
              data.locationAlternatePhone
                ? formatPhoneNo(data.locationAlternatePhone)
                : "N/A"
            }
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Email Address" />
          <H4 className="value" text={data?.locationEmail || "N/A"} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Para text="Additional Notes" />
          <H4 className="value" text={data?.details || "N/A"} />
        </Grid>
      </Grid>
    </ContentBox>
  );
};
