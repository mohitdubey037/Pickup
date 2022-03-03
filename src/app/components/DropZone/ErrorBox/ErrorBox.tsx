import { Link } from "app/components/Typography/Links";
import { Termslink } from "app/components/Typography/style";
import { DrawerHeading } from "app/components/Typography/Typography";
import { Error } from "./style";

interface ErrorProps {
  header?: string;
}

const ErrorBox = ({ header }: ErrorProps) => {
  return (
    <Error>
      <DrawerHeading
        title={header || "Error Details"}
        color="#EB5757"
        mb={16}
      />
      <Termslink className="subheading">
        The file you uploaded has errors, <Link to="">Click Here</Link> to
        download the file and fix the errors
      </Termslink>
    </Error>
  );
};

export default ErrorBox;
