import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import './App.css'

function App () {
  return (
    <div className='app'>
      <div className='app-navbar'>
        <Navbar />
      </div>
      <div className='app-main'>
        <ProductList />
      </div>
    </div>
  )
}

export default App
