import React from 'react'
import "./booktrial.css"

export default function Booktrial() {
  return (
    <div className='trial'>
        <div className='form1'>
          <div className='formleft'>Become a Full Stack </div>
          <div className='formleft1'>Developer</div>
          <div className='formleft2'>Learn.Earn.It's your turn</div>
          <div className='formleft2'>0% Upfront Fees</div>
          <div className='formleft31'>
          <div className='formleft3'>Guaranteed placement</div>
          </div>
          {/* <div className='apply'>
          <input type="text" placeholder="Apply now"/>
          </div> */}
          <div className='button'>
          {/* <input type="text" placeholder='Apply now'/> */}
          <button className='btn apply' style={{backgroundColor:"blue",color:"white",fontWeight:"bold",border:"none", borderRadius:"8px",width:"200px",height:"25px"}}>Apply now</button>
          </div>
          </div>
          <div className='bookform'>
            <div className='book1'>Book a FREE Trial class.</div>
            <div className='container'>
            <div className='container1'>
            <form>
              <label>
                Email ID*
                <input type="text" />
              </label>
              </form>
              </div>
              <div className='container2'>
          <form>
              <label>
                Graduation year*
                <input type="text" />
              </label>
              </form>
              </div>
              <div className='container3'>
              <form>
              <label>
                Phone no*
                <input type="text" />
              </label>
              </form>
              </div>
              <div className='container4'>
               <div className='container5'>Book your live session now</div>
                </div>
              </div>
            </div>
            </div>
         
        
    
  )
}