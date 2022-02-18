import { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import {H2 } from "app/components/Typography/Typography";
import { BulkShipmentWrapper } from "./style";
import { Button } from "app/components/Buttons";
import { DropZone } from "app/components/DropZone";
import { uploadFile } from "utils/commonUtils";
import ErrorDetails from "./ErrorDetails";
import { Box } from "@mui/material";

const DownloadSample = ({ navigate }: RouteComponentProps) => {
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit= async() => {
    navigate?.("order-summary")
  }
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
        <div>
       <ModuleContainer>
      <H2 title="Bulk order" />
      <Box>
        <BulkShipmentWrapper>
          {!processing && (
            <>
              <p>
                Download this file to organize your shipments correctly before
                upload and we can import it
              </p>
              <Button label="Download Sample" onClick={()=>{
            handleSubmit();
            
          }} />
            </>
          )}
          <ErrorDetails/>
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
      </Box>
    </ModuleContainer>
        </div>
    )
}

export default DownloadSample
