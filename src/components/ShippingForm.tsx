import React from 'react'

const ShippingForm = () => {
  return (
    <form>
      <h1 className='mb-8'>step 1 of 2 - Shipping details</h1>
      <div className='flex flex-col mb-5'>
        <label htmlFor='firstname'>Firstname</label>
        <input name='firstname' type='text' className='px-2 border-b' placeholder='Juan' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='lastname'>Lastname</label>
        <input name='lastname' type='text' className='px-2 border-b' placeholder='Dela Cruz' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='phone'>Phone</label>
        <input name='phone' type='text' className='px-2 border-b' placeholder='+64 22 123 4567' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='email'>Email</label>
        <input name='email' type='text' className='px-2 border-b' placeholder='juandelacruz@mail.com' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='country'>Country</label>
        <input name='country' type='text' className='px-2 border-b' placeholder='Philippines' list='countries' />
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
          <input name='city' type='text' className='px-2 border-b' placeholder='Tokyo' />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='zipcode'>Zip code</label>
          <input name='zipcode' type='text' className='px-2 border-b' placeholder='1116' />
        </div>
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='address'>Address</label>
        <input
          name='address'
          type='text'
          className='px-2 border-b'
          placeholder='#33 Maryland street, Auckland CBD, Auckland'
        />
      </div>
    </form>
  )
}

export default ShippingForm
