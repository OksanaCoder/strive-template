import React, { Component } from 'react'
import combinator from '../../images/combinator.png'
import techcrunch from '../../images/techcrunch.png'



export default function Cooperators () {

    return (
        <div className='container-cooper'>
            <div className='container'>
                <div className='row cooperator-row'>
                    <div className='col-6'>
                        <img alt='combinator' src={combinator} style={{width: '40%'}}/>
                    </div>
                     <div className='col-6'>
                        <img  alt='techcrunch' src={techcrunch} style={{width: '40%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}