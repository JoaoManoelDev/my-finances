import styled from 'styled-components'

export const SignInContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    50deg,
    ${(props) => props.theme.colors['gray-600']},
    ${(props) => props.theme.colors['gray-900']}
  );
`

export const SignInFormContainer = styled.form`
  max-width: 30rem;
  width: 100%;
  padding: 2.5rem 2rem;
  background: ${(props) => props.theme.colors['gray-700']};
  border-radius: 6px;
  border-top: 3px solid ${(props) => props.theme.colors['green-300']};

  h1 {
    text-align: center;
  }

  input {
    border: 1px solid ${(props) => props.theme.colors['green-500']};
    margin-top: 2rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors.white};
    transition: 0.2s;
    &:focus,
    &:hover {
      outline: none;
      background: white;
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['green-700']};
    }
  }

  button {
    margin-top: 2rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.colors['green-500']};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: 0.2s;
    border: none;
    &:focus,
    &:hover {
      outline: none;
      background: ${(props) => props.theme.colors['green-700']};
    }
  }
`

export const LinkSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors['gray-300']};

  span {
    font-size: 14px;
  }

  a {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    color: ${({ theme }) => theme.colors['gray-300']};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }
`
