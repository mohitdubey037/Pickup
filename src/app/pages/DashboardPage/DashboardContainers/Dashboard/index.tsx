import { CategoryProgressCard } from "app/components/Cards"
import { ProgressCardData } from "../../helper"
const Dashboard = () => {
    return (
        <div>
            <CategoryProgressCard contents={ProgressCardData}/>
        </div>
    )
}

export default Dashboard
