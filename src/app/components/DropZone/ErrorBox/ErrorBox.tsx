import { Link } from "app/components/Typography/Links";
import { Termslink } from "app/components/Typography/style";
import { DrawerHeading } from "app/components/Typography/Typography";
import { fileDownload } from "utils/commonUtils";
import { Error } from "./style";

interface ErrorProps {
  header?: string;
  fileUrl: string;
}

const ErrorBox = ({ header, fileUrl }: ErrorProps) => {
  const downloadErrorFile = () => fileDownload(fileUrl, "Bulk_Order_Error.xlsx");

  return (
    <Error>
      <DrawerHeading
        title={header || "Error Details"}
        color="#EB5757"
        mb={16}
      />
      <Termslink className="subheading">
        The file you uploaded has some errors,&nbsp;
        {fileUrl ? (
          <>
            <Link to="" onClick={downloadErrorFile}>
              Click Here
            </Link>
            &nbsp;to download the file
          </>
        ) : (
          <>Please check</>
        )}
        &nbsp;and fix the errors
      </Termslink>
    </Error>
  );
};

export default ErrorBox;
