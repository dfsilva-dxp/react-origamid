import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background: #fff;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`

export const NavContent = styled.div`
  display: flex;
`

export const Logo = styled.picture`
  width: auto;
  display: flex;
  align-items: center;
  
  h4 {
    font-size: 2rem;
    line-height: 5rem;

    &::after {
      content: ".";
      display: inline-block;
      height: 5rem;
      color: #fd6699;
      font-size: 2rem;
      line-height: 5rem;
    }
  }
`

export const Nav = styled.nav`
  flex: 1;
  margin-left: 2.5rem;

  a {
    display: inline-block;
    height: 5rem;
    line-height: 5rem;
    color: #717171;
    font-weight: 600;
    position: relative;

    & + a {
      margin-left: 1rem;
    }

    &.active {
      color: #fd6699
    }

    &.active::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #fd6699;

      left: 0;
      bottom: 0;
      border-radius: 5px 5px 0 0;
    }
  }
`