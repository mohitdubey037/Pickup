import { Grid } from "@material-ui/core";
import { Card } from "app/components/Card";
import { CategoryProgressCard } from "app/components/Cards";
import { ChartDashboard, DoghnutChart } from "app/components/Chart";
import { Drawer } from "app/components/Drawer";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { ProgressCardData } from "../../helper";
import {
  ChartStyle,
  CompletedShipments,
  Deliveries,
  InProgressShipment,
  PendingShipment,
  SpentByCategory,
} from "./styles";

const series = [45, 55];

const Dashboard = ({ path: string }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <div>
      <Grid container>
        <Grid item lg={5}>
          <Deliveries>
            <DoghnutChart
              title="Deliveries"
              onTimePercentage={45}
              delayedPercentage={55}
              doghnutData={series}
            />{" "}
          </Deliveries>
        </Grid>
      </Grid>
      <Drawer
        open={drawerOpen}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        title="Dummy Drawer"
        actionButtons={true}
        cancelButtonText="Cancel"
        actionButtonText="Save"
      >
        <h1>Dhrunit</h1>
      </Drawer>
      <SpentByCategory>
        {" "}
        <CategoryProgressCard contents={ProgressCardData} />{" "}
      </SpentByCategory>
      <ChartStyle>
        <Paper>
          <ChartDashboard
            marketPriceNumber={42032}
            labelMarketPrice="4% more than last Month"
            spentNumber={32032}
            labelSpentNumber="4% more than last Month"
            savedNumber={5846}
            labelSavedNumber="4% more than last Month"
          />
        </Paper>
      </ChartStyle>

      <PendingShipment>
        <Card
          title="Pending Shipments"
          numberValue={512}
          label="4% more than last Month"
          onClick={() => {}}
          type="false"
        />
      </PendingShipment>
      <InProgressShipment>
        <Card
          title="In Progress Shipments"
          numberValue={321}
          label="4% more than last Month"
          onClick={() => {}}
          type="True"
        />
      </InProgressShipment>
      <CompletedShipments>
        <Card
          title="Completed Shipments"
          numberValue={241}
          label="4% more than last Month"
          onClick={() => {}}
          type="True"
        />
      </CompletedShipments>
    </div>
  );
};

export default Dashboard;
