import React from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar'
import AdminSidebar from '../../admin/components/AdminSidebar'

import Footer from './../../portal/components/Footer';
import './Style.css'

const StaffTable = () => {
  const staffData = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Manager',
      department: 'Sales',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2021-01-15',
      salary: '$70,000',
      status: 'Active',
      address: '123 Main St',
    },
    // Add more staff data here
  ];

return (
        <div>
        <div><AdminNavbar/></div>
        <div style={{width:'100%'}}>
          <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
          <div style={{width:'80%',float:'right'}}>

            <div style={{marginTop:'10%',minHeight:'100vh'}}>
         
           
  <h2>Here are all the details of  <a href="https://github.com/pablorgarcia" target="_blank">the staff of this hotel </a></h2>
  <table className="contain">
    <thead>
      <tr>
        <th><h1>id</h1></th>
        <th><h1>Name</h1></th>
        <th><h1>E-mail</h1></th>
        <th><h1>Phone</h1></th>
        <th><h1>Address</h1></th>
        <th><h1>Position</h1></th>
        <th><h1>Department</h1></th>
        <th><h1>Salary</h1></th>
        <th><h1>Action</h1></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>shohel</td>
        <td>shohel@gmail.com</td>
        <td>01641160101</td>
        <td>Dhaka</td>
        <td>Attendent</td>
        <td>Housekeeping</td>
        <td>12,500</td>
      </tr>
      <tr>
      <td>101</td>
        <td>shohel</td>
        <td>shohel@gmail.com</td>
        <td>01641160101</td>
        <td>Dhaka</td>
        <td>Attendent</td>
        <td>Housekeeping</td>
        <td>12,500</td>
      </tr>
      <tr>
      <td>101</td>
        <td>shohel</td>
        <td>shohel@gmail.com</td>
        <td>01641160101</td>
        <td>Dhaka</td>
        <td>Attendent</td>
        <td>Housekeeping</td>
        <td>12,500</td>
      </tr>
      
    </tbody>
  </table>
</div>
<div><Footer/></div>
    </div>
 

          </div>

     
        </div>
       
      
     
        
  
   
  );
};

export default StaffTable;
