import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../store'
import { Link } from '@reach/router'

const Links = () => {
  const links = useSelector(({ metadata }: RootState) => metadata.links)

  return (
    <ul>
      {links.map(link => {
        return (
          <li className='mb-5' key={link.name}>
            <span className='font-black'>{link.name}</span>
            <ul>
              {link.links.map(link => (
                <li key={link.route}>
                  <Link to={link.route} className='block pl-2'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default Links
