import Table from "../Table/Table";

export default {title:'Table'};

export const byDefault = ()=> (
    <Table 
        tableTop={<div style={{display:'flex',alignItems:'center',padding:'0 15px',minHeight:'inherit',color:'#F99746'}}>10 Accounts</div>}
        data={[
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Randhir'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Amit'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Robin'},
        ]}
        showCheckbox
        showPagination
        filterColumns={[1,2,3,4]}
        perPageRows={5}
        selectedItems={[
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
            {'Company Name':<div style={{textDecoration:'underline',color:'#2D9CDB'}}>Torinit</div>,'Business Number':212421,'Invitation Date':'06/06/2021','Status':'Pending','Admin Name':'Chinar'},
        ]}
        getSelectedItems={(rows)=>console.log(rows,'rows')}
    />
)