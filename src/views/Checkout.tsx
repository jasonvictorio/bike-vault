import React, { useState } from 'react'
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
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)

  const handleClear = () => {}
  const handleNext1 = () => {
    setCurrentStep(2)
  }
  const handleBack = () => {
    setCurrentStep(1)
  }
  const handleNext2 = () => {}

  return (
    <div className='container'>
      <h1 className='page-title'>Checkout</h1>
      <div className='mb-10'>
        <ShippingForm />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {currentStep === 1 ? (
          <>
            <button className='border border-red-700 bg-red-700 block px-8 py-3 text-white'>Clear</button>
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
