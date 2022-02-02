import { Box } from "@material-ui/core";
import { Input } from "app/components/Input";
import styled from "styled-components";
interface Props {
  required?: boolean | undefined;
}

export const CustomInput = styled(Input)<Props>`
  background-color: #c94c43;
  ${(props: Props) =>
    props.required
      ? `
     &::after {
    content: "*";
    color: #c94c43;
    margin-left: 5px;
    
  }
  `
      : null};
`;

export const FlexGrid = styled(Box)`
  display: flex;
  align-items: center;
  width: calc(100% - 110px) !important;
  justify-content: space-between;
  @media (max-width:1023px){
    width:100% !important;
    margin:24px 0 12px 0;
    }
  .value {
    margin: 5px 0 16px;
    font-family: "Roboto-Bold";
  }
`;

