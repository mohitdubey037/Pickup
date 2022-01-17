import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import { csvIcon } from "app/assets/Icons";
import { DropText, DropzoneBox, Wrapper, HelperText } from "./style";

import Dropzone from "react-dropzone";
function FileDrawer(onDrop) {
  return (
    <>
      <Wrapper style={{ width: 530 }}>
        <Typography style={{ paddingBottom: 20 }}>
          Download this file to organize your shipments correctly before upload
          and we can import it
        </Typography>
        <div style={{ width: 200, paddingBottom: 40 }}>
          <Button label="Download Sample" />
        </div>
        <DropzoneBox>
          <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <img src={csvIcon} alt="" />
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropText>
                    Drag and drop files or{" "}
                    <a style={{ cursor: "pointer" }}>Click Here</a> to select a
                    file
                  </DropText>
                </div>
                <HelperText>Files accepted CSV, XLS</HelperText>
              </section>
            )}
          </Dropzone>
        </DropzoneBox>
      </Wrapper>
    </>
  );
}

export default FileDrawer;
