import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import { AddImgBox } from "./style";
import { H4 } from "../Typography/Typography";
import { Box } from "@mui/material";

const Input = styled('input')({
    display: 'none',
});

function AddImage({ text, changeHandler }: { text: string, changeHandler }) {
  return (
    <Box onChange={changeHandler}>
        <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" type="file" />
            <AddImgBox>
                <AddIcon className="icon" />
                <H4 text={text} color="#1B8AF0"  />
            </AddImgBox>
        </label>
    </Box>
  );
}

export default AddImage;
