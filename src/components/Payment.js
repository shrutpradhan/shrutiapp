import React from 'react'
import payimage from "../images/Payment.png"
import './payment.css'

export default function Payment() {
  return (
    <div className='payment-comp'>
<div className='payment-image'>
<img alt='' src={payimage}/>
</div>
<div className='payment-comp1'>
    <div className='payment-comp1-box'>Pay only after getting
placed</div>
<div className='payment-comp1-box1'>Get placed in the company and payback to us on the terms and conditions as per ISA.</div>
<div className='button1'>
    <div className='btn apply1'>Apply Now</div>
          </div>
          </div>
</div>
    
  )
}
