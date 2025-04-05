import React, { useState, useEffect } from 'react'
import './ProductList.css'

function ProductList ({ addToCart, cart }) {
  const [products, setProducts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [buttons, setButtons] = useState({})

  useEffect(() => {
    const requestProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error downloading products.')
        setErrorMessage('Unavailable, try later please.')
      }
    }

    requestProducts()
  }, [])

  useEffect(() => {
    if (cart.length === 0) return

    const cartIds = cart.map(product => product.id)

    const updatedButtons = {}
    cartIds.forEach(id => {
      updatedButtons[id] = true
    })

    setButtons(updatedButtons)
  }, [cart])

  return (
    <div className='product-grid'>
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
              id={product.id}
              disabled={buttons[product.id] || false}
              key={product.id}
              className='product-button'
              onClick={() => {
                addToCart(product)
              }}
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
