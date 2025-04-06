import React, { useEffect, useState } from 'react'
import './CartList.css'

function CartList ({ cart, setCart, removeFromCart, setShowCart }) {
  const [total, setTotal] = useState(0)
  const [subtotals, setSubtotals] = useState([])

  useEffect(() => {
    const newSubtotals = cart.map(product => product.quantity * product.price)
    setSubtotals(newSubtotals)

    const newTotal = newSubtotals.reduce(
      (accumulator, subtotal) => accumulator + subtotal,
      0
    )
    setTotal(newTotal)

    cart.forEach(product => {
      console.log(product.title, product.quantity)
    })
  }, [cart])

  const decreaseProductQuantity = product => {
    const updatedCart = cart
      .map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)

    setCart(updatedCart)
  }

  const increaseProductQuantity = product => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedCart)
  }
  return (
    <div className='root-container'>
      <div className='cart-grid'>
        {cart.length === 0 ? (
          <p className='error-message'>Cart is empty.</p>
        ) : (
          <div className='products-grid'>
            <p className='cart-total'>Cart Total: ${total.toFixed(2)}</p>
            {cart.map(product => (
              <div className='product-card' key={product.id}>
                <p className='product-title'>{product.title}</p>
                <img
                  className='product-image'
                  src={product.image}
                  alt={product.title}
                />
                <p className='product-price'>${product.price}</p>
                <div className='buttons-box'>
                  <button
                    className='reduce-button'
                    onClick={() => decreaseProductQuantity(product)}
                  >
                    -
                  </button>
                  <span className='product-quantity'>{product.quantity}</span>
                  <button
                    className='add-button'
                    onClick={() => increaseProductQuantity(product)}
                  >
                    +
                  </button>
                  <button
                    className='remove-from-cart'
                    onClick={() => removeFromCart(product.id)}
                  >
                    X
                  </button>
                </div>
                <p className='product-subtotal'>
                  Subtotal: ${(product.quantity * product.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
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
