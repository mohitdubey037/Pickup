import { Accordion } from "app/components/Accordion";
import { AccordionOuterBox } from "./style";
import { Grid, Skeleton } from "@mui/material";
import { H4 } from "app/components/Typography/Typography";
import { Box } from "@mui/system";



function OrderDetailsSkeleton() {
 
  return (
    <>
        <AccordionOuterBox>
          <H4 text="Order Items--" />
            <Box mt={3}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <H4 text="Category" />
                  <Skeleton width="60%" height={28}  className="value" />
                </Grid>
                <Grid item xs={6}>
                  <H4 text="Customer Reference #" />
                  <Skeleton width="80%" height={28}  className="value" />
                </Grid>
                <Grid item xs={6}>
                  <H4 text="Delivery Options" />
                  <Skeleton width="70%" height={28}  className="value" />
                </Grid>
                <Grid item xs={6}>
                  <H4 text="Fragile" />
                  <Skeleton width="60%" height={28}  className="value" />
                </Grid>
              </Grid>
            </Box>

        </AccordionOuterBox>
    </>
  );
}

export default OrderDetailsSkeleton;
