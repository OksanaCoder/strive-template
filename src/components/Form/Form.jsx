import React, { Container } from 'react'
import { Col, Row } from 'react-bootstrap'
export default function Form() {
    return (
        <div className='container-form'>
            <div className='container'>
                <Row className='pb-5' style={{ textAlign: 'center' }}>
                    <Col lg={12} className='heading text-white'>
                        Apply Now to Strive School
                    </Col>
                    <Col lg={12} style={{ fontSize: '20px', color: '#fff', letterSpacing: '2px', paddingTop: '10px' }}>

                        You'll receive an email with further instructions on the selection process.
                        Be ready - it's challenging.
                    </Col>

                </Row>
                <Row>
                    <Col lg={12}>
                        <Form className='form-email'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}