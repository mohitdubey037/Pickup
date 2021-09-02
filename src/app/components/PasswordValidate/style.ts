import styled from "styled-components";

export const CustomPopOver = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 16px 16px;
  width: calc(100% - 10px);
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  margin: 10px;
  gap: 5px;
  display: flex;
  justify-content: space-between;
  .validateLogo {
    position: inherit;
  }
`;

export const GroupItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const HelperText = styled.div`
  color: #a6a6a6;
  font-weight: normal;
  font-size: 16px;
`;
