import React from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar'
import AdminSidebar from '../../admin/components/AdminSidebar'

import Footer from './../../portal/components/Footer';
import './Style.css';
import StaffForm from './staffform';

const TableComponent = () => {
  const data = [
    { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7', col8: 'Data 8', col9: 'Data 9', col10: 'Data 10', col11: 'Data 11' },
    { col1: 'Data A', col2: 'Data B', col3: 'Data C', col4: 'Data D', col5: 'Data E', col6: 'Data F', col7: 'Data G', col8: 'Data H', col9: 'Data I', col10: 'Data J', col11: 'Data K' },
    // Add more rows as needed
  ];

  return (
    <div>
         <div><AdminNavbar/></div>
        <div style={{width:'100%'}}>
          <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
          <div style={{width:'80%',float:'right'}}>

          <h1 style={{marginTop:'100px',textAlign:'center',padding:'10px'}}>Here details all of the guest</h1>
      
    <div className="table-containering">
       
      <table className="styled-table">
      
        <thead>
      
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Adult</th>
            <th>Child</th>
            <th>Room no.</th>
            <th>phone</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
              <td>{row.col4}</td>
              <td>{row.col5}</td>
              <td>{row.col6}</td>
              <td>{row.col7}</td>
              <td>{row.col8}</td>
              <td>{row.col9}</td>
              <td>{row.col10}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
    <div style={{marginTop:'80vh'}}><Footer/></div>
    </div>
   
    </div>
    </div>  
   
  );
};

export default TableComponent;
