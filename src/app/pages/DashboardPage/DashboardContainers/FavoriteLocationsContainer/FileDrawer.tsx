import { useState } from "react";
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

  const downloadSample = () => {
    let link: any = document.createElement("a");
    link.href =
      "https://pickups-staging.s3.ca-central-1.amazonaws.com/order/8a4c82270f7441aaae1c69033771b49a.csv";
    link.download = `Favourite-Locations-Sample.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <DrawerInnerContent>
        <Para text="Download this file to organize your locations correctly before upload and we can import it" />

        <Button
          label="Download Sample"
          onClick={downloadSample}
          size="medium"
          style={{ margin: "16px 0", display: "block" }}
        />

        <Dropzone accept=".csv" maxFiles={1} onDrop={onDrop}>
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
                    <H5 text="Files accepted CSV" className="smalltext" />
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
