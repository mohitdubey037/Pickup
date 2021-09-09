import { Grid } from "@material-ui/core"
import { CategoryProgressCard } from "app/components/Cards"
import { DoghnutChart } from "app/components/Chart"
import { ProgressCardData } from "../../helper"

const series = [45, 55]

const Dashboard = ({path:string}) => {
    return (
        <div>
            <Grid container>
                <Grid item lg={5}>
                    <DoghnutChart title='Deliveries' onTimePercentage={45} delayedPercentage={55} doghnutData={series}/> 
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
