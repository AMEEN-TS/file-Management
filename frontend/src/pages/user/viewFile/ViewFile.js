// import * as React from 'react';
import React,{useEffect, useState} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../../../components/navbar/Navbar';
import SideBar from '../../../components/sidebar/SideBar';
import axios from 'axios';
import { BaseUrl } from '../../../API/BaseUrl';
import { Button } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';





// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

function ViewFile() {
  const[pdf,setPdf]= useState();

  useEffect(()=>{

    pdfData();

  },[])







  const pdfData=async()=>{
    try{
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BaseUrl}/api/user/findfile`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if(response.data.success){
        setPdf(response.data.data)
      }else{
        console.log("error");
      }
     

    }catch(error){

    }
    
  }

  const download = async (item) => {
    try {
      fetch(`${item.fileid}`).then((response) => {
        console.log(response);
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${item.filename}`;
          alink.click();
        });
      });
    } catch (err) {}
  };

 

  return (
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <div className='mainbody'>
            <div className='container' style={{ width:"100%",height:"100vh", }}>
                <div style={{width: "100%", height: "100%", padding: "50px", }}>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Dowload</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {pdf?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{index+1}</TableCell>
              <TableCell component="th" scope="row">
                {row.filename}
              </TableCell>
              <TableCell align="right">
                <Button onClick={()=>download(row)}>
                 
                  <FileDownloadIcon/>
                </Button>
              </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">1</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default ViewFile
