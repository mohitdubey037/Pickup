import styled from "styled-components";
import { Table } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";

export const TableTop = styled.div`
  min-height: 58px;
  border: 1px solid #dcdcdc;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  width: 100%;
  display: flex;
  background: #ffffff;
`;

export const CustomTableContainer = styled(TableContainer)`
`;

export const CustomTable = styled(Table)`
  tr {
    border: 1px solid #dcdcdc;
    &:first-child{
      border-top: none !important;
    }
    &:last-child{
      border-top: none !important;
    }
    input[type="checkbox"] {
      padding: 8px 0;
    }
  }
  th {
    color: #828282;
    font-size: 14px;
    line-height: 150%;
    border-bottom:none;
    padding: 10px 16px;
    border: 1px solid #dcdcdc;
    font-family: "Roboto";
    img {
      float: right;
      cursor: pointer;
    }
  }
  td {
    font-size: 14px;
    line-height: 150%;
    color: #515151;
    padding: 8px 16px;
    font-family: "Roboto";
  }
`;

export const CustomPagination = styled(TablePagination)`
  width: 100%;
  display: flex !important;
  justify-content: flex-end;
  min-height: 58px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #dcdcdc;
  border-top: none;
  background: #ffffff;
  .MuiTablePagination-input {
    display: none;
  }
  input {
    width: 66px;
    height: 32px;
    margin-right: 10px;
  }
`;
