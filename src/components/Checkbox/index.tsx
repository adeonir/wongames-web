import { InputHTMLAttributes, useState } from 'react'

import { CheckboxContainer, Input, Label } from './styles'

export type CheckboxProps = {
  name: string
  labelText?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  name,
  labelText,
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
        id={name}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!labelText && (
        <Label htmlFor={name} labelColor={labelColor}>
          {labelText}
        </Label>
      )}
    </CheckboxContainer>
  )
}
