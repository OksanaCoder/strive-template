import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import dot from '../../images/dot.svg'
export default function Free () {
    return (
        <div className='container-free'>
          <div className='container'>   
               <Row>
                    <Col lg={12} className='heading' style={{textAlign: 'center', marginTop: '-30px'}}>
                    Pay only after you get hired
                    </Col>
                </Row> 
             <Row>            
                  <Col lg={12} style={{textAlign: 'right', marginTop: '60px'}}>
                      <ul className='list-unstyled list-free' style={{textAlign: 'right'}}>
                          <li style={{fontSize: '30px', fontWeight: '600'}}><img src={dot}/>Free access to : </li>
                          <li><img src={dot}/>Tutoring</li>
                          <li><img src={dot}/>Live lessons</li>
                          <li><img src={dot}/>Code Review</li>
                          <li><img src={dot}/>Job Interview coaching</li>
                          <li><img src={dot}/>Job placement</li>
                          <li><i style={{fontSize: '13px'}}>Post hiring cost 10% of your gross salary for 4 years</i></li>
                      </ul>
                      <button className='btn-apply' style={{marginTop: '40px'}}>Start Today</button>

                  </Col>
              </Row>
          </div>
        </div>
    )
}