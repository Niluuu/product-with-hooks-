import React from 'react'
import {ProductConsumer} from '../providers/Product'
import star from '../img/star.svg'

export default function Rating() {
  const Star = () => {
    return <img style={{marginRight: 2, width: 12}} src={star}/>
  }

  return (
    <ProductConsumer>
      {props => 
        <div className="rating">
          <p style={{paddingBottom: 10, color: "#333", fontSize: 14}}>Rating</p>
          <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            {(props.rate) ?  
              <span style={{paddingBottom: 20, color: "#979A9A", fontSize: 14}}>
                ({props.rate.reduce((a,b)=> a + b, 0)}) 
              </span> : null  
            }
          </div>
        </div>
      }
  </ProductConsumer>
  )
}
