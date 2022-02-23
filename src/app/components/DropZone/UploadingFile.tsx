import { csvIcon } from "app/assets/Icons";
import { Progressbar } from "../Progressbar";
import { H2, Para } from "../Typography/Typography";
import { UploadingWrapper } from "./style";

interface UploadingProps{
    progressValue?:number;
}

const UploadingFile = ({progressValue}:UploadingProps) => {
    return (
        <UploadingWrapper>
            <img src={csvIcon} alt=''/>
            <H2 title="Uploading File" className="title" />
            <Para text="Scanning 20 out of 120" className="subtext"  />
            <Para text="We're uploading your file and creating all Orders" className="para"  />
            <Progressbar value={progressValue||10}/>
        </UploadingWrapper>
    )
}

export default UploadingFile;