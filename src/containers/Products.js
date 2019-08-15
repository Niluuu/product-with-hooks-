import React from 'react'
import ProductsSlider from '../components/ProductsSlider';

export default function Products() {
  return (
    <div style={{paddingTop: 10,}} >
      <h2 style={{fontWeight: "normal",fontSize: 18 ,paddingBottom: 10,}}>Rating products</h2>
      <ProductsSlider/>
    </div>
  )
}
