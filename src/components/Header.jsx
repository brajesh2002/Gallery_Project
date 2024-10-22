import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='headerContainer'>
      <li><Link to='/' style={{textDecoration:'none',color:'white'}}>Mountain</Link></li>
      <li><Link to="/beaches" style={{textDecoration:'none',color:'white'}}>Beaches</Link></li>
      <li><Link to="/birds" style={{textDecoration:'none',color:'white'}}>Birds</Link></li>
      <li><Link to="/food" style={{textDecoration:'none',color:'white'}}>Food</Link></li>
    </div>
  )
}
