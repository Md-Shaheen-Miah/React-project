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
                            
                <div className="form-container">
                    <form action="#" method="post">
                        <h2>Room Add Form</h2>
                        <label htmlFor="room_no">Room Number:</label>
                        <input type="text" id="room_no" name="room_no" placeholder="Enter room number" required />
                        <label htmlFor="room_type">Room Type:</label>
                        <select id="room_type" name="room_type" required>
                        <option value>Select Room Type</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                        </select>
                        <label htmlFor="bed_type">Bed Type:</label>
                        <select id="bed_type" name="bed_type" required>
                        <option value>Select Bed Type</option>
                        <option value="single_bed">Single Bed</option>
                        <option value="double_bed">Double Bed</option>
                        <option value="queen_bed">Queen Bed</option>
                        <option value="king_bed">King Bed</option>
                        </select>
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" placeholder="Enter price" required />
                        <label htmlFor="availability">Availability:</label>
                        <select id="availability" name="availability" required>
                        <option value>Select Availability</option>
                        <option value="available">Available</option>
                        <option value="booked">Booked</option>
                        </select>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows={4} placeholder="Enter room description" required defaultValue={""} />
                        <button type="submit">Submit</button>
                    </form>
                </div>


 
            </div>
<div><Footer/></div>
    </div>
 

          </div>

     
        </div>
       
      
     
        
  
   
  );
};

export default AllRoom;
