import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'
import './App.css'

function App () {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = product => {
    setCart([...cart, product])
  }

  const removeFromCart = productId => {
    setCart(cart.filter(product => product.id !== productId))
  }

  return (
    <div className='app'>
      <div className='app-navbar'>
        <Navbar showCart={showCart} setShowCart={setShowCart} />
      </div>
      <div className='app-main'>
        {showCart ? (
          <CartList cart={cart} removeFromCart={removeFromCart} />
        ) : (
          <ProductList
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  )
}

export default App
