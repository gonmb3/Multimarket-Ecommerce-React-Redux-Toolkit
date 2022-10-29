import React from 'react'
import Layout from './components/Layout/Layout'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer
    autoClose={1200}
    pauseOnHover={false}
    theme="dark"
    />
      <Layout/>
    </>
  )
}

export default App