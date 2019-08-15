import React from 'react'
import {ProductConsumer} from '../providers/Product'
import { jsx } from '@emotion/core'


export default function () {
  return (
    <ProductConsumer>
      {props => 
      <div>
        <h2 style={{paddingBottom: 10}}>{props.name}</h2>
        <p style={{paddingBottom: 10, color: "#333", fontSize: 12 }}>{props.company}</p>
        <h2 style={{fontWeight: "normal",fontSize: 18 ,paddingBottom: 10,}} >${props.price}</h2>
        <p style={{paddingBottom: 10, color: "#979A9A", fontSize: 12 }}>{props.about}</p>
      </div>}
    </ProductConsumer>
  )
}

