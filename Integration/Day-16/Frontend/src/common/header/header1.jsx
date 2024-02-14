import React from 'react'
import './header.css'
import Head from './head'
import Search from './search'
import Navbarr from './navbarr'
import SearchLogout from './searchlogout'

const Header1 = ({login, cartItems}) => {
  return (
   <>
    {/* <Head /> */}
    <SearchLogout/>
    {/* <Search login={login} cartItems={cartItems}/> */}
    <Navbarr/>
   </>
  )
}

export default Header1
