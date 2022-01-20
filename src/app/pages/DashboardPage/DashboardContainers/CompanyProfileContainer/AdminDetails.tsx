import { Avatar, Box, Grid } from "@material-ui/core";
import { FullCard } from "app/components/Input/style";
import {
  ListLabel,
  Para,
  SmallLabel,
} from "app/components/Typography/Typography";
import { FlexGrid } from "./style";

export default function AdminDetails() {
  return (
    <>
      <FullCard>
        <Box mb={4}>
          <ListLabel text="Admin Details" />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box mr={4}>
            <Avatar style={{ width: 86, height: 86 }} src="" />
          </Box>
          <FlexGrid>
          <Grid container spacing={2}>
          <Grid item lg={2} sm={3}>
            <Para text="First Name" />
            <SmallLabel text="-" className="value" />
          </Grid>
          <Grid item lg={2} sm={3}>
            <Para text="Last Name" />
            <SmallLabel text="-" className="value" />
          </Grid>
          <Grid item lg={2} sm={3}>
            <Para text="Phone Number" />
            <SmallLabel text="-" className="value" />
          </Grid>
          <Grid item lg={3} sm={3}>
            <Para text="Role/Designation" />
            <SmallLabel text="-" className="value" />
          </Grid>
          <Grid item lg={3} sm={3}>
            <Para text="Email Id" />
            <SmallLabel text="-" className="value" />
          </Grid>
          </Grid>
          </FlexGrid>
        </Box>
      </FullCard>
    </>
  );
}
