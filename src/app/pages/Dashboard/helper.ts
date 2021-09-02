import { Link } from "./type";

export const dashboardHelper:Link[]=[
    {label:'Dasboard',link:'/dashboard',},
    {label:'Charter Shipment',link:'/',children:[{label:'Single Shipment',link:'/'},{label:'Bulk Shipment',link:'/'}]},
    {label:'Holding Zone',link:'/'},
    {label:'Search Shipments',link:'/'},
    {label:'Payments',link:'/',children:[{label:'Invoices',link:'/'},{label:'Cards',link:'/'}]},
    {label:'Records',link:'/'},
    {label:'My Account',link:'/',children:[{label:'Company Profile',link:'/'},{label:'Personal Profile',link:'/'},{label:'Child Account',link:'/'},{label:'Favourite Locations',link:'/'}]},
];