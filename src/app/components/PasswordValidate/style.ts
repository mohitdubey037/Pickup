import styled from "styled-components";

export const CustomPopOver = styled.div`
  position: absolute;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 16px 16px;
  top: 110%;
  z-index: 2;
  right: 0;
  left: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  .validateLogo {
    position: inherit;
  }
  .helpertext{
    color: #a6a6a6;
    margin:0;
  }
`;

export const GroupItem = styled.div`
  display: flex;
  gap: 10px;
`;
