import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import { useDispatch } from 'react-redux'

import Home from './views/Home'
import Product from './views/Product'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'

import { setProducts } from './store/products'
import { products } from './mock-data'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
  }, [])

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
