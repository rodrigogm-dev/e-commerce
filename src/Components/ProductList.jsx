import React, { useState } from 'react'
import './ProductList.css'

function ProductList () {
  const [products, setProducts] = useState([])

  async function requestProducs () {
    const url = `https://fakestoreapi.com/products`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
      console.log(data)
    } catch (error) {
      console.error('Error al solicitar productos')
    }
  }

  return <div className='main-content'>{console.log(products)}</div>
}

export default ProductList
