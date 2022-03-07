import { useState } from "react";
import { navigate } from "@reach/router";

import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3, Para } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { DropZone } from "app/components/DropZone";
import { Flex, FullCard } from "app/components/CommonCss/CommonCss";

const BulkShipment = ({ path }) => {
  const [files, setFiles] = useState<any>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleImportOrders = async () => {
    setProcessing(true);
    const formData = new FormData();
    formData.append("files", files[0], files[0].name);
    setTimeout(() => {
      const res = { success: true };
      if (res?.success) {
        navigate("/dashboard/charter-shipment/bulk-summary");
      } else {
        setFiles([]);
        setError(true);
      }
      setProcessing(false);
    }, 5000);
  };

  return (
    <ModuleContainer>
      <H2 title="Bulk order" />

      <FullCard>
        <H3 text="Bulk Order" />

        {!processing && (
          <>
            <Para
              text="Download this file to organize your orders correctly before upload and we can import it"
              color="#515151"
              mt={24}
              mb={12}
            />
            <Button label="Download Sample" onClick={() => {}} size="medium" />
          </>
        )}

        <DropZone
          files={files}
          setFiles={(val) => {
            setFiles(val);
            setError(false);
          }}
          isError={error}
          inProgress={processing}
        />

        {!processing && (
          <Flex justifyContent="right">
            <Button
              label="Import"
              onClick={handleImportOrders}
              size="medium"
              disabled={files.length === 0}
            />
          </Flex>
        )}
      </FullCard>
    </ModuleContainer>
  );
};

export default BulkShipment;
