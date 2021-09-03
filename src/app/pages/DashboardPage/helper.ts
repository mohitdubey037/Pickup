import { Link } from "./type";
import { dashboard,delivery,clock,search,creditCard,reports,myAccount } from "app/assets/Icons";

export const dashboardHelper:Array<Link>=[
    {id:0,label:'Dasboard',link:'/dashboard',logo:dashboard},
    {id:1,label:'Charter Shipment',link:'/',logo:delivery,children:[{id:0,label:'Single Shipment',link:'/'},{id:1,label:'Bulk Shipment',link:'/'}]},
    {id:2,label:'Holding Zone',link:'/',logo:clock},
    {id:3,label:'Search Shipments',link:'/',logo:search},
    {id:4,label:'Payments',link:'/',logo:creditCard,children:[{id:0,label:'Invoices',link:'/'},{id:1,label:'Cards',link:'/'}]},
    {id:5,label:'Records',link:'/',logo:reports},
    {id:6,label:'My Account',link:'/',logo:myAccount,children:[{id:0,label:'Company Profile',link:'/'},{id:1,label:'Personal Profile',link:'/'},{id:2,label:'Child Account',link:'/'},{id:3,label:'Favourite Locations',link:'/'}]},
];