import React, { Container } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import logo from '../../images/logo-name.png'
export default function FormEmail() {
    return (
        <div>
            <div className='container'>
                <Row style={{ textAlign: 'center', marginBottom: '70px' }}>
                    <Col lg={12} className='heading'>
                        Apply Now to Strive School
                    </Col>
                    <Col lg={12} style={{ fontSize: '20px', color: '#000', letterSpacing: '2px', paddingTop: '10px' }}>

                        You'll receive an email with further instructions on the selection process.
                        Be ready - it's challenging.
                    </Col>

                </Row>
                <Row className='container-form'>
                    <Col lg={12}>
                        <Form className='form form-email'>
                        <Form.Group>
                             <img src={logo} style={{width: '100px', marginBottom: '50px'}}/>
                            </Form.Group>
                         <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Control type="text" placeholder="Enter surname" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <button className='btn-apply mt-2'>Apply Now</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}