import React, { useState } from 'react'
import { Link } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, toggleCart } from '../store'
import Links from './Links'

const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const { address, contact } = useSelector(({ metadata }: RootState) => metadata)
  const handleCartClick = () => dispatch(toggleCart())
  const toggleMenubar = () => setActive(!active)

  return (
    <header className='z-20 top-0 bg-white w-full mb-6 sticky'>
      <div className='flex justify-between items-center py-3 relative z-10'>
        <button onClick={toggleMenubar}>menu</button>
        <Link to='/' className='milonga font-black italic uppercase text-3xl leading-none'>
          Bike Vault
        </Link>
        <button onClick={handleCartClick}>cart</button>
      </div>
      <div className={`h-px w-full ${active ? '' : 'bg-gray-400'}`}></div>
      <div
        className={`slide-left fixed pt-16 pb-5 bg-white h-screen top-0 w-screen ${active ? 'slide-left--active' : ''}`}
      >
        <div className='container mx-auto flex flex-col h-full'>
          <nav>
            <Links />
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
      </div>
    </header>
  )
}

export default Header
