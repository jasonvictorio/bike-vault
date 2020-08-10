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
import { addToCart } from './store/cart'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(products))
    dispatch(addToCart(products[0]))
    dispatch(addToCart(products[1]))
  }, [])

  return (
    <div className='App font-mono leading-loose'>
      <Header />
      <Cart />
      <Router>
        <Home path='/' />
        <Product path='/product/:slug' />
      </Router>
      <Footer />
    </div>
  )
}

export default App
