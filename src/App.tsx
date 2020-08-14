import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import { useDispatch } from 'react-redux'

import Home from './views/Home'
import Product from './views/Product'
import Checkout from './views/Checkout'
import Category from './views/Category'
import NotFound from './views/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { setProducts, addToCart } from './store'
import { products } from './mock-data'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
    dispatch(addToCart(products[0]))
    dispatch(addToCart(products[1]))
  })

  return (
    <div className='App font-mono leading-loose'>
      <Header />
      <Cart />
      <Router>
        <Home path='/' />
        <Product path='/bike/:slug' />
        <Category path='/bikes' />
        <Category path='/bikes/:category' />
        <Category path='/bikes/:category/:subCategory' />
        <Checkout path='/checkout' />

        <NotFound default />
      </Router>
      <Footer />
    </div>
  )
}

export default App
