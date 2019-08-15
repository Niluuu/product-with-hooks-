import React, { useState, useEffect} from 'react'
import "../theme/index.css"
import { ProductProvider } from '../providers/Product'
import { ProductsProvider } from '../providers/Products'

import Product from '../containers/Product'
import Products from '../containers/Products'

import axios from 'axios';


function ViewProduct() {
const [data, setData] = useState({data: []})
const [url, setUrl] = useState('http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2')
const [loading, setLoading] = useState(false)
const [singleProduct, setProduct] = useState({product: {}})

useEffect(() => {
  const fetchData = async () => {
    const result = await axios(url);

    setData(result.data);
    setLoading(true);
    
    const product = result.data.find(product => product.index === 1)
    setProduct(product)
    console.log(result.data)
  };

  fetchData();
}, []);


  return (
    <div className="flex-container">
       <div className="content">
       { 
        (!loading) ? <div>loading...</div> : 
        <div>
          <ProductProvider 
            value={singleProduct}>
            <Product/>
          </ProductProvider>
          <ProductsProvider value={data}>
            <Products/>
          </ProductsProvider>
        </div>
       }
      </div> 
    </div>
  )
}


export default ViewProduct
  