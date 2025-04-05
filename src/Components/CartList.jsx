import React, { useEffect, useState } from 'react'
import './CartList.css'

function CartList ({ cart, setCart, removeFromCart, setShowCart }) {
  const [total, setTotal] = useState(0)
  const [subtotals, setSubtotals] = useState([])

  useEffect(() => {
    cart.forEach(product => {
      setSubtotals(prevSubtotals => [
        ...prevSubtotals,
        product.quantity * product.price
      ])
    })
    // cart.forEach(product => {
    //   console.log(product.title, product.quantity)
    // })
    let sum = 0
    subtotals.forEach(subtotal => {
      // sum += subtotal
      // setTotal(sum)
      console.log(subtotal)
    })
  }, [cart])

  const decreaseProductQuantity = product => {
    let quantity = parseInt(product.quantity) - 1
    product.quantity = quantity
    setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    setCart(prevCart => [...prevCart, product])
    if (product.quantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    }
    // cart.forEach(product => {
    //   console.log(product.title, product.quantity)
    // })
  }

  const increaseProductQuantity = product => {
    let quantity = parseInt(product.quantity) + 1
    product.quantity = quantity
    setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    setCart(prevCart => [...prevCart, product])
    // cart.forEach(product => {
    //   console.log(product.title, product.quantity)
    // })
  }
  return (
    <div className='root-container'>
      <div className='product-grid'>
        {cart.length === 0 ? (
          <p className='error-message'>Cart is empty.</p>
        ) : (
          <>
            <p className='total'>{total}</p>
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
              </div>
            ))}
          </>
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
