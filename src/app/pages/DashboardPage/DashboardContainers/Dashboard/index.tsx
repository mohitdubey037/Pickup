import { CategoryProgressCard } from "app/components/Cards"
import { Drawer } from "app/components/Drawer"
import { useState } from "react"
import { ProgressCardData } from "../../helper"
const Dashboard = ({path:string}) => {
    const [drawerOpen, setDrawerOpen] = useState(true)
    return (
        <div>
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
