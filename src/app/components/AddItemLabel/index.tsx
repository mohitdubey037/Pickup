import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Flex } from "../Input/style";

function AddItemLabel({ text }: { text: string }) {
  return (
    <Flex style={{ cursor: "pointer" }}>
      <AddIcon style={{ color: "#1B8AF0" }} />
      <Typography style={{ color: "#1B8AF0" ,marginLeft:5}}>{text}</Typography>
    </Flex>
  );
}

export default AddItemLabel;
