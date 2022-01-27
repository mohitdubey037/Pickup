import { CustomProgressCard, ProgressRow } from "./style"
import { Progressbar } from "../Progressbar"
import { ListLabel } from "../Typography/Typography"

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
            <ListLabel text="Spent by Category"  />
            {contents.map((category:ProgressCategory)=>{
                return(
                    <ProgressRow>
                        <span>{category.category} </span>
                        <Progressbar value={category.progressValue}/>
                        <span>$ {category.cost}</span>
                    </ProgressRow> 
                )
            })}   
        </CustomProgressCard>
    )
}

export default CategoryProgressCard
