import React from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import Bg from "./../assets/bggg.jpg"
import {register} from "../services/Auth.service"


const Register = () => {

     let history = useHistory();
     const redirect = () => {
         history.push('/login')
     }
    const initialValues = {
        email: "",
        password: "",
        confirmpassowrd: "",
    }
    function onSubmit(values) {
        const registered = {
            email: values.email,
            password: values.password,
        };
        console.log(registered);
        register(registered).catch(      window.location = "/login"  );
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
        if (values.confirmpassword !== values.password) {
            errors.confirmpassword = 'passwords do not match ';
        }
       
        return errors;
    }

    const formik = useFormik({ initialValues, onSubmit, validate });
    return (
        <div>      
                 <Image src={Bg}  className="bg"/>         

         <Row className="landing card-img-overlay ">
        <Col sm={3}></Col>
        <Col sm={6} >
             <div style ={{background : "rgba(255,255,255,0.9)",borderRadius:"20px"}}>   

                        <Form style={{ width: "80%", marginLeft: "10%", marginTop: "25%" }} onSubmit={formik.handleSubmit}>
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
                            <Form.Group >
                                <Form.Label>Confirm your password</Form.Label>
                                <Form.Control name="confirmpassword"
                                    className={(formik.touched.confirmpassword && formik.errors.confirmpassword) ? 'form-control is-invalid' : 'form-control'}
                                    type="password" placeholder="Re-enter your password"
                                    value={formik.values.confirmpassword}
                                    onChange={formik.handleChange} />
                                     {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                                    <div className="invalid-feedback">{formik.errors.confirmpassword}</div>
                                ) : null}
                            </Form.Group>
                            <br />
                            <Button style={{ marginLeft: "30%", marginBottom:"3%" }} type="submit"   onClick={formik.validateForm}>Submit</Button>
                            <Button style={{ marginLeft: "10%", marginBottom:"3%" }}  
                             onClick={redirect} 
                            >Login</Button>

                        </Form>
                    </div>
                </Col>
                
            </Row>

        </div>
        
    )
}

export default Register;
