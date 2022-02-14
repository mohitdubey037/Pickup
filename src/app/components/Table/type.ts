import { ReactNode } from "react";

export interface TableProps{
    tableTop?:ReactNode;
    data:Array<unknown>;
    showCheckbox?:boolean;
    showPagination?:boolean;
    filterColumns?:Array<number>;
    perPageRows?:number;
    selectedItems?:Array<unknown>;
    getSelectedItems?:(rows:Array<unknown>)=>void;
    paginationData?: (page: number, sortingField?: string, sortingType?: string) => void;
    onRowSelect?:Function;
    onRowChecked?: Function;
    dataChecked?: (data: any) => void
    page?: number
    totalPage?: number
    totalData?: any
    sortTypeProps?: string
}
