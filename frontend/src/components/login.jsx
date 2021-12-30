
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useFormik} from "formik";
import bg from "../assets/bggg.jpg"
import { Image, Row, Col } from 'react-bootstrap';
import {signin} from "../services/Auth.service"

const Login = () => {
     let history = useHistory();
     const redirect = () => {
        history.push('/register')
     }
    const initialValues = {
         email: "",
         password: "",
    
     }
     function onSubmit(values) {
    //      const hashDigest = sha256(values.password);
    //      console.log(hashDigest)
          const registered = {
              email: values.email,
              password: values.password,
         };
         console.log(registered);
         signin(registered).then(      window.location = "/cv"  );
     }

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'email is required';
        }
       

        if (!values.password) {
            errors.password = 'password is required';
        } else {
            if (values.password.length < 6) {
                errors.password = 'minimum length of the password is 6'
            }
        }
       
       
        return errors;
    }

    const formik = useFormik({ initialValues, onSubmit, validate });
    return (
<div>
<Image src={bg}  className="bg"/>        

<Row className="landing card-img-overlay ">
        <Col sm={3}></Col>
        <Col sm={6} >

        <div style ={{background : "rgba(255,255,255,0.7)",borderRadius:"20px"}}>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "25%" }} 
            onSubmit={formik.handleSubmit}
            >
                <Form.Group style={{paddingTop:"5%"}}>
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control
                        name="email"
                       className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'}
                       type="email" value={formik.values.email}
                       onChange={formik.handleChange}
                        placeholder="Enter your email" />
                          {formik.touched.email && formik.errors.email ? (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                ) : null} 
                </Form.Group>
                <br />  
                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control name="password"
                        className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'}
                        type="password" placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange} />
                          {formik.touched.password && formik.errors.password ? (
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                ) : null}
                </Form.Group>
                <br />
                
                <Button style={{ marginLeft: "30%",marginBottom:"3%" }}  type="submit"    onClick={formik.validateForm}>Submit</Button>
                <Button style={{ marginLeft: "10%",marginBottom:"3%"  }} 
                onClick={redirect}
                 >Register</Button>
                
            </Form>
        </div>
        </Col>
        </Row>
        </div>
    )
}

export default Login;
