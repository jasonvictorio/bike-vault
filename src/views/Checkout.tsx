import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import { useFormField } from '../utils'
import { ShippingForm, PaymentForm } from '../components'

/*
1. shipping info
2. billing info
3. payment info

4. confirmation
  -show cart
  -show step 1,2,3 summary
*/

const Checkout = (props: RouteComponentProps) => {
  const [shippingDetails, setShippingDetails] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    zipcode: '',
    address: '',
  })
  const handleShippingFormSubmit = () => {
    console.log('handleShippingFormSubmit')
  }

  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleClear = () => {}
  const handleNext1 = () => {
    setCurrentStep(2)
    scrollToTop()
  }
  const handleBack = () => {
    setCurrentStep(1)
    scrollToTop()
  }
  const handleNext2 = () => {}

  return (
    <div>
      <h1 className='page-title'>Checkout</h1>
      <div className='mb-10'>
        {currentStep === 1 ? <ShippingForm onSubmit={handleShippingFormSubmit} /> : <PaymentForm />}
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {currentStep === 1 ? (
          <>
            <button className='border border-red-700 bg-red-700 block px-8 py-3 text-white' onClick={handleClear}>
              Clear
            </button>
            <button className='border border-green-700 bg-green-700 block px-8 py-3 text-white' onClick={handleNext1}>
              Next
            </button>
          </>
        ) : (
          <>
            <button className='border border-black block px-8 py-3' onClick={handleBack}>
              Back
            </button>
            <button className='border border-green-700 bg-green-700 block px-8 py-3 text-white' onClick={handleNext2}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Checkout
