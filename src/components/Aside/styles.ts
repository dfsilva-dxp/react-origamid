import styled from "styled-components";

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.shape};
  grid-area: aside;
  .logo {
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 55px;
    }
  }
  nav {
    width: 100%;
    padding: 2.5rem 0;

    ul li:last-child {
      cursor: pointer;
    }
    ul li:last-child,
    ul li a {
      position: relative;
      height: 3.25rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active::after,
      &:hover::after {
        position: absolute;
        content: "";
        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.colors.blue};
        right: 0;
        border-radius: 3px 0 0 3px;
      }

      & > svg {
        outline: transparent;
      }
    }
  }
`;
