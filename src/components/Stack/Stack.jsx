import React,  { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import html from '../../images/html.png'
import react from '../../images/react.jpg'
import bootstrap from '../../images/boot.png'
import sql from '../../images/sql.png'
import mongo from '../../images/mongo.jpg'
import git from '../../images/git.jpg'
import node from '../../images/node.png'
import express from '../../images/express.png'
import typescript from '../../images/typescript.png'


export default function Stack () {
    return (
        <div className='container-stack'>
            <div className='container'>
               <Row className='pb-5' style={{textAlign: 'center'}}>
                    <Col lg={12} className='heading text-white'>
                        Tech Stack
                    </Col>
                    <Col lg={12} style={{fontSize: '20px', color: '#fff', letterSpacing: '2px', paddingTop: '10px'}}>
                    The technology you'll get to master
                    a few months from now.
                    </Col>
                </Row>
                <div className='wrapper-stack'>
                <Row className='card-box'>
                    <Col lg={4}>
                        <div class='icon-container'><img className='icon-tech' src={html}/></div>
                         <p>HTML, CSS and Javascript are the building blocks of every internet page. With this skillset, you'll be able to develop avery web interface!</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={react}/></div>
                    <p>React is a JavaScript library for creating user interfaces used by some of the best Tech Companies. (Facebook, Instagram, AirBnB)</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={node}/></div>
                    <p>Node.js is a multiplatform object oriented library event-oriented for Server-Side JavaScript applications.</p>
                    </Col>
                 </Row>
                 <Row>   
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={mongo}/></div>
                    <p>Node.js is a multiplatform object oriented library event-oriented for Server-Side JavaScript applications.</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={express}/></div>
                    <p>Express is a framework for web apps based on Node.Js. We'll use it to create fast and performing Web Servers and Web Services.</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={bootstrap}/></div>
                    <p>Bootstrap4 is the most adopted framework to create web interfaces. It allows fast and easy creation of responsive web pages.</p>
                    </Col>
                </Row>
                <Row>   
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={typescript}/></div>
                    <p>JavaScript that scales: a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={sql}/></div>
                    <p>PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.</p>
                    </Col>
                    <Col lg={4}>
                    <div class='icon-container'><img className='icon-tech' src={git}/></div>
                    <p>Git is the most famous versioning software. It allows to keep track of the code, share it and work in fast and efficient way with your team.</p>
                    </Col>
                </Row>
                </div>
            </div>

        </div>
    )
}