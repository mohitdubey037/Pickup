import { csvIcon } from "app/assets/Icons";
import { Progressbar } from "../Progressbar";
import { H2, Para } from "../Typography/Typography";
import { UploadingWrapper } from "./style";

const UploadingFile = () => {
  return (
    <UploadingWrapper>
      <img src={csvIcon} alt="" />
      <H2 title="Uploading File" className="title" />
      <Para text="Scanning orders" className="subtext" />
      <Para
        text="We're uploading your file and creating all orders"
        className="para"
      />
      <Progressbar variant="indeterminate" />
    </UploadingWrapper>
  );
};

export default UploadingFile;
