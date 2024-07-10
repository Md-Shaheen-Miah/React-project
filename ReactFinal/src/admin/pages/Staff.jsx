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
    <>
    <AdminNavbar/>
   
    <div style={{width:'100%'}}>
      <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
      <div style={{width:'80%',marginLeft:'20%',minHeight:'100vh'}}>
      
      <table className="staff-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Hire Date</th>
          <th>Salary</th>
          <th>Status</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {staffData.map((staff) => (
          <tr key={staff.id}>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
            <td>{staff.position}</td>
            <td>{staff.department}</td>
            <td>{staff.email}</td>
            <td>{staff.phone}</td>
            <td>{staff.hireDate}</td>
            <td>{staff.salary}</td>
            <td>{staff.status}</td>
            <td>{staff.address}</td>
          </tr>
        ))}
      </tbody>
    </table>

  
  </div>
 

      
    
      <div style={{marginLeft:'16%'}}><Footer/></div>
    
    </div>
    
    </>
  );
};

export default StaffTable;
