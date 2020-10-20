import { InputHTMLAttributes, useState } from 'react'

import { CheckboxContainer, Input, Label } from './styles'

export type CheckboxProps = {
  name: string
  labelText?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  name,
  labelText,
  labelColor = 'white',
  onCheck,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <CheckboxContainer>
      <Input type="checkbox" id={name} onChange={onChange} checked={checked} />
      {!!labelText && (
        <Label htmlFor={name} labelColor={labelColor}>
          {labelText}
        </Label>
      )}
    </CheckboxContainer>
  )
}
