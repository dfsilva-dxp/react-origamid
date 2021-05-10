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

      &.any::after,
      &.recurrent::after {
        content: "";
        position: absolute;
        width: 5px;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &.any::after {
        background: ${({ theme }) => theme.colors.red};
      }
      &.recurrent::after {
        background: ${({ theme }) => theme.colors.blue};
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
          font-size: 1.5rem;
          max-width: 30px;
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
