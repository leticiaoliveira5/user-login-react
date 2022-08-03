import './Logo.css';
import React from 'react';
import logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

const Logo = props =>
  <aside className="logo">
    <Link to="/" className="logo"> <img src={logo} /> </Link>
  </aside>

export default Logo