import { InputHTMLAttributes, useState } from 'react'

import { CheckboxContainer, Input, Label } from './styles'

export type CheckboxProps = {
  labelText?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  labelText,
  labelFor,
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
    <CheckboxContainer>
      <Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!labelText && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {labelText}
        </Label>
      )}
    </CheckboxContainer>
  )
}
