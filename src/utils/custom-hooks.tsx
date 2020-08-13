import { useState, ChangeEvent } from 'react'

interface useFormFieldArgs {
  name: string
  initialValue?: string
  required?: boolean
}

export function useFormField({ name, initialValue = '', required = false }: useFormFieldArgs) {
  const [value, setValue] = useState(initialValue)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    setValue(e.target.value)
  }
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(e.target.validationMessage)
  }

  return {
    name,
    value,
    required,
    errorMessage,
    onChange,
    onBlur,
    placeholder: name,
  }
}
