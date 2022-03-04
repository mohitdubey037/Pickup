import { Grid } from "@mui/material";

import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Button } from "app/components/Buttons";
import { H4, Para } from "app/components/Typography/Typography";
import { ContentBox } from "app/components/CommonCss/CommonCss";
import { formatPhoneNo } from "utils/commonUtils";
import { LOCATION_TYPE_BY_ID } from "../../../../../constants";

interface ContactDetailsSidebarProps {
  data: any;
  handleDelete: () => void;
  handleEdit: () => void;
}

function ContactDetailsSidebar(props: ContactDetailsSidebarProps) {
  let { data, handleDelete, handleEdit } = props;

  return (
    <>
      <DrawerInnerContent>
        <ContentBox>
          <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={6}>
              <Para text="Location Type" />
              <H4
                text={LOCATION_TYPE_BY_ID?.[data?.addressType] || "N/A"}
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <Para text="Company Name" />
              <H4 text={data?.companyName || "N/A"} className="value" />
            </Grid>
            <Grid item xs={6}>
              <Para text="First Name" />
              <H4 text={data?.locationFirstName || "N/A"} className="value" />
            </Grid>
            <Grid item xs={6}>
              <Para text="Last Name" />
              <H4 text={data?.locationLastName || "N/A"} className="value" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Para text="Address Line 1" />
              <H4
                text={data?.locationAddressLine1 || "N/A"}
                className="value"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Para text="Address Line 2" />
              <H4
                text={data?.locationAddressLine2 || "N/A"}
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <Para text="City" />
              <H4 text={data?.locationCity || "N/A"} className="value" />
            </Grid>
            <Grid item xs={6}>
              <Para text="Postal Code" />
              <H4 text={data?.locationPinCode || "N/A"} className="value" />
            </Grid>
            <Grid item xs={6}>
              <Para text="Province/State" />
              <H4
                text={data?.locationProvinceCode || "N/A"}
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <Para text="Country" />
              <H4 text={data?.locationCountry || "N/A"} className="value" />
            </Grid>
            <Grid item xs={6}>
              <Para text="Contact Number" />
              <H4
                text={
                  data.locationPhone ? formatPhoneNo(data.locationPhone) : "N/A"
                }
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <Para text="Alternate Number" />
              <H4
                text={
                  data.locationAlternatePhone
                    ? formatPhoneNo(data.locationAlternatePhone)
                    : "N/A"
                }
                className="value"
              />
            </Grid>
            <Grid item xs={12}>
              <Para text="Email Address" />
              <H4 text={data?.locationEmail || "N/A"} className="value" />
            </Grid>
            <Grid item xs={12}>
              <Para text="Additional Notes" />
              <H4 className="value" text={data?.details || "N/A"} />
            </Grid>
          </Grid>
        </ContentBox>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button label="Delete" onClick={handleDelete} size="medium" secondary />
        <Button label="Edit" onClick={handleEdit} size="medium" />
      </DrawerFooter>
    </>
  );
}

export default ContactDetailsSidebar;
