import React from 'react'
import { RouteComponentProps } from '@reach/router'

import { useFormField } from '../utils'
import ShippingForm from '../components/ShippingForm'

/*
1. shipping info
2. billing info
3. payment info

4. confirmation
  -show cart
  -show step 1,2,3 summary
*/

const Checkout = (props: RouteComponentProps) => {
  const firstname = useFormField({ name: 'firstname', required: true })
  const lastname = useFormField({ name: 'lastname' })

  return (
    <div className='container'>
      <h1 className='page-title'>Checkout</h1>
      <ShippingForm />
    </div>
  )
}

export default Checkout
