import React from "react";
import { Button } from "app/components/Buttons";
import { csvIcon } from "app/assets/Icons";
import { CSVLink } from "react-csv";

import Dropzone,{useDropzone} from "react-dropzone";
import {H5, Para } from "app/components/Typography/Typography";
import { Termslink } from "app/pages/AuthScreens/style";
import { Link } from "app/components/Link";
import { DropeZoneText, DropzoneBox } from "app/components/DropZone/style";
import { Flex } from "app/components/Input/style";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";

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
   <DrawerInnerContent>
        <Para text="Download this file to organize your shipments correctly before upload and we can import it" />
     
        <CSVLink filename={"Bulk-Location-Sample.csv"} data={csvData} target="_blank" style={{textDecoration:'none', margin: '16px 0', display: 'block'}}>
        <Button label="Download Sample" size="medium" />
        </CSVLink>
        
        <DropzoneBox>
          <Dropzone  accept= ".xlsx, .xls, .csv">
            {({ getRootProps, getInputProps }) => (
            <>
                <img src={csvIcon} alt="" />
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <DropeZoneText>
                  <Termslink className="label">Drag and drop files or <Link to="">Click Here</Link> to select a
                    file
                  </Termslink>
                  <H5 text="Files accepted CSV, XLS" className="smalltext" />
                  </DropeZoneText>
                </div>
                <aside>
                {fileList}
                </aside>
                </>
            )}
          </Dropzone>
        </DropzoneBox>
        </DrawerInnerContent>
        <DrawerFooter>
        <Button
          secondary
          label="Cancel"
          size="medium"
        />
        <Button
          label="import"
          size="medium"
        />
      </DrawerFooter>
   
    </>
  );
}

export default FileDrawer;
