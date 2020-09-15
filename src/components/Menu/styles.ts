import styled, { css } from 'styled-components'

export const MenuContainer = styled.menu`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    padding: ${theme.spacings.small} 0;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
