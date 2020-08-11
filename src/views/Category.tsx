import React from 'react'
import ProductCatalog from '../components/ProductCatalog'
import { useSelector } from 'react-redux'
import { selectByCategories } from '../store/products'
import { RouteComponentProps } from '@reach/router'

interface props {
  category: string
  subCategory: string
}

const Category = ({ category = '', subCategory = '' }: RouteComponentProps<props>) => {
  const products = useSelector(selectByCategories([category, subCategory]))

  return <ProductCatalog products={products} />
}

export default Category
