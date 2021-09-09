import { BulkShipmentWrapper, HeaderText,HelperText } from "./style";
import { DropZone } from "app/components/DropZone";
import { Button } from "app/components/Buttons";

const FileUploading = () => {
  return (
    <BulkShipmentWrapper>
      <HeaderText>Bulk Shipment </HeaderText>
      <HelperText>Download this file to organize your shipments correctly before upload and we can import it</HelperText>
      <Button label="Download Sample" onClick={() => {}} />
      <DropZone />
    </BulkShipmentWrapper>
  );
};

export default FileUploading;
