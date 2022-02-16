import { DropzoneWrapper, DropzoneBox, DropeZoneText } from "./style";
import Dropzone from "react-dropzone";
import { csvIcon } from "app/assets/Icons";
import { ErrorBox } from "./ErrorBox";
import Uploading from "../Uploading";
import {useState} from 'react'
import { Termslink } from "app/pages/AuthScreens/style";
import { Link } from "../Link";
import { H5 } from "../Typography/Typography";
import { Flex } from "../Input/style";
interface DropZoneProps {
  onDrop: (files: Array<File>) => void;
  isError?: boolean;
  inProgress?: boolean;
}

const DropZone = ({ onDrop, isError }: DropZoneProps) => {
  const[inProgress, setInProgress]=useState<boolean>(true)
  return (
    <DropzoneWrapper>
      {isError && <ErrorBox />}
      {inProgress ? (
        <Uploading />
      ) : (
        <DropzoneBox>
          <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <>
                <img src={csvIcon} alt="" />
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropeZoneText>
                  <Termslink>Drag and drop files or <Link to="">Click Here</Link> to select a
                    file</Termslink>
                  <H5 text="Files accepted CSV, XLS" />
                  </DropeZoneText>
                </div>
              </>
            )}
          </Dropzone>
        </DropzoneBox>
      )}
    </DropzoneWrapper>
  );
};

export default DropZone;
