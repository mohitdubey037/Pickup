import React from "react";
import { Grid } from "@material-ui/core";
import { H4 } from "app/components/Typography/Typography";
import { ContentBox } from "app/components/CommonCss/CommonCss";

interface ContactDetailsSidebarProps {
  contactInfo: any;
}
function ContactDetailsSidebar(props: ContactDetailsSidebarProps) {
  let { contactInfo } = props;

  return (
    <ContentBox>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <H4 text="Company Name" />
          <H4 text={contactInfo?.companyName || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="First Name" />
          <H4 text={contactInfo?.locationFirstName || "-"}  className="value" />
        </Grid>
        <Grid item xs={6}>
          <H4 text="Last Name" />
          <H4 text={contactInfo?.locationLastName || "-"}  className="value" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <H4 text="Address Line 1" />
          <H4 text={contactInfo?.locationAddressLine1 || "-"}  className="value" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <H4 text="Address Line 2" />
          <H4 text={contactInfo?.locationAddressLine2 || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="City" />
          <H4 text={contactInfo?.locationCity || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="Postal Code" />
          <H4 text={contactInfo?.locationPinCode || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="Province/State" />
          <H4 text={contactInfo?.locationProvinceCode || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="Country" />
          <H4 text={contactInfo?.locationCountry || "-"}  className="value" />
        </Grid>

        <Grid item xs={6}>
          <H4 text="Contact Number" />
          <H4 text={contactInfo?.locationPhone || "- "}  className="value" />
        </Grid>
        <Grid item xs={6}>
          <H4 text="Alternate Number" />
          <H4 text={contactInfo?.locationAlternatePhone || "-"}  className="value" />
        </Grid>

        <Grid item xs={12}>
          <H4 text="Email Address" />
          <H4 text={contactInfo?.locationEmail || "-"}  className="value" />
        </Grid>
      </Grid>
    </ContentBox>
  );
}

export default ContactDetailsSidebar;
