import { trash } from "app/assets/Icons";

  const getActionItem = () => {
    return (
        <>
        <img src={trash} alt="delete" style={{float:'left'}} />
        </>
    );
  };

  const getItemCount = (
      openOrderDrawer: (type: any) => void,
      Count: any
      ) => {
    return (
        <>
        <a onClick={() => openOrderDrawer('')}>
        {Count}
        </a>
        </>
    );
  };


export const OnHoldTable = (openOrderDrawer : any) => [
    {'Order Id':'TOR-0607-123','Category':'Electronics','Item Count':getItemCount(openOrderDrawer, '2'),'Schedule':'09:00 - 06/06/21','Destination City':'Toronto, Ontario','Action':getActionItem()},
    {'Order Id':'TOR-0607-123','Category':'Electronics','Item Count':getItemCount(openOrderDrawer, '5'),'Schedule':'09:00 - 06/06/21','Destination City':'Toronto, Ontario','Action':getActionItem()},
    {'Order Id':'TOR-0607-123','Category':'Electronics','Item Count':getItemCount(openOrderDrawer, '6'),'Schedule':'09:00 - 06/06/21','Destination City':'Toronto, Ontario','Action':getActionItem()},
    {'Order Id':'TOR-0607-123','Category':'Electronics','Item Count':getItemCount(openOrderDrawer, '8'),'Schedule':'09:00 - 06/06/21','Destination City':'Toronto, Ontario','Action':getActionItem()},
    
]


export const BulkOrderColoumns = [
    {
        id: "OrderId",
        label: "Order Id",
        isSort: true,
    },
    {
        id: "Category",
        label: "Category",
        isSort: false,
    },
    {
        id: "ItemCount",
        label: "Item Count",
        isSort: true,
    },
    {
        id: "Schedule",
        label: "Schedule",
        isSort: false,
    },
    {
        id: "DestinationCity",
        label: "Destination City",
        isSort: false,
    },

    {
        id: "Action",
        label: "Action",
        isSort: false,
    },
];
