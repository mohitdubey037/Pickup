import { csvIcon } from "app/assets/Icons";
import { Progressbar } from "../Progressbar";
import { HelperText, UploadingWrapper, UploadText } from "./style";

interface UploadingProps{
    progressValue?:number;
}

const Uploading = ({progressValue}:UploadingProps) => {
    return (
        <UploadingWrapper>
            <img src={csvIcon} alt=''/>
            <UploadText>Uploading File</UploadText>
            <HelperText>We're uploading your file and creating all Orders</HelperText>
            <Progressbar value={progressValue||10}/>
        </UploadingWrapper>
    )
}

export default Uploading;
