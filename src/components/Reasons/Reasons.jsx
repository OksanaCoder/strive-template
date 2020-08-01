import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import vector1 from '../../images/vec-1.png'
import vector2 from '../../images/vec-2.png'
import vector3 from '../../images/vec-3.png'

export default function Reasons () {
    return(
        <div className='container-reasons'>
            <div className='container'>
                <Row className='pb-5'>
                    <Col lg={12} className='heading'>
                    Why Strive School?
                    </Col>
                </Row>
                <Row className='flex-center'>
                   <Col lg={4} className='p-5 '>
                    <img alt='vector-1' src={vector1} className='vector mb-4'/>
                   <h5 className='mb-4'>Experienced teachers</h5> 
                   <p style={{letterSpacing:'1px'}}>Strive School is a highly interactive and fully remote program - we're making it so that you will get to work with a flock of great talents from all over Europe.</p>
                    </Col>
                    <Col  lg={4} className='p-5'>
                    <img alt='vector-2' src={vector2}  className='vector mb-4'/>
                   <h5 className='mb-4'>Pay nothing upfront</h5> 
                   <p style={{letterSpacing:'1px'}}> Master full-stack javascript development and start paying after you get hired.</p>
                    </Col>
                    <Col  lg={4} className='p-5'>
                    <img alt='vector-3' src={vector3}  className='vector mb-4'/>
                   <h5 className='mb-4'>Join from anywhere</h5> 
                   <p style={{letterSpacing:'1px'}}>Strive School is a highly interactive and fully remote program - we're making it so that you can learn from your home or anywhere you want.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}