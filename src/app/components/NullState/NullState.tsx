import { FC } from "react";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { NullStateBox } from "./style";

interface nullStateProps {
  className?: string;
  message?: string;
}

const NullState: FC<nullStateProps> = ({
  className,
  message = "No Records Found",
}) => {
  return (
    <NullStateBox className={className}>
      <SentimentDissatisfiedIcon />
      <p className="labeltext"> {message} </p>
    </NullStateBox>
  );
};

export default NullState;
