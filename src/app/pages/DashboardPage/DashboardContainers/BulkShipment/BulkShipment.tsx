import { useState } from "react";
import { navigate } from "@reach/router";
import ModuleContainer from "app/components/ModuleContainer";
import {H2, H3, Para} from "app/components/Typography/Typography";
import { BulkShipmentWrapper } from "./style";
import { Button } from "app/components/Buttons";
import { DropZone } from "app/components/DropZone";
import { uploadFile } from "utils/commonUtils";
import { useSelector } from "react-redux";

const BulkShipment = ({path:string}) => {
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onBulkUpload = () => {
    setProcessing(true);
    //async function
    // setProcessing(false);
  };

  const onError = () => {
    setError(true);
  };

  const onAbort = () => {
    setError(false);
  };

  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if([1,2,3,4].indexOf(authUser?.roleId) === -1) {
    navigate(' /non-authorized-page')
  }
  return (
    <ModuleContainer>
      <H2 title="Bulk order" />
        <BulkShipmentWrapper>
          {!processing && (
            <>
              <H3 text="Bulk Order" />
              <Para text="Download this file to organize your shipments correctly before upload and we can import it"  className="label" />
              <Button label="Download Sample" onClick={() => {}} size="medium" />
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
          
          <Button
                secondary
                label="table"
                onClick={() => {
                navigate?.("bulk-summary");
                }}
                size="medium"
                />
        </BulkShipmentWrapper>
    </ModuleContainer>
  );
};

export default BulkShipment;
