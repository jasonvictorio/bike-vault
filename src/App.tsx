import React from 'react'
import { Router } from '@reach/router'

import Home from './views/Home'
import Product from './views/Product'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App font-mono leading-loose'>
      <Header />
      <Cart />
      <Router>
        <Home path='/' />
        <Product path='/product/:productSlug' />
      </Router>
      <Footer />
    </div>
  )
}

export default App
