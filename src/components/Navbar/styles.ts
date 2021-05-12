import styled from "styled-components";

export const Navbar = styled.header`
  background: ${({ theme }) => theme.colors.shape};
  grid-area: header;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .wrap {
    display: flex;
    align-items: center;

    .profile {
      display: flex;
      align-items: center;
      margin-left: 2.5rem;

      .avatar {
        width: 2.5rem;
        height: 2.5rem;
        background: ${({ theme }) => theme.colors.shape};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        border: 2px solid ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.text};
      }

      p {
        margin-left: 0.625rem;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 576px) {
    padding: 0 4.5rem;
  }
`;
