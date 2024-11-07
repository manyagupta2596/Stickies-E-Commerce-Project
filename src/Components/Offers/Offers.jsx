import React from 'react'
import './Offers.css'
import exclusive from '../Images/Exclusive.png'
import { useNavigate } from 'react-router-dom'
export const Offers = () => {
  const navigate=useNavigate();
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={() => navigate('/keypad')}>Check Now</button>

      </div>
      <div className="offers-right">
        <img src={exclusive} alt=''/>

      </div>
    </div>
  )
}
