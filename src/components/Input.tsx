import React from 'react'
import { pick } from 'lodash'

import { UseFormField } from '../utils'

type props = UseFormField & {
  label: string
  className?: string
}

const Input = (props: props) => {
  const inputClassName = 'px-2 border-b focus:border-black'
  const bar = pick(props, ['name', 'value', 'required', 'onChange', 'onBlur', 'placeholder', 'type'])
  const foo = () => {
    switch (props.type) {
      case 'text':
        return <input className={inputClassName} {...bar} />
      default:
        return <></>
    }
  }

  return (
    <div className={`flex flex-col mb-5 ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      {foo()}
    </div>
  )
}

export default Input
