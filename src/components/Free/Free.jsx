import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import dot from '../../images/dot.svg'
import {Animated} from "react-animated-css";
export default function Free() {
    return (
        <div className='container-free'>
            <div className='container'>
                <Row>
                    <Col lg={12} className='heading' style={{ textAlign: 'center', marginTop: '-30px' }}>
                        Pay only after you get hired
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} className='row-free' style={{ textAlign: 'right', marginTop: '60px' }}>  
                        <ul className='list-unstyled list-free' style={{ textAlign: 'right' }}>
                            <li style={{ fontSize: '30px', fontWeight: '600' }}><img src={dot} />Free access to : </li>
                            <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                <li><img src={dot} />Tutoring</li>
                            </Animated>
                            <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                <li><img src={dot} />Live lessons</li>
                            </Animated>
                            <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                <li><img src={dot} />Code Review</li>
                            </Animated>
                            <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                <li><img src={dot} />Job Interview coaching</li>
                            </Animated>
                            <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                                <li><img src={dot} />Job placement</li>
                            </Animated>

                            <li><i style={{ fontSize: '13px' }}>Post hiring cost 10% of your gross salary for 4 years</i></li>
                        </ul>
                        <button className='btn-apply' style={{ marginTop: '40px' }}>Start Today</button>

                    </Col>
                </Row>
            </div>
        </div>
    )
}