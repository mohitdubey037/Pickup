import { DropzoneWrapper, DropzoneBox, DropeZoneText } from "./style";
import Dropzone from "react-dropzone";
import { csvIcon } from "app/assets/Icons";
import { ErrorBox } from "./ErrorBox";
import { H5 } from "../Typography/Typography";
import { Link } from "../Typography/Links";
import UploadingFile from "./UploadingFile";
import { Termslink } from "../Typography/style";
interface DropZoneProps {
  onDrop: (files: Array<File>) => void;
  isError?: boolean;
  inProgress?: boolean;
}

const DropZone = ({ onDrop, isError, inProgress }: DropZoneProps) => {
  // const[inProgress, setInProgress]=useState<boolean>(false)
  return (
<>
    {isError && <ErrorBox />}
    <DropzoneWrapper>
      {inProgress ? (
        <UploadingFile />
      ) : (
        <DropzoneBox>
          <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <>
                <img src={csvIcon} alt="" />
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropeZoneText>
                  <Termslink className="label">Drag and drop files or <Link to="">Click Here</Link> to select a
                    file</Termslink>
                  <H5 text="Files accepted CSV, XLS" className="smalltext" />
                  </DropeZoneText>
                </div>
              </>
            )}
          </Dropzone>
        </DropzoneBox>
      )}
    </DropzoneWrapper>
    </>
  );
};

export default DropZone;
