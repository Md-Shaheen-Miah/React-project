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
         
  <h1><span className="blue">&lt;</span>Table<span className="blue">&gt;</span> <span className="yellow">Responsive</span></h1>
  <h2>Here are all the details of  <a href="https://github.com/pablorgarcia" target="_blank">the staff of this hotel </a></h2>
  <table className="contain">
    <thead>
      <tr>
        <th><h1>id</h1></th>
        <th><h1>Name</h1></th>
        <th><h1>E-mail</h1></th>
        <th><h1>Phone</h1></th>
        <th><h1>Address</h1></th>
        <th><h1>position</h1></th>
        <th><h1>depertment</h1></th>
        <th><h1>Salary</h1></th>
        <th><h1>action</h1></th>
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
        <td>Twitter</td>
        <td>7326</td>
        <td>10437</td>
        <td>00:51:22</td>
      </tr>
      <tr>
        <td>Amazon</td>
        <td>4162</td>
        <td>5327</td>
        <td>00:24:34</td>
      </tr>
      <tr>
        <td>LinkedIn</td>
        <td>3654</td>
        <td>2961</td>
        <td>00:12:10</td>
      </tr>
      <tr>
        <td>CodePen</td>
        <td>2002</td>
        <td>4135</td>
        <td>00:46:19</td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td>4623</td>
        <td>3486</td>
        <td>00:31:52</td>
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
