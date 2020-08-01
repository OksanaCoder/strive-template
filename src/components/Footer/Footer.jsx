import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../../images/logo-name.png'
import combinator from '../../images/combinator.png'

export default function Footer() {
    return (
        <div className='conatainer-footer' style={{display: 'flex', justifyContent : 'space-between', alignItems: 'center'}}>
            <div className='container'>
                <Row style={{textAlign: 'center'}}>
                    <Col lg={4}>
                        <img src={logo} style={{width: '140px', paddingBottom: '20px'}}/>
                        <p style={{ letterSpacing: '2px'}}>GET DAYONE GERMANY, GmbH
                        Rheinsberger Straße 76/77,
                        10115 Berlin, Germany</p>
                    </Col>
                    <Col lg={4}>
                        <h4 style={{fontWeight: '700'}}>ABOUT</h4>
                        <div style={{lineHeight: '0.5', paddingTop: '20px', letterSpacing: '2px'}}>
                            <p><a href="/" className='text-dark'>Privacy Policy | GDPR</a></p>
                            <p><a href="/" className='text-dark'>Impressum</a></p>
                        </div>


                    </Col>
                    <Col lg={4}>
                        <h4 style={{fontWeight: '700'}}>BACKED BY</h4>
                        <img src={combinator} style={{width: '140px', paddingTop: '20px'}}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}