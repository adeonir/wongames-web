import { CheckboxContainer } from './styles'

export type CheckboxProps = {
  label?: string
  name: string
}

export const Checkbox = ({ label, name = '' }: CheckboxProps) => (
  <CheckboxContainer>
    <input type="checkbox" id={name} />
    {!!label && <label htmlFor={name}>{label}</label>}
  </CheckboxContainer>
)
