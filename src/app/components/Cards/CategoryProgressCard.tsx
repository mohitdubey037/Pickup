import { CustomProgressCard, ProgressRow } from "./style"
import { Progressbar } from "../Progressbar"
import { ListLabel, Para } from "../Typography/Typography"

interface ProgressCategory{
    category:string;
    progressValue:number;
    cost:number;
}

interface ProgressCardProps{
    contents:Array<ProgressCategory>
}

const CategoryProgressCard = ({contents}:ProgressCardProps) => {
    return (
        <CustomProgressCard>
            <ListLabel text="Spent by Category" className="heading" />
            {contents.map((category:ProgressCategory)=>{
                return(
                    <ProgressRow>
                        <Para className="name" text={category.category} />
                        <Progressbar value={category.progressValue}/>
                        <Para className="cost" text={`${category.cost}`} />
                    </ProgressRow> 
                )
            })}   
        </CustomProgressCard>
    )
}

export default CategoryProgressCard
