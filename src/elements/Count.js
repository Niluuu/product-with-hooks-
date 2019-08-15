import React from 'react'
import Input from './Input';

export default function Count() {
  return (
    <div style={{display: "flex", alignItems: "center"}} >
      <Input/>
      <button className="add-cart">Add to cart</button>
    </div>
  )
}
