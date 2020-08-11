import React, { useState } from 'react'
import { Link } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { toggleCart } from '../store/ui'

const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const { address, links, contact } = useSelector(({ metadata }: RootState) => metadata)
  const handleCartClick = () => dispatch(toggleCart())
  const closeMenubar = () => setActive(false)
  const toggleMenubar = () => setActive(!active)

  return (
    <header className='z-20 top-0 bg-white sticky w-full mb-6'>
      <div className='flex justify-between items-center container py-3 relative z-10'>
        <button onClick={toggleMenubar}>menu</button>
        <Link to='/' className='milonga font-black italic uppercase text-3xl leading-none'>
          Bike Vault
        </Link>
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
                <li className='mb-5' key={link.name}>
                  <span className='font-black'>{link.name}</span>
                  <ul>
                    {link.links.map(link => (
                      <li key={link.route}>
                        <Link to={link.route} onClick={closeMenubar} className='block pl-2'>
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
