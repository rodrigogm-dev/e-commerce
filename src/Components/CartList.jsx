import React from 'react'

function CartList ({ cart, removeFromCart }) {
  return (
    <div className='cartlist-content'>
      {cart.length === 0 ? (
        <p className='error-message'>El carrito está vacío.</p>
      ) : (
        cart.map(product => (
          <div className='cart-product' key={product.id}>
            <p className='product-title'>{product.title}</p>
            <button
              className='remove-from-cart'
              onClick={removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default CartList
