import React, { FormEvent } from 'react'
import { useFormField } from '../utils'

interface props {
  onSubmit: () => any
}

const ShippingForm = ({ onSubmit }: props) => {
  const form = {
    firstname: useFormField({ name: 'firstname', required: true }),
    lastname: useFormField({ name: 'lastname', required: true }),
    phone: useFormField({ name: 'phone', required: true }),
    email: useFormField({ name: 'email', required: true }),
    country: useFormField({ name: 'country', required: true }),
    city: useFormField({ name: 'city', required: true }),
    zipcode: useFormField({ name: 'zipcode', required: true }),
    address: useFormField({ name: 'address', required: true }),
  }

  const clear = () => {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const _form = {}

    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='mb-8'>step 1 of 2 - Shipping details</h1>
      <div className='flex flex-col mb-5'>
        <label htmlFor='firstname'>Firstname</label>
        <input {...form.firstname} type='text' className='px-2 border-b' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='lastname'>Lastname</label>
        <input {...form.lastname} type='text' className='px-2 border-b' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='phone'>Phone</label>
        <input {...form.phone} type='text' className='px-2 border-b' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='email'>Email</label>
        <input {...form.email} type='text' className='px-2 border-b' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='country'>Country</label>
        <input {...form.country} type='text' className='px-2 border-b' list='countries' />
        <datalist id='countries'>
          <option value='Philippines' />
          <option value='New Zealand' />
          <option value='United States' />
          <option value='Hong Kong' />
          <option value='Japan' />
        </datalist>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col mb-5'>
          <label htmlFor='city'>City</label>
          <input {...form.city} type='text' className='px-2 border-b' />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='zipcode'>Zip code</label>
          <input {...form.zipcode} type='text' className='px-2 border-b' />
        </div>
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='address'>Address</label>
        <input {...form.address} type='text' className='px-2 border-b' />
      </div>
      <button type='submit' className='hidden'>
        submit
      </button>
    </form>
  )
}

export default ShippingForm
