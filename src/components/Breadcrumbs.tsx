import React from 'react'

import { Product, Slug } from '../types'
import { Link } from '@reach/router'
import { slugToString } from '../utils'

interface props {
  category?: Slug
  subCategory?: Slug
  product?: Product
}

const Breadcrumbs = ({ category, subCategory, product }: props) => {
  const categoryString = slugToString(category ?? '')
  const subCategoryString = slugToString(subCategory ?? '')

  return (
    <ul className='flex'>
      {category && (
        <>
          <li>
            <Link to={category}>{categoryString}</Link>
          </li>
          {subCategory && (
            <>
              <li className='mx-2'>-</li>
              <li>
                <Link to={subCategoryString}>{subCategoryString}</Link>
              </li>
            </>
          )}
        </>
      )}
    </ul>
  )
}

export default Breadcrumbs
