import { DropText, DropzoneWrapper, HelperText } from "./style";
import Dropzone from "react-dropzone";
import { csvIcon } from "app/assets/Icons";
import { useCallback } from "react";

const DropZone = () => {

  const onDrop = useCallback((files) => {
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  return (
    <DropzoneWrapper>
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
    </DropzoneWrapper>
  );
};

export default DropZone;
