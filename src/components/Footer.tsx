import React from 'react'
import { Link } from '@reach/router'

const Footer = () => {
  const details: { links: Array<any>; contact: string; address: string } = { links: [], contact: '', address: '' }

  return (
    <footer className='text-white bg-black py-8 mt-8'>
      <div className='container'>
        <ul>
          {details.links.map(link => {
            return (
              <li className='mb-5'>
                <span className='font-black'>{link.name}</span>
                <ul>
                  {link.links.map((link: any) => (
                    <li>
                      <Link to='/' className='block'>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
        <div className='flex flex-col flex-grow justify-end mt-10'>
          <div>
            <h1 className='font-black'>Contact</h1>
            <a href='tel:+22'>{details.contact}</a>
          </div>
          <div>
            <h1 className='font-black'>Address</h1>
            <address className='leading-snug not-italic'>{details.address}</address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
