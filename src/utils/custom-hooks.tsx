import { useState, ChangeEvent } from 'react'

interface useFormFieldArgs {
  name: string
  initialValue?: string
  required?: boolean
  placeholder?: string
  type?: 'text' | 'number' | 'email'
}

export function useFormField({
  name,
  initialValue = '',
  required = false,
  placeholder = name,
  type = 'text',
}: useFormFieldArgs) {
  const [value, setValue] = useState(initialValue)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [valid, setValid] = useState(required ? false : true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    setValid(false)
    setValue(e.target.value)
  }
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const validationMessage = e.target.validationMessage
    setErrorMessage(validationMessage)
    setValid(validationMessage === '')
  }

  return {
    name,
    value,
    required,
    errorMessage,
    onChange,
    onBlur,
    placeholder,
    type,
    valid,
  }
}

export type UseFormField = ReturnType<typeof useFormField>
