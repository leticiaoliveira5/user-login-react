import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Home from '../components/home/Home';

const App = props =>
  <div className="App">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>

export default App


