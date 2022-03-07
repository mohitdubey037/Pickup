import { CustomProgressbar } from "./style";

interface ProgressbarProps {
  variant?: "determinate" | "indeterminate" | "buffer" | "query";
  value?: number;
  smallProgreebar?: boolean;
}

const Progressbar = ({
  value,
  smallProgreebar,
  variant = "determinate",
}: ProgressbarProps) => {
  return (
    <CustomProgressbar
      color="primary"
      value={value}
      variant={variant}
      smallProgreebar={smallProgreebar}
    />
  );
};

export default Progressbar;
