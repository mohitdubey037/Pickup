import styled from "styled-components";

export const Suggestions = styled.ul`
  z-index: 999;
  position: absolute;
  top: 56px;
  left: 0.5%;
  background: #fff;
  outline: 1px solid #a6a6a6;
  border-radius: 3px;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  width: 99%;

  li {
    padding: 8px;
    cursor: pointer;
    font-size: 14px;
    font-family: "Roboto" !important;
    color: #222;
  }

  li:not(:last-of-type) {
    border-bottom: 1px solid #bfbfbf;
  }
`;
