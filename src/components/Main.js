import React from 'react'
import '../stylesheets/Main.css';
import Posts from './Posts';
import Footer from './Footer';
//import Nav_Top from '../components/Nav_Top';
//import Header from '../components/Header';

function Main() {
  return (
    <div className='main'>
        {/* <Nav_Top /> */} 
        {/* <Header /> */} 
        <Posts /> 
        <Footer /> 
    </div>
  );
}

export default Main;