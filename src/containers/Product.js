import React from 'react'
import ProductInfo from '../components/ProductInfo';
import ProductSlider from '../components/ProductSlider';
import Rating from '../elements/Rating';
import Count from '../elements/Count'
import Sizes from '../elements/Sizes';

export default function Product() {
  return (
    <div >
      <div className="flex-row">
        <ProductInfo/>
        <ProductSlider/>
      </div>
      <Rating/>
      <Sizes/>
      <Count/>
    </div>
  )
}
