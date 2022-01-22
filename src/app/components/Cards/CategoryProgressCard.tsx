import { CustomProgressCard, ProgressRow, ProgressCardHeader } from "./style"
import { Progressbar } from "../Progressbar"

interface ProgressCategory{
    category:any;
    progressValue:number;
    cost:number;
}

interface ProgressCardProps{
    contents:Array<ProgressCategory>
}

const CategoryProgressCard = ({contents}:ProgressCardProps) => {
    return (
        <CustomProgressCard>
            <ProgressCardHeader>Spent by Category</ProgressCardHeader>
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
