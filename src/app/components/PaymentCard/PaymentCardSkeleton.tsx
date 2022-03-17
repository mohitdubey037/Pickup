import { Box, Grid, IconButton, Skeleton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ellipse } from "app/assets/Icons";
import { CardEllipse, IndividualCardDiv } from "./style";

export default function PaymentCardSkeleton() {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {Array.from(Array(3).keys()).map(() => (
          <Grid item xl={4} sm={6} xs={12}>
            <IndividualCardDiv>
              <CardEllipse src={ellipse} />
              <IconButton className="card-options" disabled>
                <MoreVertIcon />
              </IconButton>

              <Box mt={14}>
                <Skeleton width="90%" height={28} className="value" />
              </Box>
              <Box mt={1} display="flex" alignItems="center">
                <Skeleton width="40%" height={28} className="value" />
                <Skeleton
                  width="40%"
                  height={28}
                  className="value"
                  style={{ marginLeft: "24px" }}
                />
              </Box>
            </IndividualCardDiv>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
