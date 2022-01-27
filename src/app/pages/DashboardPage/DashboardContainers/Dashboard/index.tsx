import { Box, Grid } from "@material-ui/core";
import { Card } from "app/components/Card";
import { CategoryProgressCard } from "app/components/Cards";
import { ChartDashboard, DoghnutChart } from "app/components/Chart";
import { Drawer } from "app/components/Drawer";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
// import { ProgressCardData } from "../../helper";
import {
  Deliveries,
  SpentByCategory,
} from "./styles";
import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle, ListLabel } from "app/components/Typography/Typography";
// import { DUMMY_CHART } from "./helper";
import { InnerContainer } from "app/components/ModuleContainer/style";
import { getDashboardDetails } from "../../../../../services/DashboardService";
import CountUp from "react-countup";
import { PaperBox } from "app/components/Card/style";
import NullState from "app/components/NullState/NullState";

const Dashboard = ({ path: string }) => {
  const [dashboard, setDashboard] = useState<any>({});
  // const [categoryData, setCategoryData] = useState<any>({});
  const [progressCardDataTwo, setProgressCardDataTwo] = useState<any>([]);
  const [chartData, setChartData] = useState<any>();
  const [spentPercentage, setSpentPercentage] = useState<number>(0);
  const [actualSpent, setActualSpent] = useState<number>();

  const getDashboardData = async () => {
    const res = (await getDashboardDetails()) as any;
    if (res.success) {
      const dashboardData = res.response.data.data;
      const dashboardcat = res.response.data.data.category;
      const duration = res.response.data.data.duration;
      const actual = res.response.data.data.youSpent;
      setActualSpent(actual);
      setDashboard(dashboardData);
      console.log("Dash you spent: ", dashboard.youSpent ? dashboard.youSpent : "-");
      let data: any= [];
      console.log("duration  -", duration);
      for(let keys in duration){
        data.push({
          x : keys,
          y : duration[keys]
        });
      }
      data.push({
        x : "February",
        y : 4000
      });
      
      const nativeChartData = [{data}];
      data = []

      data.push({
        x : "Januarry",
        y : 100
      },{
        x : "February",
        y : 400
      });
      
      nativeChartData.push({data});
      setChartData(nativeChartData);
      // console.log("data - ", nativeChartData);
      const CategoryLength = Object.keys(dashboardData?.category).length;
      console.log("Progress: ", +CategoryLength);
      console.log("You spent: ", dashboard.youSpent);
      const spentByCat: number = 2057.6 / CategoryLength;
      console.log("Spent By Cat: ", +spentByCat);
      const spentPer: number = ((2057.6 / CategoryLength) / 2057.6) * 100;
      console.log("Spent Cat: ", spentPer);
      console.log("Spent Cat Percentage: ", +spentPer.toFixed(0));
      setSpentPercentage( +spentPer.toFixed(0));
      console.log("SpentPercentage useState: ", spentPercentage);
      const progressCardNative: any = [];
      for (let keys in dashboardcat) {
        progressCardNative.push({
          category: keys,
          progressValue: spentPercentage,
          cost: dashboardcat[keys],
        });
      }
      setProgressCardDataTwo(progressCardNative);
    }
  };
  console.log("Chart Data: ", chartData);
  let totalOrder = dashboard.completed + dashboard.pending
  const onTime = (dashboard.completed/totalOrder) * 100;
  const delayed = (dashboard.pending/totalOrder) * 100;
  const series = [dashboard.completed, dashboard.pending];

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <ModuleContainer>
      <ContainerTitle title="Dashboard" />
   
      <Box mt={3}>
        <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
            <Card
              title="Pending Orders"
              numberValue={
                dashboard?.pending || dashboard.pending === 0
                  ? dashboard.pending
                  : "-"
              }
              label="4% more than last Month"
              onClick={() => {}}
            />
          </Grid>
          
        <Grid item sm={4} xs={12}>
            <Card
              title="In Progress Orders"
              numberValue={
                dashboard.inprogress || dashboard.inprogress === 0
                  ? dashboard.inprogress
                  : "-"
              }
              label="4% more than last Month"
              onClick={() => {}}
              isOrangeBox={true}
            />
          </Grid>

          
        <Grid item sm={4} xs={12}>
            <Card
              title="Completed Orders"
              numberValue={
                <>
                  <CountUp 
                    end={dashboard.completed || dashboard.completed === 0
                      ? dashboard.completed
                      : "-"}
                      // duration={5}
                  />
                </>
                
              }
              label="4% more than last Month"
              onClick={() => {}}
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <PaperBox>
            <ChartDashboard
              marketPriceNumber={
                dashboard.total || dashboard.total === 0 ? dashboard.total : "-"
              }
              labelMarketPrice="4% more than last Month"
              spentNumber={
                dashboard.youSpent || dashboard.youSpent === 0
                  ? dashboard.youSpent
                  : "-"
              }
              labelSpentNumber="4% more than last Month"
              savedNumber={
                dashboard.yousaved || dashboard.yousaved === 0
                  ? dashboard.yousaved
                  : "-"
              }
              labelSavedNumber="4% more than last Month"
              chartSeries={chartData}
              chartData={dashboard.duration}
            />
            </PaperBox>
            </Grid>



            <Grid item sm={7} xs={12}>
            <PaperBox>
              <CategoryProgressCard contents={progressCardDataTwo} />
          </PaperBox>
            </Grid>

            
            <Grid item sm={5} xs={12}>
            <PaperBox>
            <ListLabel text="Deliveries"  />
           {dashboard.completed && dashboard.pending ? 
             ( <DoghnutChart
                onTimePercentage={+onTime.toFixed(2)}
                delayedPercentage={+delayed.toFixed(2)}
                doghnutData={series}
              />
          ) : (
            <NullState />
          )} 
          </PaperBox>
            </Grid>
          </Grid>

          </Box>

      
      

        
  
    </ModuleContainer>
  );
};

export default Dashboard;
