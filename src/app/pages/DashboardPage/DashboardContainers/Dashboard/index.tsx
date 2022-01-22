import { Grid } from "@material-ui/core";
import { Card } from "app/components/Card";
import { CategoryProgressCard } from "app/components/Cards";
import { ChartDashboard, DoghnutChart } from "app/components/Chart";
import { Drawer } from "app/components/Drawer";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
// import { ProgressCardData } from "../../helper";
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
import { InnerContainer } from "app/components/ModuleContainer/style";
import { getDashboardDetails } from "../../../../../services/DashboardService";
import CountUp from 'react-countup';

const Dashboard = ({ path: string }) => {
  
  const [dashboard, setDashboard] = useState<any>({});
  const [nilesh, setNilesh] = useState('');

  const getDashboardData = async() => {
    const res = (await getDashboardDetails()) as any;
    if(res.success) {
      const dashboardData = res.response.data.data;
      const dashboardcat = res.response.data.data.category;
      console.log("Cat", dashboardcat)
      const toMap = Object.keys(dashboardcat)
      const mappedObj = toMap.map((fun) =>{
        // console.log("Nilesh P", nilesh)
        // setNilesh(fun);
        // console.log("Map", fun);
        // console.log("Nilesh P", nilesh)
        var ProgressCardData = [
          { category: fun, progressValue: 10, cost: 3231 },
          // { category: "Category1", progressValue: 10, cost: 3231 },
          // { category: "Category1", progressValue: 10, cost: 3231 },
          // { category: "Category1", progressValue: 10, cost: 3231 },
          // { category: "Category1", progressValue: 10, cost: 3231 },
        ];
      })
      // console.log("Nilesh P PPP", nilesh)
      console.log("Keys",Object.keys(dashboardcat));
      console.log("Dashboard: ", dashboardData);
      setDashboard(dashboardData);
    }
  }
  const series = [45, 55];
  const ProgressCardData = [
    { category: "{nilesh}", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
  ];
  // const name: "abc";
  useEffect(() => {
    getDashboardData();
  }, [])
  
  return (
    <ModuleContainer>
      <ContainerTitle title="Dashboard" />
      <InnerContainer> 
      <DashboardCardContainer>
        <CardContainer>
          <Card
            title="Pending Orders"
            numberValue={dashboard?.pending || dashboard.pending === 0 ? dashboard.pending : "-"}
            label="4% more than last Month"
            onClick={() => {}}
          />
        </CardContainer>
        <CardContainer>
          <Card
            title="In Progress Orders"
            numberValue={dashboard.inprogress || dashboard.inprogress === 0 ? dashboard.inprogress : "-"}
            label="4% more than last Month"
            onClick={() => {}}
            type="secondary"
          />
        </CardContainer>
        <CardContainer>
          <Card
            title="Completed Orders"
            numberValue={dashboard.completed || dashboard.completed === 0 ? dashboard.completed : "-"}
            label="4% more than last Month"
            onClick={() => {}}
          />
        </CardContainer>
      </DashboardCardContainer>

      <ChartStyle>
        <Paper style={{ backgroundColor: "white" }}>
          <ChartDashboard
            marketPriceNumber={dashboard.total || dashboard.total === 0 ? dashboard.total : "-"}
            labelMarketPrice="4% more than last Month"
            spentNumber={dashboard.youSpent || dashboard.youSpent === 0 ? dashboard.youSpent : "-"}
            labelSpentNumber="4% more than last Month"
            savedNumber={dashboard.yousaved || dashboard.yousaved === 0 ? dashboard.yousaved : "-"}
            labelSavedNumber="4% more than last Month"
            chartSeries={DUMMY_CHART}
            chartData={dashboard.duration}
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
            onTimePercentage={dashboard.completed}
            delayedPercentage={dashboard.pending}
            doghnutData={series}
          />{" "}
        </Deliveries>
      </div>
      </InnerContainer>
    </ModuleContainer>
  );
};

export default Dashboard;
