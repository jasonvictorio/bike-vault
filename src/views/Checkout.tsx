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
    firstname: useFormField({ name: 'firstname', placeholder: 'Juan', required: true }),
    lastname: useFormField({ name: 'lastname', placeholder: 'dela Cruz', required: true }),
    phone: useFormField({ name: 'phone', placeholder: '(+64) 22 000 0000', required: true }),
    email: useFormField({ name: 'email', placeholder: 'juandelacruz@mail.com', required: true }),
    country: useFormField({ name: 'country', placeholder: 'New Zealand', required: true }),
    city: useFormField({ name: 'city', placeholder: 'Auckland', required: true }),
    zipcode: useFormField({ name: 'zipcode', placeholder: '1010', required: true }),
    address: useFormField({ name: 'address', placeholder: '24 Liverpool Street, Auckland CBD', required: true }),
  }

  const paymentForm = {
    name: useFormField({ name: 'name', placeholder: 'Juan dela Cruz', required: true }),
    cardNumber: useFormField({ name: 'cardNumber', placeholder: '2222222222', required: true }),
    valid: useFormField({ name: 'valid', placeholder: '12/34', required: true }),
    cvv: useFormField({ name: 'cvv', placeholder: '123', required: true }),
  }

  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleClear = () => {}
  const handleBack = () => {
    setCurrentStep(1)
    scrollToTop()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
    scrollToTop()
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
            <button className='border border-red-700 bg-red-700 block px-8 py-3 text-white' onClick={handleClear}>
              Clear
            </button>
            <button className='border border-green-700 bg-green-700 block px-8 py-3 text-white' type='submit'>
              Next
            </button>
          </>
        ) : (
          <>
            <button className='border border-black block px-8 py-3' onClick={handleBack}>
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

function ShippingForm(form: { [key: string]: UseFormField }) {
  return (
    <>
      <h1 className='mb-8'>step 1 of 2 - Shipping details</h1>
      <Input label='First name' {...form.firstname} />
      <Input label='Last name' {...form.lastname} />
      <Input label='Phone' {...form.phone} />
      <Input label='Email' {...form.email} />
      <Input label='Country' {...form.country} />
      <div className='grid grid-cols-2 gap-4'>
        <Input label='City' {...form.city} />
        <Input label='Zip' {...form.zipcode} />
      </div>
      <Input label='Address' {...form.address} />
    </>
  )
}

function PaymentForm(form: { [key: string]: UseFormField }) {
  return (
    <>
      <h1 className='mb-8'>step 2 of 2 - Payment details</h1>
      <Input label="Cardholder's name" {...form.name} />
      <Input label='Card number' {...form.cardNumber} />
      <div className='grid grid-cols-2 gap-4'>
        <Input label='Valid until' {...form.valid} />
        <Input label='CVV' {...form.cvv} />
      </div>
    </>
  )
}

export default Checkout
