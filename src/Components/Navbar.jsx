import { useEffect, useState } from 'react'
import storeSign from '../assets/store-sign.svg'
import './Navbar.css'

function Navbar ({ cartItems, showCart, setShowCart }) {
  return (
    <div className='navbar'>
      <a
        className='store-link'
        onClick={() => {
          showCart ? setShowCart(prevState => !prevState) : null
        }}
      >
        <div className='store-box'>
          <svg
            className='store-sign'
            fill='#ffffff'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#ffffff'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path d='M21,8H17.469l-4.7-5.64a1.036,1.036,0,0,0-1.538,0L6.531,8H3A1,1,0,0,0,2,9V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V9A1,1,0,0,0,21,8ZM12,4.562,14.865,8H9.135ZM16,18H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Zm2-4H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Z'></path>
            </g>
          </svg>
          <h2 className='company-name'>Store</h2>
        </div>
      </a>

      <div className='cart-box'>
        <a
          className='cart-link'
          onClick={() => setShowCart(prevState => !prevState)}
        >
          <h1 className='cart-items'>{cartItems > 0 ? cartItems : null}</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
            id='IconChangeColor'
            height='68'
            width='68'
          >
            <rect width='156' height='156' fill='none'></rect>
            <circle cx='80' cy='216' r='12' fill='white'></circle>
            <circle cx='184' cy='216' r='12' fill='white'></circle>
            <path
              d='M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8'
              fill='none'
              stroke='#faf9f9'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              id='mainIconPathAttribute'
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Navbar
