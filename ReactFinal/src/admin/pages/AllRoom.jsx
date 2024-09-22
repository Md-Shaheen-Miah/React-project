import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'

import Footer from '../../portal/components/Footer';
import './AddRoom.css'


const AllRoom = () => {
 
return (
        <div>
        <div><AdminNavbar/></div>
        <div style={{width:'100%'}}>
          <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
          <div style={{width:'80%',float:'right'}}>

            <div style={{marginTop:'10%',minHeight:'100vh'}}>
         <div className="table-container">
  <h2>Room Details</h2>
  <table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Room Type</th>
        <th>Bed Type</th>
        <th>Price</th>
        <th>Availability</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>Single</td>
        <td>Single Bed</td>
        <td>$50</td>
        <td>Available</td>
        <td>A cozy single room with basic amenities.</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Double</td>
        <td>Double Bed</td>
        <td>$80</td>
        <td>Booked</td>
        <td>Spacious room with a double bed and balcony view.</td>
      </tr>
      <tr>
        <td>103</td>
        <td>Suite</td>
        <td>King Bed</td>
        <td>$150</td>
        <td>Available</td>
        <td>Luxury suite with king bed, kitchen, and jacuzzi.</td>
      </tr>
     
    </tbody>
  </table>
</div>


 
</div>
<div><Footer/></div>
    </div>
 

          </div>

     
        </div>
       
      
     
        
  
   
  );
};

export default AllRoom;
