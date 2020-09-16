import styled, { css } from 'styled-components'

type FullMenuProps = {
  isOpen: boolean
}

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

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100vh;
    overflow: hidden;

    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      left: 0;

      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      margin-top: 3.6rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      opacity: ${isOpen ? 1 : 0};
      transition: all 0.3s 0.2s ease;
    }
  `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background: ${theme.colors.primary};
        animation: hover 0.2s forwards;
      }

      @keyframes hover {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    display: flex;
    align-items: center;
    flex-direction: column;

    > span {
      display: flex;
      font-size: ${theme.font.sizes.xsmall};
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`

export const SignUpLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
