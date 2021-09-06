import { CustomProgressbar } from "./style";

interface ProgressbarProps{
    value:number;
}

const Progressbar = ({value}:ProgressbarProps) => {
  return (
    <CustomProgressbar
      color={"primary"}
      value={value}
      variant={"determinate"}
    ></CustomProgressbar>
  );
};

export default Progressbar;
