import React from 'react'
import "./header.css"
import pepcoding from "../images/pepcodimg.png"

export default function Header() {
  return (
    <>
    <div className='header'>
       <div className='img-container'>
       <img alt='' src={pepcoding} />
       </div>
       <div className='navbar'>
        <div className='nav'>Trainings</div>
        <div className='nav'>Guaranteed job programming</div>
        <div className='nav'>NADOS</div>
        <div className='nav'>Resources</div>
        </div>
    </div>
    </>
  )
}