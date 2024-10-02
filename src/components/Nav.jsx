import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
    <div className='flex justify-center'>
        <Link className ='mr-4'to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        </div>
        </div>
  )
}

export default Nav