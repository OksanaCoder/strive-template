import React, { Components } from 'react'
import CountUp from 'react-countup'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faInfo, faBatteryQuarter } from '@fortawesome/free-solid-svg-icons'

export default function Counter () {
    return (
        <div className='container-counter'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 left-batch'>

                            <p style={{fontSize:'25px', fontWeight: '600'}}>
                            <FontAwesomeIcon style={{marginRight: '20px'}} icon={faBatteryQuarter} />Don't miss it!</p>
                            <small style={{fontSize: '20px', letterSpacing:'2px'}}>Next batch starts on:</small>
                        </div>
                        <div className='col-4 counter'> 
                         <h4 style={{fontSize:'30px'}}>September</h4>
                        <CountUp  style={{fontSize: '90px'}}
                                start={1}
                                end={27}
                                duration={5}
                                separator=" "
                                decimals={0}
                                decimal=","
                               
                             
                                ></CountUp>
                                  <button className='btn-apply' style={{marginTop: '20px'}}>Apply Now</button>
                                </div>
                        <div className='col-4'></div>
                        
                
                    </div>
                </div>
        </div>
    )
}

