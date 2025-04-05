import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'
import './App.css'

function App () {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    if (cart.length > 0) {
      setCartItems(cart.length)
    }
  }, [cart])

  const addToCart = product => {
    product.quantity = 1
    setCart(prevCart => [...prevCart, product])
  }

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  return (
    <div className='app'>
      <div className='app-navbar'>
        <Navbar
          cartItems={cartItems}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </div>
      <div className='app-main'>
        {showCart ? (
          <CartList
            cart={cart}
            setCart={setCart}
            removeFromCart={removeFromCart}
            setShowCart={setShowCart}
          />
        ) : (
          <ProductList addToCart={addToCart} cart={cart} />
        )}
      </div>
    </div>
  )
}

export default App
