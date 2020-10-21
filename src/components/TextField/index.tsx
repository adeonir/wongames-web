import { InputHTMLAttributes, useState } from 'react'

import { Input, InputWrapper, Label, TextFieldContainer } from './styles'

export type TextFieldProps = {
  labelText?: string
  labelFor?: string
  required?: boolean
  initialValue?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  labelText,
  labelFor,
  required = false,
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <TextFieldContainer>
      {!!labelText && (
        <Label htmlFor={labelFor}>
          {labelText} {required && '*'}
        </Label>
      )}
      <InputWrapper>
        <Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          required={required}
          {...props}
        />
      </InputWrapper>
    </TextFieldContainer>
  )
}
