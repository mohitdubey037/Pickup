import styled from "styled-components";

export const SearchFieldsWrapper = styled.div`
  margin-top: 54px;
  margin-bottom: 28px;
  display: flex;
  gap: 8px;
  align-items: flex-end;

  img {
    align-self: center;
    cursor: pointer;
  }
  input {
    width: 152px;
  }
  button {
    height: 42px;
  }
`;

export const SearchTableTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 12px;

  justify-content: space-between;
  img {
    cursor: pointer;
  }
  p {
    color: #f99746;
  }
  button {
    width: 114.19px;
    margin-right: 16px;
    height: 32px;
  }
`;

export const FilterWrapper = styled.div`
  border-bottom: 0.1px solid #dddddd;
  margin-bottom: 20px;
  padding-left: 10px;

  &.bordernone {
    border-bottom: none;
  }

  .heading {
    margin-bottom: 20px;
  }
`;
