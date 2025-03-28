import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'
import './App.css'

function App () {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = product => {
    setCart(prevCart => [...prevCart, product])
  }

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  return (
    <div className='app'>
      <div className='app-navbar'>
        <Navbar showCart={showCart} setShowCart={setShowCart} />
      </div>
      <div className='app-main'>
        {showCart ? (
          <CartList
            cart={cart}
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
