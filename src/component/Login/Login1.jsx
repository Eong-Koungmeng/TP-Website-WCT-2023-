import React from 'react';
import Logo from '../../asset/logo.png';
import Image from "../../asset/signIn.jpg";
import Google from "../../asset/google.png";
import {Container, Row, Col, Form, FormGroup, Button} from "react-bootstrap";
import "./Login1.css"

const Login1 = () => {
  return (
    
    <Container className="d-flex align-items-center justify-content-center vh-100 mt-5 mb-5">
        {/*Row Container*/}
        <Row className="bg-dark d-flex w-100 vh-100">

            {/*Left Column*/}
            <Col md={6} className="position-relative w-50 vh-100 d-flex flex-column">
                
                <img src={Image} alt="image" className="img-fluid" />
                
                <div className="position-absolute d-flex flex-column">
                    <h6>Purchase and Enjoy Your Favorite Show</h6>
                    <p>Our pleasure to serve you</p>
                </div>
            </Col>

            {/*Right Column*/}
            <Col md={6} className="w-50 p-3 h-100 d-flex justify-content-between">
                <div>
                    <div>
                        <div>
                            <img src={Logo} alt="Logo" width="80" height="40" />
                        </div>
                        <div className="w-100 d-flex flex-column m-2">
                            <p className="mb-1" style={{ fontSize: '15px' }}>Hello, Again</p>
                            <p className="mb-1" style={{ fontSize: '13px' }} >We are happy to have you</p>
                        </div>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label className="mb-1" style={{ fontSize: '14px' }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label className="mb-1" style={{ fontSize: '14px' }}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2" controlId="formHorizontalCheck">
                            <div className="d-flex align-items-center">
                                <Form.Check label="Remember me" className="mb-1 mt-2" style={{ fontSize: '14px' }} />
                                <p className="mb-1 ms-5" style={{ fontSize: '14px' }}>Forgot Password?</p>
                            </div>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2" >
                                <Button type="submit" className="mb-1 w-100" style={{ fontSize: '14px' }}>Sign in</Button>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 position-relative">
                                <div className="w-100 h-1 bg-dark d-flex align-items-center justify-content-center">
                                    <p className="text-lg position-absolute mb-1"  style={{ fontSize: '14px' }}>or</p>
                                </div>  
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Button type="submit" >
                                    <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                        <img src={Google} alt="google icon" style={{width: "15px"}} />
                                        <p className="m-0 ms-2" style={{ fontSize: '14px' }}> Sign in with Google Account</p>
                                    </div>
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

            
            </Col>
        </Row>
    </Container>
        
    
  )
}

export default Login1

