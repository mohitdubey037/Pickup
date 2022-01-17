import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import { Flex } from "../Input/style";
import { Typography } from '@material-ui/core';

const Input = styled('input')({
    display: 'none',
});

function AddImage({ text, changeHandler }: { text: string, changeHandler }) {
  return (
    <Flex direction='row' onChange={changeHandler}>
        <label htmlFor="contained-button-file" style={{ cursor: "pointer" }}>
            <Input accept="image/*" id="contained-button-file" type="file" />
            <Flex direction='row' top={20}>
                <AddIcon style={{ color: "#1B8AF0" }} />
                <Typography style={{ color: "#1B8AF0" ,marginLeft:5}}>{text}</Typography>
            </Flex>
        </label>
    </Flex>
  );
}

export default AddImage;
