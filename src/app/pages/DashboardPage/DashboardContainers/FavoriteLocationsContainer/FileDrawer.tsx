import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import { csvIcon } from "app/assets/Icons";
import { DropText, DropzoneBox, Wrapper, HelperText } from "./style";
import { CSVLink } from "react-csv";

import Dropzone,{useDropzone} from "react-dropzone";
const csvData = [
  ["Favourites","IndividualOrCompany", "LocationType", "CompanyName","FirstName","LastName","AddressLine1","AddressLine2","City","PostalCode","ProvinceOrState","Country","ContactNumber","AlternateNumber","EmailAddress","AdditionalNotes","Latitude","Longitude"],

];
function FileDrawer(props) {
  const [files, setFiles] = React.useState<any>([]);
  const onDrop = React.useCallback(acceptedFiles => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  console.log(files,"file uploaded")
  const fileList = files.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
    
  ));
  return (
    <>
      <Wrapper style={{ width: 530 }}>
        <Typography style={{ paddingBottom: 20 }}>
          Download this file to organize your shipments correctly before upload
          and we can import it
        </Typography>
        <div style={{ width: 200, paddingBottom: 40 }}>
        <CSVLink filename={"Bulk-Location-Sample.csv"} data={csvData} target="_blank" >
          <Button label="Download Sample" />
          </CSVLink>
        </div>
        <DropzoneBox>
          <Dropzone  accept= ".xlsx, .xls, .csv">
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
                <aside>
                {fileList}
                </aside>
              </section>
            )}
          </Dropzone>
        </DropzoneBox>
      </Wrapper>
    </>
  );
}

export default FileDrawer;
