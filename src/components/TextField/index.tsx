import { InputHTMLAttributes, useState } from 'react'

import {
  ErrorMessage,
  Icon,
  Input,
  InputWrapper,
  Label,
  TextFieldContainer,
} from './styles'

export type TextFieldProps = {
  labelText?: string
  labelFor?: string
  required?: boolean
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  labelText,
  labelFor,
  required = false,
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
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
    <TextFieldContainer disabled={disabled} error={!!error}>
      {!!labelText && (
        <Label htmlFor={labelFor}>
          {labelText} {required && '*'}
        </Label>
      )}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          required={required}
          disabled={disabled}
          iconPosition={iconPosition}
          hasIcon={!!icon}
          {...props}
        />
      </InputWrapper>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </TextFieldContainer>
  )
}
