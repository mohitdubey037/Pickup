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
  Deliveries,
  CardContainer,
  SpentByCategory,
  DashboardCardContainer,
} from "./styles";
import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";
import {DUMMY_CHART} from './helper'

const series = [45, 55];

const Dashboard = ({ path: string }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <ModuleContainer>
      <ContainerTitle>Dashboard</ContainerTitle>
      <DashboardCardContainer>
        <CardContainer>
          <Card
            title="Pending Shipments"
            numberValue={512}
            label="4% more than last Month"
            onClick={() => {}}
          />
        </CardContainer>
        <CardContainer>
          <Card
            title="In Progress Shipments"
            numberValue={321}
            label="4% more than last Month"
            onClick={() => {}}
            type="secondary"
          />
        </CardContainer>
        <CardContainer>
          <Card
            title="Completed Shipments"
            numberValue={241}
            label="4% more than last Month"
            onClick={() => {}}
          />
        </CardContainer>
      </DashboardCardContainer>

      <ChartStyle>
        <Paper style={{ backgroundColor: "white" }}>
          <ChartDashboard
            marketPriceNumber={42032}
            labelMarketPrice="4% more than last Month"
            spentNumber={32032}
            labelSpentNumber="4% more than last Month"
            savedNumber={5846}
            labelSavedNumber="4% more than last Month"
            chartSeries={DUMMY_CHART}
          />
        </Paper>
      </ChartStyle>

      <div style={{ display: "flex", width:'100%',alignItems:'baseline' }}>
        <SpentByCategory>
        
          <CategoryProgressCard contents={ProgressCardData} />{" "}
        </SpentByCategory>

        <Deliveries>
          <DoghnutChart
            title="Deliveries"
            onTimePercentage={45}
            delayedPercentage={55}
            doghnutData={series}
          />{" "}
        </Deliveries>
      </div>
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
    </ModuleContainer>
  );
};

export default Dashboard;
