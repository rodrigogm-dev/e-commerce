import React, { useState, useEffect } from 'react'
import './ProductList.css'

function ProductList ({ addToCart }) {
  const [products, setProducts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  async function requestProducs () {
    const url = `https://fakestoreapi.com/products`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      setErrorMessage('Lista de productos no disponible por ahora.')
      console.error('Error al solicitar los productos')
    }
  }

  useEffect(() => {
    requestProducs()
  }, [])

  const handleAddToCart = e => {
    e.preventDefault()
    e.target.disabled = true
  }

  return (
    <div className='main-content'>
      {errorMessage ? (
        <p className='error-message'>{errorMessage}</p>
      ) : (
        products.map(product => (
          <div key={product.id} className='product-card'>
            <p className='product-title'>{product.title}</p>
            <img
              className='product-image'
              src={product.image}
              alt={product.title}
            ></img>
            <p className='product-price'>${product.price}</p>
            <button
              key={product.id}
              className='product-button'
              onClick={e => addToCart(product)}
            >
              Add
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
