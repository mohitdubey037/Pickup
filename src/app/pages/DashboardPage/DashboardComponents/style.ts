import styled from 'styled-components';

export const LeftDashboardWrapper = styled.div`
  width: 24%;
  background: #fece3e;
  z-index: 1;
  text-align: left;
  color: #343434;
  height: 100%;
`;

export const RightDashboardWrapper = styled.div`
  flex: 1;
  background: #fafafa;
  border-radius: 40px 0px 0px 0px;
`;

export const LeftContent = styled.div``;

export const CustomListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 0;
  padding-left: 20px;
  .logoIcon {
    width: 18px;
    height: 18px;
  }
  &.selected {
    background: #ffdb6f;
  }
`;

export const ParentLink = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-left: 20px;
`;

export const ChildLink = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin: 15px 0;
  margin-left: 38px;
`;

export const Row = styled.div`
  display: flex;
`;
