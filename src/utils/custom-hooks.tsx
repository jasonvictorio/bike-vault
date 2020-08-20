import { useState, ChangeEvent } from 'react'

interface useFormFieldArgs {
  initialValue?: string
  required?: boolean
}

export function useFormField({ initialValue = '', required = false }: useFormFieldArgs) {
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
    value,
    required,
    errorMessage,
    onChange,
    onBlur,
    valid,
  }
}

export type UseFormField = ReturnType<typeof useFormField>
