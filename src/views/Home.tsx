import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector } from 'react-redux'

import { ProductCatalog } from '../components'
import { RootState } from '../store'
import { useFormField } from '../utils'

const Home = (props: RouteComponentProps) => {
  const products = useSelector((state: RootState) => state.products.slice(0, 3))
  const email = useFormField({})
  return (
    <>
      <div className='-mt-6'>
        <img src='/assets/banner.jpg' alt='' />
      </div>
      <h1 className='text-3xl font-black leading-snug mt-6'>Featured bikes</h1>
      <ProductCatalog products={products} />
      <div className='flex items-center jsutify-center flex-col py-24 text-center'>
        <h1 className='-lg font-black leading-snug mb-4'>Subscribe to our newsletter</h1>
        <input
          className='border border-black px-8 py-2 text-center w-full max-w-sm'
          type='email'
          placeholder='juandelacruz@email.com'
          {...email}
        />
      </div>
    </>
  )
}

export default Home
