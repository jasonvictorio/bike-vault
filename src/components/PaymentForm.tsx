import React from 'react'

const PaymentForm = () => {
  return (
    <form>
      <h1 className='mb-8'>step 2 of 2 - Payment details</h1>
      <div className='flex flex-col mb-5'>
        <label htmlFor='firstname'>Cardholder's name</label>
        <input name='firstname' type='text' className='px-2 border-b' placeholder='Juan Dela Cruz' />
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='lastname'>Card number</label>
        <input name='lastname' type='text' className='px-2 border-b' placeholder='2222 2222 2222 222' />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col mb-5'>
          <label htmlFor='city'>Valid until</label>
          <input name='city' type='text' className='px-2 border-b' placeholder='MM/YY' />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='city'>CVV</label>
          <input name='zipcode' type='text' className='px-2 border-b' placeholder='000' />
        </div>
      </div>
    </form>
  )
}

export default PaymentForm
