import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import luca from '../../images/luca.png'
import faina from '../../images/faina.png'
import micheal from '../../images/Micheal.png'
import valerio from '../../images/Valerio.jpeg'

// const slider = (
//     <AwesomeSlider cssModule={AwesomeSliderStyles}>
//     <div data-src={luca}  />
//     <div data-src={faina} />
//     <div data-src={micheal}  />
//     <div data-src={valerio}/>
// </AwesomeSlider>
// )
export default function Stories() {
    return (
        <div className='container'>

            <Row className='pb-5'>
                <Col lg={12} className='heading mb-3' style={{ textAlign: 'center' }}>
                    Success Stories
                    </Col>
            </Row>
            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    infiniteScroll
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px'
                        },
                        '@media (min-width: 900px)': {
                            width: '960px',
                            height: '400px'
                        }
                    }}
                >
                    <img src={luca} alt='Luca React Developer @HUDi' data-action="" />
                    <img src={faina} alt='Faina Web Developer @QI4M' data-action="" />
                    <img src={micheal} alt='Michael Web Developer @Mobos Fashion' data-action="" />
                    <img src={valerio} alt='Valerio Front-end Developer @Allelica' data-action="" />
                </Coverflow>
            </StyleRoot>
        </div>
    )
}