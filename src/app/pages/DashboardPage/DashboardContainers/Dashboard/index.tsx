
import { Card } from "app/components/Card";
import { CategoryProgressCard } from "app/components/Cards";
import { ChartDashboard, DoghnutChart } from "app/components/Chart";
import { useEffect, useState } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { getDashboardDetails } from "../../../../../services/DashboardService";
import CountUp from "react-countup";
import { PaperBox } from "app/components/Card/style";
import NullState from "app/components/NullState/NullState";
import { Box, Grid } from "@mui/material";

const Dashboard = ({ path: string }) => {
  const [dashboard, setDashboard] = useState<any>({});
  const [progressCardDataTwo, setProgressCardDataTwo] = useState<any>([]);
  const [spentPercentage, setSpentPercentage] = useState<number>(0);
  const [actualSpent, setActualSpent] = useState<number>();
  const [totalSpentPercentage, setTotalSpentPercentage] = useState<number>(0)
  const [chartData, setChartData] = useState<any>([]);
  const [a, setA] = useState<any>([]);

  // useEffect(() => {
  //   console.log(dashboard);
  // },[dashboard])

  // useEffect(() => {
  //   console.log(chartData);
  // },[chartData])

  // useEffect(() => {
  //   console.log(actualSpent);
  // },[actualSpent])

  const getDashboardData = async () => {
    const res = (await getDashboardDetails()) as any;

    if (res.success) {
      const dashboardData = res.response.data.data;
      const dashboardcat = res.response.data.data.category;
      const duration = res.response.data.data.duration;
      const spentData = res.response.data.data.youSpent;
      setActualSpent(spentData);
      setDashboard(dashboardData);
      let data: any = [];
      for (let keys in duration) {
        data.push({
          x: keys,
          y: duration[keys],
        });
      }
      let previousMonthSpent: number = (data[0].y);

      let thisMonthSpent: number = (data[1]?.y);

      // 1147, 1225
      var per = (((thisMonthSpent - previousMonthSpent)/previousMonthSpent) * 100).toFixed(2);
      // console.log(per);
      setTotalSpentPercentage(+per);

      console.log(data);
      
      setChartData(data);
      setA(data);

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

  var series = [dashboard?.pending, dashboard?.completed]
  let totalOrder = dashboard?.completed + dashboard?.pending;

  if (dashboard.completed !== 0 || dashboard.pending !== 0) {
    var onTime = (dashboard.completed / totalOrder) * 100 || 0;
    var delayed = (dashboard.pending / totalOrder) * 100 || 0;
  }
  else {
    onTime = 0;
    delayed = 0;
  }

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <ModuleContainer>
      <H2 title="Dashboard" />

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
              label={dashboard.pending !== 0 ? `${totalSpentPercentage}% more than last Month` : "You have no previous data"}
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
              label={dashboard.inprogress !== 0 ? `${totalSpentPercentage}% more than last Month` : "You have no previous data"}
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
                    end={
                      dashboard.completed || dashboard.completed === 0
                        ? dashboard.completed
                        : "-"
                    }
                    // duration={5}
                  />
                </>
              }
              label={dashboard.completed !== 0 ? `${totalSpentPercentage}% more than last Month` : "You have no previous data"}
              onClick={() => {}}
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <PaperBox>
              <ChartDashboard
                marketPriceNumber={
                  dashboard.total || dashboard.total === 0
                    ? `$ ${dashboard.total.toFixed(2)}`
                    : "-"
                }
                labelMarketPrice={dashboard.total !== 0 ? `${totalSpentPercentage}% ${totalSpentPercentage > 0 ? 'more' :  'less'} than last Month`: "You have no previous data"}
                spentNumber={
                  dashboard.youSpent || dashboard.youSpent === 0
                    ? `$ ${dashboard.youSpent.toFixed(2)}`
                    : "-"
                }
                labelSpentNumber={dashboard.youSpent !== 0 ? `${totalSpentPercentage}% ${totalSpentPercentage > 0 ? 'more' : 'less'} than last Month` : "You have no previous data"}
                savedNumber={
                  dashboard.yousaved || dashboard.yousaved === 0
                    ? `$ ${dashboard.yousaved.toFixed(2)}`
                    : "-"
                }
                labelSavedNumber={dashboard.yousaved !== 0 ? `${totalSpentPercentage}% ${totalSpentPercentage > 0 ? 'more' : 'less'} than last Month` : "You have no previous data"}
                chartSeries={chartData}
                car = {a}
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
              <H3 text="Deliveries" />
              {/* {dashboard.completed && dashboard.pending ? ( */}
                <DoghnutChart
                  onTimePercentage={+onTime.toFixed(2)}
                  delayedPercentage={+delayed.toFixed(2)}
                  doghnutData={series}
                />
              {/* ) : (
                <NullState />
              )} */}
            </PaperBox>
          </Grid>
        </Grid>
      </Box>
    </ModuleContainer>
  );
};

export default Dashboard;
