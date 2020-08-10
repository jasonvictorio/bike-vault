import React from 'react'
import { Link } from '@reach/router'

const Header = () => {
  const active = false
  const contact = 'contacts'
  const address = 'address detials'
  const links: Array<any> = []
  const toggleMenubar = () => {}
  const handleCartClick = () => {}
  const closeMenubar = () => {}

  return (
    <header className='z-20 top-0 bg-white sticky w-full mb-6'>
      <div className='flex justify-between items-center container py-3 relative z-10'>
        <button onClick={toggleMenubar}>menu</button>
        <h1 className='milonga font-black italic uppercase text-3xl leading-none'>Bike Vault</h1>
        <button onClick={handleCartClick}>cart</button>
      </div>
      <div className={`h-px w-full ${active ? '' : 'bg-gray-400'}`}></div>
      <div
        className={`slide-left fixed pt-16 flex flex-col pb-5 bg-white container h-screen top-0 w-full ${
          active ? 'slide-left--active' : ''
        }`}
      >
        <nav>
          <ul>
            {links.map(link => {
              return (
                <li className='mb-5'>
                  <span className='font-black'>{link.name}</span>
                  <ul>
                    {link.links.map((link: any) => (
                      <li>
                        <Link to='/' onClick={closeMenubar} className='block pl-2'>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='flex flex-col flex-grow justify-end'>
          <div>
            <h1 className='font-black'>Contact</h1>
            <a href='tel:+22'>{contact}</a>
          </div>
          <div>
            <h1 className='font-black'>Address</h1>
            <address className='leading-snug not-italic'>{address}</address>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
