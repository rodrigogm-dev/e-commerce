import React, { useState, useEffect } from 'react'
import './ProductList.css'

function ProductList () {
  const [products, setProducts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  async function requestProducs () {
    const url = `https://fakestoreapi.com/products`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      setErrorMessage(
        'Lista de productos no disponible. Inténtelo de nuevo más tarde.'
      )
      console.error('Error al solicitar los productos')
    }
  }

  useEffect(() => {
    requestProducs()
  }, [])

  return (
    <div className='main-content'>
      {errorMessage ? (
        <p className='error-message'>{errorMessage}</p>
      ) : (
        products.map(prod => (
          <div key={prod.id} className='product-card'>
            <p className='product-title'>{prod.title}</p>
            <img
              className='product-image'
              src={prod.image}
              alt={prod.title}
            ></img>
            <p className='product-price'>${prod.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
