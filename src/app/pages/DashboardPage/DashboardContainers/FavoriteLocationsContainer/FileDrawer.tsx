import { useState } from "react";
import { CSVLink } from "react-csv";
import Dropzone from "react-dropzone";

import { Button } from "app/components/Buttons";
import { csvIcon } from "app/assets/Icons";
import { H5, Para } from "app/components/Typography/Typography";
import { DropeZoneText, DropzoneBox } from "app/components/DropZone/style";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { Link } from "app/components/Typography/Links";
import { Termslink } from "app/components/Typography/style";
import { addLocationsFromCSV } from "services/LocationServices";

interface FileDrawerProps {
  setDrawerOpen: (value: boolean) => void;
  onAddSuccess: () => void;
}

const csvData = [
  [
    "Favourites",
    "IndividualOrCompany",
    "LocationType",
    "CompanyName",
    "FirstName",
    "LastName",
    "AddressLine1",
    "AddressLine2",
    "City",
    "PostalCode",
    "ProvinceOrState",
    "Country",
    "ContactNumber",
    "AlternateNumber",
    "EmailAddress",
    "AdditionalNotes",
    "Latitude",
    "Longitude",
  ],
];

const FileDrawer = (props: FileDrawerProps) => {
  const { setDrawerOpen, onAddSuccess } = props;

  const [files, setFiles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = (newFiles) => setFiles([...newFiles]);

  const handleImportLocation = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("files", files[0], files[0].name);
    const res: any = await addLocationsFromCSV(formData);
    if (res?.success) {
      onAddSuccess();
      setDrawerOpen(false);
    }
    setLoading(false);
  };

  return (
    <>
      <DrawerInnerContent>
        <Para text="Download this file to organize your locations correctly before upload and we can import it" />

        <CSVLink
          filename="Bulk-Location-Sample.csv"
          data={csvData}
          target="_blank"
          style={{ textDecoration: "none", margin: "16px 0", display: "block" }}
        >
          <Button label="Download Sample" size="medium" />
        </CSVLink>

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
                    <H5 text="Files accepted CSV, XLS" className="smalltext" />
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
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          label="Cancel"
          onClick={() => setDrawerOpen(false)}
          size="medium"
          secondary
        />
        <Button
          label="Import"
          onClick={handleImportLocation}
          size="medium"
          showLoader={loading}
          disabled={files.length === 0}
        />
      </DrawerFooter>
    </>
  );
};

export default FileDrawer;
