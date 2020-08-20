import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from '@reach/router'
import { isNil, compact } from 'lodash'

import { Breadcrumbs, ProductCatalog } from '../components'
import { selectByCategories } from '../store'
import { slugToString } from '../utils'
import { Slug } from '../types'

interface props extends RouteComponentProps {
  category?: Slug
  subCategory?: Slug
}

const Category = ({ category, subCategory }: props) => {
  const categoryString = slugToString(category ?? '')
  const subCategoryString = slugToString(subCategory ?? '')

  const products = useSelector(selectByCategories(compact([category, subCategory])))
  const title = isNil(subCategory) ? categoryString : subCategoryString

  return (
    <>
      <div>
        <h1 className='text-3xl font-black leading-snug'>{title}</h1>
        <Breadcrumbs category={category} subCategory={subCategory} />
      </div>
      <ProductCatalog products={products} />
    </>
  )
}

export default Category
