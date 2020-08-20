import React from 'react'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Footer = () => {
  const details = useSelector(({ metadata }: RootState) => metadata)

  return (
    <footer className='text-white bg-black py-8 mt-8'>
      <div className='container mx-auto'>
        <ul className='sm:flex'>
          {details.links.map(link => {
            return (
              <li className='mb-5 sm:mr-10' key={link.name}>
                <span className='font-black'>{link.name}</span>
                <ul>
                  {link.links.map(link => (
                    <li key={link.route}>
                      <Link to={link.route} className='block'>
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
          <div className='mb-5'>
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
