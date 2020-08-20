import React, { useState, FormEvent } from 'react'
import { RouteComponentProps } from '@reach/router'

import { useFormField, UseFormField } from '../utils'
import { Input } from '../components'

/*
1. shipping info
2. billing info
3. payment info

4. confirmation
  -show cart
  -show step 1,2,3 summary
*/

const Checkout = (props: RouteComponentProps) => {
  const shippingForm = {
    firstname: { label: 'First name', placeholder: 'Juan', ...useFormField({ required: true }) },
    lastname: { label: 'Last name', placeholder: 'dela Cruz', ...useFormField({ required: true }) },
    phone: { label: 'Phone', placeholder: '(+64) 22 000 000', ...useFormField({ required: true }) },
    email: {
      label: 'Email',
      placeholder: 'juandelacruz@mail.com',
      type: 'email',
      ...useFormField({ required: true }),
    },
    country: { label: 'Country', placeholder: 'New Zealand', ...useFormField({ required: true }) },
    city: { label: 'City', placeholder: 'Auckland', ...useFormField({ required: true }) },
    zipcode: { label: 'Zipcode', placeholder: '1010', ...useFormField({ required: true }) },
    address: {
      label: 'Address',
      placeholder: '24 Liverland Street, Auckland CBD',
      ...useFormField({ required: true }),
    },
  }

  const paymentForm = {
    name: { label: "CardHolder's name", placeholder: 'Juan dela Cruz', ...useFormField({ required: true }) },
    cardNumber: {
      label: 'Card number',
      placeholder: '2222 22222 2222',
      pattern: '[0-9]{13,16}',
      ...useFormField({ required: true }),
    },
    valid: {
      label: 'Valid until',
      placeholder: 'MM/YY',
      pattern: '(0[1-9]|1[012])/[0-9]{2}',
      ...useFormField({ required: true }),
    },
    cvv: {
      label: 'CVV',
      placeholder: '123',
      type: 'number',
      min: 0,
      max: 999,
      step: 1,
      ...useFormField({ required: true }),
    },
  }

  const [currentStep, setCurrentStep] = useState<1 | 2>(2)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleBack = () => {
    setCurrentStep(1)
    scrollToTop()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
    scrollToTop()
  }

  const handleClear = () => {
    let shippingFormKey: keyof typeof shippingForm
    for (shippingFormKey in shippingForm) {
      shippingForm[shippingFormKey].clear()
    }
    let paymentFormKey: keyof typeof paymentForm
    for (paymentFormKey in paymentForm) {
      paymentForm[paymentFormKey].clear()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='page-title'>Checkout</h1>
      <div className='mb-10'>
        {currentStep === 1 ? <ShippingForm {...shippingForm} /> : <PaymentForm {...paymentForm} />}
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {currentStep === 1 ? (
          <>
            <button
              className='border border-red-700 bg-red-700 block px-8 py-3 text-white'
              type='button'
              onClick={handleClear}
            >
              Clear
            </button>
            <button className='border border-green-700 bg-green-700 block px-8 py-3 text-white' type='submit'>
              Next
            </button>
          </>
        ) : (
          <>
            <button className='border border-black block px-8 py-3' type='button' onClick={handleBack}>
              Back
            </button>
            <button className='border border-green-700 bg-green-700 block px-8 py-3 text-white' type='submit'>
              Next
            </button>
          </>
        )}
      </div>
    </form>
  )
}

function ShippingForm(form: { [key: string]: UseFormField & { placeholder: string; label: string; type?: string } }) {
  return (
    <>
      <h1 className='mb-8'>step 1 of 2 - Shipping details</h1>
      <Input {...form.firstname} />
      <Input {...form.lastname} />
      <Input {...form.phone} />
      <Input {...form.email} />
      <Input {...form.country} />
      <div className='grid grid-cols-2 gap-4'>
        <Input {...form.city} />
        <Input {...form.zipcode} />
      </div>
      <Input {...form.address} />
    </>
  )
}

function PaymentForm(form: { [key: string]: UseFormField & { placeholder: string; label: string; type?: string } }) {
  return (
    <>
      <h1 className='mb-8'>step 2 of 2 - Payment details</h1>
      <Input {...form.name} />
      <Input {...form.cardNumber} />
      <div className='grid grid-cols-2 gap-4'>
        <Input {...form.valid} />
        <Input {...form.cvv} />
      </div>
    </>
  )
}

export default Checkout
