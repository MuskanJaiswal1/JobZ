import React from 'react'
import icon from '../../../public/iconn.png'
import "./Goto.css"

const Goto = () => {
  return (
    <div>
        <div className='imeg'>
            <img src={icon} alt=''></img>
            <p className='para'>Your have successfully applied for this job.</p>
            <p>Prepare for interview with last year questions</p>
            <a href='#'>Goto</a>
        </div>
    </div>
  )
}

export default Goto