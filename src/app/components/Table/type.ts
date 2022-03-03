import { ReactNode } from "react";

export interface TableProps {
  loading?: boolean;
  tableTop?: ReactNode;
  coloumns: Array<{
    id: string;
    label: string;
    isSort?: boolean;
  }>;
  data: Array<unknown>;
  showCheckbox?: boolean;
  onRowSelect?: (rows: Array<unknown>) => void;
  showPagination?: boolean;
  pagination?: any;
  onPageChange?: (page: number) => void;
  sorting?: {
    field: string;
    type: string;
  };
  onSortChange?: (field, type) => void;
}
