import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import { useDispatch } from 'react-redux'

import { Home, Product, Checkout, Category, NotFound } from './views'
import { Header, Footer, Cart } from './components'

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
      <div className='container mx-auto'>
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
      </div>
      <Footer />
    </div>
  )
}

export default App
