import React from 'react'
import Header from '../Header/Header'
import Routing from '../../routes/Routing'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Routing/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout