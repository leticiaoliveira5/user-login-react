import './Main.css';
import React from 'react';
import Header from './Header';

const Main = props =>
  <React.Fragment>
    <Header />
    <main className="content">
      conteúdo
    </main>
  </React.Fragment>


export default Main;