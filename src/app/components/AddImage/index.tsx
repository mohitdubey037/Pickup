import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import { Flex } from "../Input/style";
import { Box, Typography } from '@material-ui/core';
import { AddImgBox } from "./style";
import { H4 } from "../Typography/Typography";

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
                <H4 text={text} className="label"  />
            </AddImgBox>
        </label>
    </Box>
  );
}

export default AddImage;
