import { CustomProgressCard, ProgressRow } from "./style"
import { Progressbar } from "../Progressbar"
import { H3, Para } from "../Typography/Typography"
import { Box } from "@mui/material";

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
            <H3 text="Spent by Category" mb={24} />
            <Box className="outer-progress-bar">
            {contents.map((category:ProgressCategory)=>{
                return(
                    <ProgressRow>
                        <Para className="name" text={category.category} />
                        <Progressbar value={category.progressValue} smallProgreebar />
                        <Para className="cost" text={`${category.cost}`} ml={16} />
                    </ProgressRow> 
                )
            })}   
            </Box>
        </CustomProgressCard>
    )
}

export default CategoryProgressCard
