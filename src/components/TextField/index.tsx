import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

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
    <S.TextFieldContainer disabled={disabled} error={!!error}>
      {!!labelText && (
        <S.Label htmlFor={labelFor}>
          {labelText} {required && '*'}
        </S.Label>
      )}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
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
      </S.InputWrapper>
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.TextFieldContainer>
  )
}
