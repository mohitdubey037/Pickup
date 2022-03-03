import { FC } from "react";
import { H4 } from "app/components/Typography/Typography";
import { CreateChildAccountIcon } from "app/assets/Icons";
import { Button } from "app/components/Buttons";
import { CreateChildAccountBox } from "./style";
import { Box } from "@mui/material";

interface nullStateProps {
  onClick?: () => void;
}

const CreateChildAccount: FC<nullStateProps> = ({ onClick }) => {
  return (
    <CreateChildAccountBox>
      <Box>
        <img src={CreateChildAccountIcon} alt="" />
      </Box>
      <H4 text="Create a Child Account" color="#A6A6A6" />
      <Box>
        <Button
          type="button"
          size="medium"
          label="Create Child Account"
          onClick={onClick}
        />
      </Box>
    </CreateChildAccountBox>
  );
};

export default CreateChildAccount;
