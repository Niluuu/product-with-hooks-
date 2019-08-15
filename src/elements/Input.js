import React, { useState } from 'react'
import next from '../img/next.svg'
import back from '../img/back.svg'

function Input() {
  const [val, setVal] = useState(1)
  return (
    <div style={{ paddingRight: 10}}>
      <span className="inc-dec-btn" onClick={()=> setVal(val-1)}>
        <img src={back} style={{width: 12}}/>
      </span>
      <span className="inc-dec-btn" >{val}</span>
      <span className="inc-dec-btn" onClick={()=> setVal(val+1)}>
        <img src={next} style={{ width: 12}}/>
      </span>
    </div>
  )
}

export default Input
