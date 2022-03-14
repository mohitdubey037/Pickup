import Dropzone from "react-dropzone";

import { csvIcon } from "app/assets/Icons";
import { DropzoneWrapper, DropzoneBox, DropeZoneText } from "./style";
import { ErrorBox } from "./ErrorBox";
import UploadingFile from "./UploadingFile";
import { H5 } from "../Typography/Typography";
import { Link } from "../Typography/Links";
import { Termslink } from "../Typography/style";

interface DropZoneProps {
  files: any;
  setFiles: (files: any) => void;
  error?: any;
  inProgress?: boolean;
}

const DropZone = ({ files, setFiles, error, inProgress }: DropZoneProps) => {
  const onDrop = (newFiles) => {
    setFiles([...newFiles]);
  };

  return (
    <>
      {error.show && <ErrorBox fileUrl={error.url} />}

      <DropzoneWrapper>
        {inProgress ? (
          <UploadingFile />
        ) : (
          <Dropzone accept=".xlsx" maxFiles={1} onDrop={onDrop}>
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
                      <H5 text="Files accepted XLSX" className="smalltext" />
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
