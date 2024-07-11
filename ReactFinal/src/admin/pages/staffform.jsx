import React from 'react';
import AdminNavbar from '../../admin/components/AdminNavbar'
import AdminSidebar from '../../admin/components/AdminSidebar'

import Footer from './../../portal/components/Footer';
import './Style.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';




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


  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

return (
        <div>
        <div><AdminNavbar/></div>
        <div style={{width:'100%'}}>
          <div style={{width:'20%',float:'left'}}><AdminSidebar/></div>
          <div style={{width:'80%',float:'right'}}>

            <div style={{marginTop:'10%',minHeight:'100vh'}}>
           <div>
            <h1>Add New Staff Form</h1>
            <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
       name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        depertment: '',
        salary: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Phone:</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control
                  type="number"
                  placeholder="phone"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                placeholder="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />

              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Position:</Form.Label>
              <Form.Control
                type="text"
                placeholder="position"
                name="position"
                value={values.position}
                onChange={handleChange}
                isInvalid={!!errors.position}
              />
              <Form.Control.Feedback type="invalid">
                {errors.position}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Depertment:</Form.Label>
              <Form.Control
                type="text"
                placeholder="depertment"
                name="depertment"
                value={values.depertment}
                onChange={handleChange}
                isInvalid={!!errors.depertment}
              />

              <Form.Control.Feedback type="invalid">
                {errors.depertment}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group as={Col} md="4" controlId="validationFormik06">
              <Form.Label>Salary:</Form.Label>
              <Form.Control
                type="number"
                name="Salary"
                value={values.salary}
                onChange={handleChange}
                isValid={touched.salary && !errors.salary}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            


          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
    </div>

  
</div>
<div><Footer/></div>
    </div>
 

          </div>

     
        </div>
       
      
     
        
  
   
  );
};

export default StaffTable;
