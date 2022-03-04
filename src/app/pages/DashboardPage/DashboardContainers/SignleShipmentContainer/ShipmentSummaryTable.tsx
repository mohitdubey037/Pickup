import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

interface ShipmentSummaryItemType {
    Shippingid: string;
    Shedule: string;
    Itemcount: number;
    shippingcost:string;

  }

  interface ShipmentSummaryTableProps{
      shipmentItems:Array<ShipmentSummaryItemType>
  }

export default function ShipmentSummaryTable(props:ShipmentSummaryTableProps) {
  const {shipmentItems}=props;  
  const classes = useStyles();

    return (
        <>
            <Typography>Shipment Summary</Typography>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell>Shippingid</TableCell>
            <TableCell align="right">Shedule</TableCell>
            <TableCell align="right">Itemcount</TableCell>
            <TableCell align="right">shippingcost</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {shipmentItems.map((row) => (
            <TableRow key={row.Shippingid}>
              <TableCell component="th" scope="row">
                {row.Shippingid}
              </TableCell>
              <TableCell align="right">{row.Shippingid}</TableCell>
              <TableCell align="right">{row.Shedule}</TableCell>
              <TableCell align="right">{row.Itemcount}</TableCell>
              <TableCell align="right">{row.shippingcost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            

        </>
    );
}
