import React, { Component } from 'react'
import logo from '../../images/logo-name.png'
import headBackground from '../../images/web.png'
import {Animated} from "react-animated-css";

const Head = () => {

    return (
        <div className='container-head'>
           <div className='container'>
               <div className='row nav-head'>
                   <div className='col-6'>
                       <img alt='logo' className='logo'  src={logo}/>
                   </div>
               </div>

               <div className='row'>
                   <div className='col-lg-7 col-md-12 col-sm-12'>
                         <div className='row'>
                             <div className='col-12' style={{marginTop: '20%'}}>
                                <h5 className='fade-in' style={{fontSize:'35px', fontWeight: '700', letterSpacing: '1px'}}>Learn to code like a professional developer in 6 months, and get hired</h5>
                                <h6 style={{fontSize:'20px', fontWeight: '500', letterSpacing: '3px', marginTop: '30px'}}>It's 100% free until you land a job</h6>
                             </div>
                             <div className='col-lg-5 col-md-12 col-sm-12'>
                             <Animated animationIn="bounceInLeft" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                <button className='btn-apply' style={{marginTop: '60px'}}>Apply Now</button>
                            </Animated>
                               
                             </div>
                         </div>
                    </div>
                    <div className='col-lg-5'>
                         <img src={headBackground} className='background-header-svg' style={{width: '100%', paddingTop: '200px', marginLeft: '40px'}} alt='background-head'/>
                    </div>
               </div>

           </div>
        </div>
       
    )

}

export default Head