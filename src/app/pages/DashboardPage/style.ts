import styled from "styled-components";

export const DasboardWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const LeftDashboardWrapper = styled.div`
  width: 24%;
  background: #fece3e;
  height: inherit;
  padding-top:100px;
  z-index: 1;
  position: absolute;
  text-align: left;
  color: #343434;
`;

export const RightDashboardWrapper = styled.div`
  position: absolute;
  height: inherit;
  width: 100%;
  background: #fafafa;
  border-radius: 40px 0px 0px 0px;
  left: 20%;
  z-index: 5;
`;

export const LeftContent = styled.div``;

export const CustomListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 0;
  padding-left:20px;
  .logoIcon {
    width: 18px;
    height: 18px;
  }
  &.selected{
    background:#FFDB6F;
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
  margin:15px 0;
  margin-left: 38px;
`;

export const Row = styled.div`
  display: flex;
`;
