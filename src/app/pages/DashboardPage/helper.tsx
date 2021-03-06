import { Link } from "./type";
import {
  dashboard,
  delivery,
  search,
  creditCard,
  // reports,
  myAccount,
  clock,
} from "app/assets/Icons";

export const dashboardHelper: Array<Link> = [
  { id: 0, label: "Dashboard", link: "/dashboard", logo: dashboard },
  {
    id: 1,
    label: "Charter Order",
    link: "/dashboard/charter-shipment",
    logo: delivery,
    children: [
      {
        id: 0,
        label: "Create Order",
        link: "/dashboard/charter-shipment/single-shipment",
      },
      {
        id: 1,
        label: "Bulk Order",
        link: "/dashboard/charter-shipment/bulk-shipment",
      },
    ],
  },
  {
    id: 2,
    label: "Holding Zone",
    link: "/dashboard/holding-zone",
    logo: clock,
  },
  {
    id: 3,
    label: "Search Orders",
    link: "/dashboard/search-shipment",
    logo: search,
  },
  {
    id: 4,
    label: "Payments",
    link: "/dashboard/payments",
    logo: creditCard,
    children: [
      {
        id: 0,
        label: "Invoices",
        link: "/dashboard/payments/invoices",
        access: [1, 2, 3, 4],
      },
      { id: 1, label: "Cards", link: "/dashboard/payments/cards", access: [4] },
    ],
  },
  // { id: 5, label: "Reports", link: "/dashboard/reports", logo: reports },
  {
    id: 6,
    label: "My Account",
    link: "/dashboard/my-account",
    logo: myAccount,
    children: [
      {
        id: 0,
        label: "Company Profile",
        link: "/dashboard/my-account/company-profile",
        access: [4],
        hideChild: true,
      },
      {
        id: 1,
        label: "Personal Profile",
        link: "/dashboard/my-account/personal-profile",
        access: [1, 2, 3, 4],
      },
      {
        id: 2,
        label: "Child Accounts",
        link: "/dashboard/my-account/child-account-list",
        access: [4],
        hideChild: true,
      },
      {
        id: 3,
        label: "Favourite Locations",
        link: "/dashboard/my-account/favourite-locations",
      },
      // {
      //   id: 4,
      //   label: "Help",
      //   link: "/dashboard/my-account/help",
      // }
    ],
  },
  {
    id: 7,
    link: "",
    label: "Log Out",
    isLogOut: true,
  },
];
