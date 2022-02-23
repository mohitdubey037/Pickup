import { Grid } from "@mui/material";

import { H4, Para } from "app/components/Typography/Typography";
import { ContentBox } from "app/components/CommonCss/CommonCss";
import { formatPhoneNo } from "utils/commonUtils";
import { LOCATION_TYPES } from "../../../../../constants";

interface ContactDetailsSidebarProps {
  contactInfo: any;
}

function ContactDetailsSidebar(props: ContactDetailsSidebarProps) {
  let { contactInfo } = props;

  const locationType = (location: any) =>
    LOCATION_TYPES.find((obj) => obj.value === location.addressType)?.label ||
    "N/A";

  return (
    <ContentBox>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={6}>
          <Para text="Location Type" />
          <H4 text={locationType(contactInfo)} className="value" />
        </Grid>
        <Grid item xs={6}>
          <Para text="Company Name" />
          <H4 text={contactInfo?.companyName || "N/A"} className="value" />
        </Grid>
        <Grid item xs={6}>
          <Para text="First Name" />
          <H4
            text={contactInfo?.locationFirstName || "N/A"}
            className="value"
          />
        </Grid>
        <Grid item xs={6}>
          <Para text="Last Name" />
          <H4 text={contactInfo?.locationLastName || "N/A"} className="value" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Para text="Address Line 1" />
          <H4
            text={contactInfo?.locationAddressLine1 || "N/A"}
            className="value"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Para text="Address Line 2" />
          <H4
            text={contactInfo?.locationAddressLine2 || "N/A"}
            className="value"
          />
        </Grid>
        <Grid item xs={6}>
          <Para text="City" />
          <H4 text={contactInfo?.locationCity || "N/A"} className="value" />
        </Grid>
        <Grid item xs={6}>
          <Para text="Postal Code" />
          <H4 text={contactInfo?.locationPinCode || "N/A"} className="value" />
        </Grid>
        <Grid item xs={6}>
          <Para text="Province/State" />
          <H4
            text={contactInfo?.locationProvinceCode || "N/A"}
            className="value"
          />
        </Grid>
        <Grid item xs={6}>
          <Para text="Country" />
          <H4 text={contactInfo?.locationCountry || "N/A"} className="value" />
        </Grid>
        <Grid item xs={6}>
          <Para text="Contact Number" />
          <H4
            text={
              contactInfo.locationPhone
                ? formatPhoneNo(contactInfo.locationPhone)
                : "N/A"
            }
            className="value"
          />
        </Grid>
        <Grid item xs={6}>
          <Para text="Alternate Number" />
          <H4
            text={
              contactInfo.locationAlternatePhone
                ? formatPhoneNo(contactInfo.locationAlternatePhone)
                : "N/A"
            }
            className="value"
          />
        </Grid>
        <Grid item xs={12}>
          <Para text="Email Address" />
          <H4 text={contactInfo?.locationEmail || "N/A"} className="value" />
        </Grid>
        <Grid item xs={12}>
          <Para text="Additional Notes" />
          <H4 className="value" text={contactInfo?.details || "N/A"} />
        </Grid>
      </Grid>
    </ContentBox>
  );
}

export default ContactDetailsSidebar;
