import { Grid } from "@material-ui/core"
import { CategoryProgressCard } from "app/components/Cards"
import { DoghnutChart } from "app/components/Chart"
import { Drawer } from "app/components/Drawer"
import { useState } from "react"
import { ProgressCardData } from "../../helper"

const series = [45, 55]

const Dashboard = ({path:string}) => {
    const [drawerOpen, setDrawerOpen] = useState(true)
    return (
        <div>
            <Grid container>
                <Grid item lg={5}>
                    <DoghnutChart title='Deliveries' onTimePercentage={45} delayedPercentage={55} doghnutData={series}/> 
                </Grid>
            </Grid>
            <Drawer 
                open={drawerOpen} 
                setDrawerOpen={(flag)=>setDrawerOpen(flag)} 
                closeIcon={true} 
                title="Dummy Drawer"
                actionButtons={true}
                cancelButtonText="Cancel"
                actionButtonText="Save"
            >
                <h1>
                    Dhrunit
                </h1>
            </Drawer>
            {/* <CategoryProgressCard contents={ProgressCardData}/> */}
        </div>
    )
}

export default Dashboard
