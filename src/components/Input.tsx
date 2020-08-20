import React from 'react'
import { pick } from 'lodash'

import { UseFormField } from '../utils'

type props = UseFormField & {
  label: string
  className?: string
  placeholder?: string
  pattern?: string
  type?: string
}

const Input = ({ type = 'text', ...props }: props) => {
  const inputClassName = 'px-2 border-b focus:border-black'
  const bar = pick(props, ['value', 'required', 'onChange', 'onBlur', 'placeholder', 'pattern'])
  const foo = () => {
    switch (type) {
      case 'text':
      case 'email':
        return <input {...{ type, className: inputClassName }} {...bar} />
      default:
        return <></>
    }
  }

  return (
    <label className={`flex flex-col mb-5 ${props.className}`}>
      <span>{props.label}</span>
      {foo()}
    </label>
  )
}

export default Input
