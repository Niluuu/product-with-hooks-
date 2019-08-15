import React from 'react'
import {ProductsConsumer} from '../providers/Products'
import star from '../img/star.svg'


export default function TopProduct() {
  const Star = () => {
    return <img style={{marginRight: 2, width: 10, height: 10}} src={star}/>
  }

  return (
    <ProductsConsumer>
    {
      props => props.map(product => 
      <div className="top-product">
        <div style={{background: `url(${product.picture})`,backgroundSize: "cover" , width: 80, height: 100, borderRadius: 3, marginBottom: 10}}>
          <span className="price">{product.price}</span>
        </div>
        <p style={{color: "#333", fontSize: 12, height: 20, width: 100 }}>{product.name}</p>
        <div className="small-rating">
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          {(product.rate) ? 
            <span style={{paddingBottom: 20, color: "#979A9A", fontSize: 14}}>
              ({product.rate.reduce((a,b)=> a + b, 0)}) 
            </span> : null
          }
        </div>
      </div>)
    }
    </ProductsConsumer>
  )
}
