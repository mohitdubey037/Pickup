import { csvIcon } from "app/assets/Icons";
import { Progressbar } from "../Progressbar";
import { HelperText, UploadingWrapper, UploadText } from "./style";

const Uploading = () => {
    return (
        <UploadingWrapper>
            <img src={csvIcon} alt=''/>
            <UploadText>Uploading File</UploadText>
            <HelperText>We're uploading your file and creating all shipments</HelperText>
            <Progressbar value={10}/>
        </UploadingWrapper>
    )
}

export default Uploading;
