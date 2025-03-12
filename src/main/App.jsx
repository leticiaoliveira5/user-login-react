import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../main/Routes';

const App = props =>
  <BrowserRouter>
    <div className="App">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
export default App


