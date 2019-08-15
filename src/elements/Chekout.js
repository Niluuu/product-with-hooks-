import React, { useState } from 'react'

const Chekout = ({size}) => {
  const [check, setCheck] = useState(false)
  return <div>
    <label style={ (check)? {borderColor: "#2E86C1"}:{ borderColor: "#eee"}} >{size}    
      <input type="checkbox" className="check" checked={check} onClick={()=> setCheck(!check)}  />
    </label>
  </div> 
}

export default Chekout
