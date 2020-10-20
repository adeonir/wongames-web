import { CheckboxContainer, Input, Label } from './styles'

export type CheckboxProps = {
  name: string
  labelText?: string
  labelColor?: 'white' | 'black'
}

export const Checkbox = ({
  name,
  labelText,
  labelColor = 'white',
}: CheckboxProps) => (
  <CheckboxContainer>
    <Input type="checkbox" id={name} />
    {!!labelText && (
      <Label htmlFor={name} labelColor={labelColor}>
        {labelText}
      </Label>
    )}
  </CheckboxContainer>
)
