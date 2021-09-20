import { DropzoneWrapper, DropText, DropzoneBox, HelperText } from "./style";
import Dropzone from "react-dropzone";
import { csvIcon } from "app/assets/Icons";
import { ErrorBox } from "./ErrorBox";
import Uploading from "../Uploading";

interface DropZoneProps {
  onDrop: (files: Array<File>) => void;
  isError?: boolean;
  inProgress?: boolean;
}

const DropZone = ({ onDrop, isError, inProgress }: DropZoneProps) => {
  return (
    <DropzoneWrapper>
      {isError && <ErrorBox />}
      {inProgress ? (
        <Uploading />
      ) : (
        <DropzoneBox>
          <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <img src={csvIcon} alt="" />
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropText>
                    Drag and drop files or <a>Click Here</a> to select a file
                  </DropText>
                </div>
                <HelperText>Files accepted CSV, XLS</HelperText>
              </section>
            )}
          </Dropzone>
        </DropzoneBox>
      )}
    </DropzoneWrapper>
  );
};

export default DropZone;
