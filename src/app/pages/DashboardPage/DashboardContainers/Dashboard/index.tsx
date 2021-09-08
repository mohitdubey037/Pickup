import { CategoryProgressCard } from "app/components/Cards"
import { ProgressCardData } from "../../helper"
const Dashboard = ({path:string}) => {
    return (
        <div>
            <CategoryProgressCard contents={ProgressCardData}/>
        </div>
    )
}

export default Dashboard
