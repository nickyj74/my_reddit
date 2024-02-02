import React from 'react'
import Header from './Header';
import './Main.css';
import Posts from './Posts';
import Footer from './Footer';
import Nav_Top from './Nav_Top';

function Main() {
  return (
    <div className='main'>
        <Nav_Top />
        <Header />
        <Posts />
        <Footer />
    </div>
  );
}

export default Main;