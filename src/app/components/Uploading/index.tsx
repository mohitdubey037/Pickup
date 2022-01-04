import { Typography } from "@material-ui/core";
import { navigate } from "@reach/router";
import { csvIcon } from "app/assets/Icons";
import { Button } from "../Buttons";
import { Progressbar } from "../Progressbar";
import { HelperText, UploadingWrapper, UploadText } from "./style";

interface UploadingProps{
    progressValue?:number;
}

const Uploading = ({progressValue}:UploadingProps) => {
    return (
        <UploadingWrapper style={{display:'flex',paddingLeft:400}}>
            <img src={csvIcon} alt=''/>
            <UploadText>Uploading File</UploadText>
            <Typography style={{fontWeight:700}}>Scanning 20 out of 120 </Typography>
            <HelperText>We're uploading your file and creating all Orders</HelperText>
            <Progressbar value={progressValue||10}/>
            <div style={{paddingTop:50}}>
        <Button
        secondary
        label="table"
        
        onClick={() => {
            navigate?.("bulk-summary");
          }}
          ></Button>
        </div>
        </UploadingWrapper>
    )
}

export default Uploading;
