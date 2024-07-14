import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../admin/components/AdminNavbar';
import AdminSidebar from '../../admin/components/AdminSidebar';
import Footer from './../../portal/components/Footer';
import './Style.css';

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/React-project/Api-php/booking/view.php');
      console.log(response.data); // Check the structure and contents of response.data
      setData(response.data); // Assuming response.data is an array of objects matching your table structure
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div>
      <AdminNavbar />
      <div style={{ width: '100%' }}>
        <div style={{ width: '20%', float: 'left' }}>
          <AdminSidebar />
        </div>
        <div style={{ width: '80%', float: 'right' }}>
          <h1 style={{ marginTop: '100px', textAlign: 'center', padding: '10px' }}>Guest Details</h1>
          <div className="table-containering">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Adult</th>
                  <th>Child</th>
                  <th>Room No.</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.checkin}</td>
                    <td>{row.checkout}</td>
                    <td>{row.adults}</td>
                    <td>{row.children}</td>
                    <td>{row.room_no}</td>
                    <td>{row.phone}</td>
                    <td>
                      <button onClick={() => handleEdit(row.id)}>Edit</button>
                      <button onClick={() => handleDelete(row.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '80vh' }}><Footer /></div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
