import React from 'react'
import { pick, pickBy, identity } from 'lodash'

import { UseFormField } from '../utils'

type props = UseFormField & {
  label: string
  className?: string
  placeholder?: string
  pattern?: string
  type?: string

  min?: number
  max?: number
  step?: number
}

const Input = ({ type = 'text', ...props }: props) => {
  const inputClassName = 'px-2 border-b focus:border-black'
  const numberArgs = pickBy({ min: `${props.min}`, max: `${props.max}`, step: `${props.step}` }, identity)
  const bar = pick(props, ['value', 'required', 'onChange', 'onBlur', 'placeholder', 'pattern'])
  const foo = () => {
    switch (type) {
      case 'text':
      case 'email':
        return <input {...{ type, className: inputClassName }} {...bar} />
      case 'number':
        return <input {...{ type, className: inputClassName, ...numberArgs }} {...bar} />
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
