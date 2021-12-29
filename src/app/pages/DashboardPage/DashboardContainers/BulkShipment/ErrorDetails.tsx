import { Box } from '@mui/system'
import React from 'react'

function ErrorDetails() {
    return (
        <Box style={{ backgroundColor: "#FFE5E5",borderRadius:10}}>
      <div >
        <div style={{paddingLeft:"100",color:"#EB5757",fontWeight:700,paddingTop:30}}>
          ERROR DETAILS
        </div>
        <br />
      </div>
      <div style={{paddingLeft:30,fontWeight:400,paddingBottom:50}}>
        The file you uploaded has errors, <a style={{cursor:'pointer'}}>Click Here</a> to download the file and fix the errors
      </div>
    </Box>
    )
}

export default ErrorDetails
