import { InputHTMLAttributes } from 'react'

import { Input, Label, RadioContainer } from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  labelText?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
  onCheck?: (value?: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Radio = ({
  labelText,
  labelFor = '',
  labelColor = 'white',
  value,
  onCheck,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <RadioContainer>
      <Input
        type="radio"
        id={labelFor}
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!labelText && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {labelText}
        </Label>
      )}
    </RadioContainer>
  )
}
