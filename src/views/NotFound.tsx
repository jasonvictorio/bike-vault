import React from 'react'
import { RouteComponentProps, Link } from '@reach/router'

const NotFound = (_props: RouteComponentProps) => {
  return (
    <div className='container text-center py-20'>
      <h1 className='text-4xl font-black'>Error 404</h1>
      <p>
        We cannot find the page you are looking for. Click{' '}
        <Link to='/' className='text-blue-700'>
          here
        </Link>{' '}
        to go back home
      </p>
    </div>
  )
}

export default NotFound
