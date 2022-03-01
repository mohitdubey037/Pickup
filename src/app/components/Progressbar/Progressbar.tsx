import { CustomProgressbar } from "./style";

interface ProgressbarProps{
    value:number;
    smallProgreebar?:boolean;
}

const Progressbar = ({value, smallProgreebar}:ProgressbarProps) => {
  return (
    <CustomProgressbar
      color={"primary"}
      value={value}
      variant={"determinate"}
      smallProgreebar={smallProgreebar}
    ></CustomProgressbar>
  );
};

export default Progressbar;
