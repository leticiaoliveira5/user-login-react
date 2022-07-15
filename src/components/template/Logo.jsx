import './Logo.css';
import React from 'react';
import logo from '../../assets/images/logo.jpg'

const Logo = props =>
  <aside className="logo">
    <a href="/" className="logo"> <img src={logo} /> </a>
  </aside>

export default Logo