import styled from "styled-components";
import { Table, TableContainer, TablePagination } from "@mui/material";

export const TableTop = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  background: #ffffff;
`;

export const CustomTableContainer = styled(TableContainer)`
  background: #ffffff;
`;

export const CustomTable = styled(Table)`
  tr {
    border: 1px solid #dcdcdc;
    &:first-child {
      border-top: none !important;
    }
    &:last-child {
      border-top: none !important;
    }
    input[type="checkbox"] {
      padding: 8px 0;
    }
  }
  th,
  td {
    color: #828282;
    font-size: 14px;
    line-height: 150%;
    border-bottom: none;
    padding: 8px 12px;
    border: 1px solid #dcdcdc;
    font-family: "Roboto";
    @media (max-width: 768px) {
      padding: 8px;
    }
    img {
      float: right;
      cursor: pointer;
    }
  }
  th {
    img{
      margin-left:12px;
    }
  }
  td {
    color: #515151;
    border: none;
  }
  .MuiTableCell-paddingCheckbox {
    width: 24px;
  }
  a {
    cursor: pointer;
    color: #1b8af0;
    text-decoration: underline;
  }
  .MuiCheckbox-root {
    margin-right: 0px;
  }
  .ascending {
    transform: scaleY(-1);
  }
`;

export const CustomPagination = styled(TablePagination)`
  display: flex !important;
  justify-content: flex-end;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #dcdcdc;
  border-top: none;
  background: #ffffff;
  padding:0 !important;
  .MuiTablePagination-displayedRows {
    position: absolute;
    right: 30px;
    width: 80px;
    text-align: center;
  }
  .MuiTablePagination-actions {
    margin-left: 0px !important;
    width: 140px;
  }
  .MuiButtonBase-root:last-child {
    position: absolute;
    right: 0;
  }
  .MuiTablePagination-toolbar {
    margin-right: 20px;
  }
  .MuiIconButton-root {
    padding: 7px;
  }
`;
