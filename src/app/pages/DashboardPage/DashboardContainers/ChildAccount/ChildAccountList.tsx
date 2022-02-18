import React,{useEffect, useState} from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import { OnHoldTableTop } from "../OnHoldShipment/Style";
import { useNavigate } from "@reach/router";
import TableSkeleton from "app/components/Table/TableSkeleton";
import NullState from "app/components/NullState/NullState";

import { childDataTable } from "./helper";

import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";


export default function ChildAccountList({ path: string }) {

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(0);
  const [sortType, setSortType] = useState<string | undefined>("desc");
  const [childData, setChildData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
    useEffect(() => {
          dispatch(actions.getCards());
  }, []);

  const addChild = () => {
    navigate("/dashboard/my-account/child-account");
  };

  const childDetails = () => {
    navigate("/dashboard/my-account/child-account-details");
  };

  useEffect(() => {
    getChildData()
  }, []);

  // const openInvoiceDrawer = (id: any, type: any) => {
  //   setDrawerType(type);
  //   setDrawerOpen(true);
  // };

  const getChildData = async () => {
    setLoading(true);
    const res = (await getChildAccountData()) as any;
    console.log(res);
    if (!res?.error) {
      const InvoiceList = res.response.data.data;
      setChildData(InvoiceList);
      setPage(res.response.data.data.pageMetaData.page - 1);
      setTotalPages(res.response.data.data.pageMetaData.totalPages);
      setTotalData(res.response.data.data.pageMetaData.total);
    } else if (res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
    setLoading(false);
  }

  const getSearchPaginatedData = async (page, sortingField, sortingType) => {
    setSortType(sortingType);
    let res;
    if (page === 0) {
      res = (await getChildAccountData('',0, 10, sortingField, sortingType)) as any;
    }
    else {
      res = (await getChildAccountData('',page+1, 10, sortingField, sortingType)) as any;
    }
    if (!res?.error) {
      const InvoiceList = res.response.data.data;
      setPage(page);
      setChildData(InvoiceList);
    } else if (!res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
  };

  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p> Accounts</p>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Child Accounts" />
        {/* <Button size="medium" label="child Details" onClick={childDetails} /> */}
        <Button size="medium" label="Create New" onClick={addChild} />
      </Flex>

      {loading ? (
        <TableSkeleton />
      ) : childData?.list?.length > 0 ? (
        <Table
        data={childDataTable(childData.list)}
        tableTop={tableTop()}
        sortTypeProps = {sortType}
        paginationData={(page, sortingField, sortingType) => getSearchPaginatedData(page, sortingField, sortingType)}
        // showCheckbox 
        showPagination
        perPageRows={10}
        page={page}
        totalData={totalData}
        totalPage={totalPages}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
      ) : (
        <NullState message="No Records Found" />
      )}
    </ModuleContainer>
  );
}
