import React from 'react'
import './CartList.css'

function CartList ({ cart, removeFromCart, setShowCart }) {
  return (
    <div className='root-container'>
      <div className='cartlist-content'>
        {cart.length === 0 ? (
          <p className='error-message'>Cart is empty.</p>
        ) : (
          cart.map(product => (
            <div className='cart-product' key={product.id}>
              <p className='product-title'>{product.title}</p>
              <div className='product-box'>
                <img
                  className='product-image'
                  src={product.image}
                  alt={product.title}
                />
                <div className='buttons-box'>
                  <button className='reduce-button'>-</button>
                  <label className='quantity-label'></label>
                  <button className='add-button'>+</button>
                  <button
                    className='remove-from-cart'
                    onClick={() => removeFromCart(product.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        className='go-shopping'
        onClick={() => setShowCart(prevState => !prevState)}
      >
        Go Shopping
      </button>
    </div>
  )
}

export default CartList
