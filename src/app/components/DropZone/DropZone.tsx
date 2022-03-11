import Dropzone from "react-dropzone";

import { DropzoneWrapper, DropzoneBox, DropeZoneText } from "./style";
import { csvIcon } from "app/assets/Icons";
import { ErrorBox } from "./ErrorBox";
import { H5 } from "../Typography/Typography";
import { Link } from "../Typography/Links";
import UploadingFile from "./UploadingFile";
import { Termslink } from "../Typography/style";
interface DropZoneProps {
  files: any;
  setFiles: (files: any) => void;
  isError?: boolean;
  inProgress?: boolean;
}

const DropZone = ({ files, setFiles, isError, inProgress }: DropZoneProps) => {
  const onDrop = (newFiles) => {
    setFiles([...newFiles]);
  };

  return (
    <>
      {isError && <ErrorBox />}

      <DropzoneWrapper>
        {inProgress ? (
          <UploadingFile />
        ) : (
          <Dropzone accept=".xlsx,.xls,.csv" maxFiles={1} onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropzoneBox>
                    <img src={csvIcon} alt="CSVi" />
                    <DropeZoneText>
                      <Termslink className="label">
                        Drag and drop files or <Link to="">Click Here</Link> to
                        select a file
                      </Termslink>
                      <H5
                        text="Files accepted CSV, XLS"
                        className="smalltext"
                      />
                    </DropeZoneText>
                  </DropzoneBox>
                </div>
                <aside>
                  {files.map((file) => (
                    <li key={file.path}>
                      {file.path} - {file.size} bytes
                    </li>
                  ))}
                </aside>
              </>
            )}
          </Dropzone>
        )}
      </DropzoneWrapper>
    </>
  );
};

export default DropZone;
