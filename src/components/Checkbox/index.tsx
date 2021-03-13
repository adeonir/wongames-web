import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

type CheckboxValue = string | ReadonlyArray<string> | number

export type CheckboxProps = {
  labelText?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: CheckboxValue
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  labelText,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.CheckboxContainer>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!labelText && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {labelText}
        </S.Label>
      )}
    </S.CheckboxContainer>
  )
}
