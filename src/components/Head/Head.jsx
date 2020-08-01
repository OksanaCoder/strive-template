import React, { Component } from 'react'
import logo from '../../images/logo-name.png'
import headBackground from '../../images/web.png'
const Head = () => {

    return (
        <div className='container-head'>
           <div className='container'>
               <div className='row nav-head'>
                   <div className='col-6'>
                       <img alt='logo' className='logo'  src={logo}/>
                   </div>
                   <div className='col-6'>
                        <h6 style={{textAlign:'right'}}>Success stories</h6>
                   </div>
               </div>

               <div className='row'>
                   <div className='col-7'>
                         <div className='row'>
                             <div className='col-12' style={{marginTop: '20%'}}>
                                <h5 style={{fontSize:'35px', fontWeight: '700', letterSpacing: '1px'}}>Learn to code like a professional developer in 6 months, and get hired</h5>
                                <h6 style={{fontSize:'20px', fontWeight: '500', letterSpacing: '3px', marginTop: '30px'}}>It's 100% free until you land a job</h6>
                             </div>
                             <div className='col-12'>
                                 <button className='btn-apply' style={{marginTop: '140px'}}>Apply Now</button>
                             </div>
                         </div>
                    </div>
                    <div className='col-5'>
                         <img src={headBackground} style={{width: '500px', paddingTop: '200px', marginLeft: '40px'}} alt='background-head'/>
                    </div>
               </div>

           </div>
        </div>
       
    )

}

export default Head