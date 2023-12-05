import React from 'react'
import Header from './components/header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom'; // this used to change only text eg.if header and footer is same only inside of it we have to change

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/> 
    </>

  )
}

export default Layout