import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1.75rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      padding: 1rem 2rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
    }
    tbody tr {
      position: relative;
      box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
      &.eventual::after,
      &.recurrent::after {
        content: "";
        position: absolute;
        width: 5px;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &.eventual::after {
        background: ${({ theme }) => theme.colors.red};
      }
      &.recurrent::after {
        background: ${({ theme }) => theme.colors.green};
      }
      td {
        background: ${({ theme }) => theme.colors.shape};
        padding: 1rem 2rem;
        border: 0;
        border-radius: 0.25rem;
        color: ${({ theme }) => theme.colors.gray};
        &:first-child {
          color: ${({ theme }) => theme.colors.white};
          font-weight: 600;
        }
        &:last-child {
          font-size: 1.2rem;
          max-width: 30px;
          padding: 0.675rem 2.5rem;
          svg {
            cursor: pointer;
            &:hover {
              color: ${({ theme }) => theme.colors.red};
            }
          }
        }
        &.deposit {
          color: ${({ theme }) => theme.colors.green};
        }
        &.withdraw {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;

export const NavFilterTransaction = styled.nav`
  margin: auto;
  width: 18.75rem;
  padding: 0.675rem 0;
  ul {
    border: solid 3px #2b3c4e;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      cursor: pointer;
      li {
        position: relative;
        display: inline-block;
        width: 5.625rem;
        height: 2.5rem;
        font-size: 0.875rem;
        text-align: center;
        line-height: 2.5rem;
        transition: 0.3s;
        &::before {
          position: relative;
          display: block;
          width: 5.625rem;
          height: 2.5rem;
          content: "";
          transform: scaleY(1.2);
          z-index: -1;
          margin-bottom: -2.5rem;
          transition: 0.3s;
        }
        &:hover {
          background-color: rgba(107, 185, 240, 0.2);
        }
      }
    }
  }
  input {
    display: none;
    &[type="radio"]:checked + label > li {
      font-weight: 600;
      color: #fff;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

      &::before {
        background: ${({ theme }) => theme.colors.blue};
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
      }
    }
    &.recurrent:checked + label > li {
      &::before {
        background: ${({ theme }) => theme.colors.green};
      }
    }
    &.eventual:checked + label > li {
      &::before {
        background: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
