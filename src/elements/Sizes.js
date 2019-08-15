import React, { Component } from 'react'
import {ProductConsumer} from '../providers/Product'
import Chekout from './Chekout';


export class Sizes extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          props => !(props.sizes) ?  null :
          <div>
            <p style={{color: "#333", fontSize: 14}}>Size</p>
             <div className="sizes">
              {Object.keys(props.sizes).map((size) => (
                <Chekout key={size} size={size}/>
              )) }
            </div>
          </div> 
        }
    </ProductConsumer>
    )
  }
}

export default Sizes

