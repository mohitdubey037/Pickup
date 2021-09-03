import { Link } from "./type";
import { dashboard,delivery,clock,search,creditCard,reports,myAccount } from "app/assets/Icons";

export const dashboardHelper:Array<Link>=[
    {id:0,label:'Dasboard',link:'/dashboard',logo:dashboard},
    {id:1,label:'Charter Shipment',link:'/charter-shipment',logo:delivery,children:[{id:0,label:'Single Shipment',link:'/single-shipment'},{id:1,label:'Bulk Shipment',link:'/bulk-shipment'}]},
    {id:2,label:'Holding Zone',link:'/holding-zone',logo:clock},
    {id:3,label:'Search Shipments',link:'/search-shipment',logo:search},
    {id:4,label:'Payments',link:'/payments',logo:creditCard,children:[{id:0,label:'Invoices',link:'/invoices'},{id:1,label:'Cards',link:'/cards'}]},
    {id:5,label:'Reports',link:'/reports',logo:reports},
    {id:6,label:'My Account',link:'/my-account',logo:myAccount,children:[{id:0,label:'Company Profile',link:'/company-profile'},{id:1,label:'Personal Profile',link:'/'},{id:2,label:'Child Account',link:'/child-account'},{id:3,label:'Favourite Locations',link:'/favourite-locations'}]},
];

export const ProgressCardData=[
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 },
    { category: "Category1", progressValue: 10, cost: 3231 }
  ]