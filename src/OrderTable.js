import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';

import {commerce} from './lib/commerce'
import axios from 'axios'


const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'created', headerName: 'date', width: 300,
    valueGetter: (params) =>{
      let myDate = new Date(params.row.created*1000)
      console.log(myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds())
      return myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds()
        
    },
  },
  { field: 'orderValue', headerName: 'total', width: 300,
    valueGetter: (params) =>{return params.row.order_value.formatted_with_code},
  },
  {
    field: "操作",
    width: 300,
    align: "center",
    renderCell: () => <Button component={Link} variant="outlined" type="button" to="/order-detail/ord_NXELwjdbpr53A4" onClick={()=>{console.log("order table button clieckd")}}>詳細を見る</Button>
  },
];


// rows should be array
export default function DataTable({rows}) {

  if(!rows) return 'Currently No Order History found.';

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
