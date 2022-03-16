import { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";

import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3, Para } from "app/components/Typography/Typography";
import { Button } from "app/components/Buttons";
import { DropZone } from "app/components/DropZone";
import { Flex, FullCard } from "app/components/CommonCss/CommonCss";
import { addbulkOrdersFromCSV } from "services/SingleShipmentServices";
import { actions } from "store/reducers/SingleShipmentReducer";
import { fileDownload } from "utils/commonUtils";

const BulkShipment = ({ path }) => {
  const dispatch = useDispatch();

  const [files, setFiles] = useState<any>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<any>({ show: false, url: null });

  useEffect(() => {
    dispatch(actions.resetSingleShipment());
  }, []);

  const handleImportOrders = async () => {
    setProcessing(true);
    const formData = new FormData();
    formData.append("document", files[0], files[0].name);
    const res: any = await addbulkOrdersFromCSV(formData);
    if (res?.success) {
      navigate("/dashboard/charter-shipment/bulk-summary", {
        state: { data: res.response.data.data },
      });
    } else {
      setFiles([]);
      setError({
        show: true,
        url: res.response,
      });
    }
    setProcessing(false);
  };

  const downloadSample = () =>
    fileDownload(
      "https://pickups-staging.s3.ca-central-1.amazonaws.com/order/d41fba5fe411456a9ea7f36cd3b21783.xlsx",
      `Bulk-Order-Sample.csv`
    );

  return (
    <ModuleContainer>
      <H2 title="Bulk Order" />

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
            <Button
              label="Download Sample"
              onClick={downloadSample}
              size="medium"
            />
          </>
        )}

        <DropZone
          files={files}
          setFiles={(val) => {
            setFiles(val);
            setError({
              show: false,
              url: null,
            });
          }}
          error={error}
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
