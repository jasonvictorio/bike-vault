import React from 'react'

interface props {
  name: string
  label: string
  placeholder?: string
  type?: string
  className?: string
}

const Input = ({ name, label, placeholder = '', type = 'text', className }: props) => {
  const inputClassName = 'px-2 border-b'
  const foo = () => {
    switch (type) {
      case 'text':
        return <input name={name} type='text' placeholder={placeholder} className={inputClassName} />
      default:
        return <></>
    }
  }

  return (
    <div className={`flex flex-col mb-5 ${className}`}>
      <label htmlFor={name}>{label}</label>
      {foo()}
    </div>
  )
}

export default Input
