import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector } from 'react-redux'

import ProductCatalog from '../components/ProductCatalog'
import { RootState } from '../store'

const Home = (props: RouteComponentProps) => {
  const products = useSelector((state: RootState) => state.products)
  return <ProductCatalog products={products} />
}

export default Home
