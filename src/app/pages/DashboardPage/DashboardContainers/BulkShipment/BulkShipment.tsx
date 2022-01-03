import { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";
import {ContainerTitle,FormContainerTitle} from "app/components/Typography/Typography";
import { BulkShipmentWrapper, HelperText } from "./style";
import { Button } from "app/components/Buttons";
import { DropZone } from "app/components/DropZone";
import { uploadFile } from "utils/commonUtils";


const BulkShipment = ({ navigate }: RouteComponentProps) => {
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onBulkUpload = () => {
    setProcessing(true);
    //async function
    setProcessing(false);
  };

  const onError = () => {
    setError(true);
  };

  const onAbort = () => {
    setError(false);
  };

  return (
    <ModuleContainer>
      <ContainerTitle>Bulk order</ContainerTitle>
      <FormContainer elevation={2}>
        <FormContainerTitle>Bulk order</FormContainerTitle>
        <BulkShipmentWrapper>
          {!processing && (
            <>
              <HelperText>
                Download this file to organize your shipments correctly before
                upload and we can import it
              </HelperText>
              <Button label="Download Sample" onClick={() => {}} />
            </>
          )}
          <DropZone
            onDrop={(files) =>
              uploadFile(files, {
                onLoad: onBulkUpload,
                onError: onError,
                onAbort: onAbort,
              })
            }
            isError={error}
            inProgress={processing}
          />
        </BulkShipmentWrapper>
      </FormContainer>
    </ModuleContainer>
  );
};

export default BulkShipment;
